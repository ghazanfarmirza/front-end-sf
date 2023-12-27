'use client';
import { getSearchBarData } from '@/lib/gql';
import { getDataFromStrapi } from '@/lib/networkCalls/strapiFunctions';
import { Search, X } from 'lucide-react';
import { FC, useEffect, useRef, useState } from 'react';
import SearchDropDown from '../SearchDropDown/SearchDropDown';
import SearchDropDownResources from '../SearchDropDown/SearchDropDownResources';
import styles from './SearchBarFill.module.css';

interface SearchBarFillProps {
	resources?: any;
}

const SearchBarFill: FC<SearchBarFillProps> = ({ resources }) => {
	const [isFocused, setIsFocused] = useState(false);
	const inputSquareRef = useRef<HTMLInputElement | null>(null);
	const dropdownSquareRef = useRef<HTMLDivElement | null>(null);

	const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
		// Check if the new focus is outside both the input and dropdownSquareRef
		if (
			inputSquareRef.current &&
			!inputSquareRef.current.contains(e.relatedTarget as Node) &&
			dropdownSquareRef.current &&
			!dropdownSquareRef.current.contains(e.relatedTarget as Node)
		) {
			setIsFocused(false);
		}
	};

	//query search api
	const [searchValue, setSearchValue] = useState('');
	const [vendorResults, setVendorResults] = useState([]);
	const [subCategoryResults, setSubCategoryResults] = useState([]);
	const [resourcesResults, setResourcesResults] = useState([]);

	useEffect(() => {
		const delayDebounceFn = setTimeout(() => {
			async function fetchData() {
				if (searchValue) {
					const res = await getDataFromStrapi(
						getSearchBarData(searchValue, resources && true)
					);
					setResourcesResults(res?.resources?.data);
					setVendorResults(res?.vendors?.data);
					setSubCategoryResults(res?.subCategories?.data);
				} else {
					setVendorResults([]);
					setSubCategoryResults([]);
					setResourcesResults([]);
				}
			}
			fetchData();
		}, 1000);

		return () => clearTimeout(delayDebounceFn);
	}, [searchValue, resources]);

	return (
		<>
			<div className={styles.search}>
				<input
					type="text"
					placeholder={
						(!resources && 'Search Software, Category, Service..') || 'Search'
					}
					className="w-full"
					ref={inputSquareRef}
					value={searchValue}
					onFocus={() => setIsFocused(true)}
					onBlur={handleBlur}
					onChange={(e) => setSearchValue(e.target.value)}
				/>
				{searchValue && isFocused ? (
					<X width={16} height={16} onClick={() => setIsFocused(false)} />
				) : (
					<Search width={16} height={16} />
				)}

				{isFocused && (
					<div ref={dropdownSquareRef} className="mt-3">
						{(!resources && (
							<SearchDropDown
								list={[
									{
										id: 1,
										title: 'Products',
										listItems: vendorResults?.map((vendor: any) => ({
											attributes: vendor?.attributes,
										})),
									},
									{
										id: 2,
										title: 'Category',
										listItems: subCategoryResults?.map((subCategory: any) => ({
											attributes: subCategory?.attributes,
										})),
									},
								]}
								searchTerm={searchValue}
							/>
						)) || (
							<SearchDropDownResources
								list={[
									{
										id: 1,
										title: 'Resources',
										listItems: resourcesResults?.map((resource: any) => ({
											attributes: resource?.attributes,
										})),
									},
								]}
								searchTerm={searchValue}
							/>
						)}
					</div>
				)}
			</div>
		</>
	);
};

export default SearchBarFill;
