'use client';
import { cn } from '@/lib/utils/utils';
import { X } from 'lucide-react';
import { FC, useEffect, useState } from 'react';

import { getSearchBarData } from '@/lib/gql';
import { getDataFromStrapi } from '@/lib/networkCalls/strapiFunctions';
import SearchDropDownMobile from '../SearchDropDownMobile/SearchDropDownMobile';
import styles from './SearchPopupMobile.module.css';

interface SearchPopupMobileProps {
	isOpen: boolean;
	// eslint-disable-next-line no-unused-vars
	setIsOpen: (isOpen: boolean) => void;
}

const SearchPopupMobile: FC<SearchPopupMobileProps> = ({
	isOpen,
	setIsOpen,
}) => {
	const [searchValue, setSearchValue] = useState('');
	const [vendorResults, setVendorResults] = useState([]);
	const [subCategoryResults, setSubCategoryResults] = useState([]);

	useEffect(() => {
		const delayDebounceFn = setTimeout(() => {
			async function fetchData() {
				if (searchValue) {
					const res = await getDataFromStrapi(getSearchBarData(searchValue));
					setVendorResults(res?.vendors?.data);
					setSubCategoryResults(res?.subCategories?.data);
				} else {
					setVendorResults([]);
					setSubCategoryResults([]);
				}
			}
			fetchData();
		}, 1000);

		return () => clearTimeout(delayDebounceFn);
	}, [searchValue]);
	return (
		<div className={cn(styles.search, isOpen ? 'block' : 'hidden')}>
			<input
				type="text"
				placeholder="How can we help?"
				className="w-full"
				onChange={(e) => setSearchValue(e.target.value)}
			/>
			<X
				width={24}
				height={24}
				onClick={() => setIsOpen(false)}
				className="cursor-pointer"
			/>
			<div>
				<SearchDropDownMobile
					list={[
						{
							id: 1,
							title: 'Products',
							listItems: vendorResults.map((vendor: any) => ({
								attributes: vendor?.attributes,
							})),
						},
						{
							id: 2,
							title: 'Category',
							listItems: subCategoryResults.map((subCategory: any) => ({
								attributes: subCategory?.attributes,
							})),
						},
					]}
					searchTerm={searchValue}
				/>
			</div>
		</div>
	);
};

export default SearchPopupMobile;
