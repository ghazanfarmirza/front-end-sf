'use client';
import { getSearchBarData } from '@/lib/gql';
import { getDataFromStrapi } from '@/lib/networkCalls/strapiFunctions';
import { Search, X } from 'lucide-react';
import React, { FC, useEffect, useRef, useState } from 'react';
import SearchDropDown from '../SearchDropDown/SearchDropDown';
import styles from './SearchBarSquare.module.css';

interface SearchBarSquareProps {
	placeholder?: string;
}

const SearchBarSquare: FC<SearchBarSquareProps> = ({ placeholder }) => {
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
	const [searchValue, setSearchValue] = useState('');
	const [subCategoryResults, setSubCategoryResults] = useState([]);

	useEffect(() => {
		const delayDebounceFn = setTimeout(() => {
			async function fetchData() {
				if (searchValue) {
					const res = await getDataFromStrapi(getSearchBarData(searchValue));
					setSubCategoryResults(res?.subCategories?.data);
				} else {
					setSubCategoryResults([]);
				}
			}
			fetchData();
		}, 1000);

		return () => clearTimeout(delayDebounceFn);
	}, [searchValue]);

	return (
		<div>
			<div className={styles.search}>
				<input
					ref={inputSquareRef}
					type="text"
					placeholder={placeholder}
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
					<div ref={dropdownSquareRef}>
						<SearchDropDown
							list={[
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
					</div>
				)}
			</div>
		</div>
	);
};
export default SearchBarSquare;
