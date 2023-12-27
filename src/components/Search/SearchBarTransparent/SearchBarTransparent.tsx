import { getSearchBarData } from '@/lib/gql';
import { getDataFromStrapi } from '@/lib/networkCalls/strapiFunctions';
import { Search, X } from 'lucide-react';
import { FC, useEffect, useRef, useState } from 'react';
import SearchDropDown from '../SearchDropDown/SearchDropDown';
import styles from './SearchBarTransparent.module.css';

interface SearchBarTransparentProps {
	// vendors?: {
	// 	attributes: {
	// 		name: string;
	// 		slug: string;
	// 		logo: { image_url: string | null };
	// 		categories: { data: [{ attributes: { slug: string } }] };
	// 	};
	// }[];
	// subCategories?: {
	// 	attributes: {
	// 		name: string;
	// 		slug: string;
	// 		category: {
	// 			data: { attributes: { slug: string } };
	// 		};
	// 	};
	// }[];
}
export type Vendors = {
	attributes: {
		name: string;
		slug: string;
		logo: { image_url: string | null };
		categories: { data: [{ attributes: { slug: string } }] };
	};
}[];

export type SubCategories = {
	attributes: {
		name: string;
		slug: string;
		category: {
			data: { attributes: { slug: string } };
		};
	};
}[];

const SearchBarTransparent: FC<SearchBarTransparentProps> = () => {
	const [isFocused, setIsFocused] = useState(false);
	const inputRef = useRef<HTMLInputElement | null>(null);
	const dropdownRef = useRef<HTMLDivElement | null>(null);
	const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
		// Check if the new focus is outside both the input and dropdown
		if (
			inputRef.current &&
			!inputRef.current.contains(e.relatedTarget as Node) &&
			dropdownRef.current &&
			!dropdownRef.current.contains(e.relatedTarget as Node)
		) {
			setIsFocused(false);
		}
	};
	const [searchValue, setSearchValue] = useState('');
	const [vendorResults, setVendorResults] = useState([]);
	const [subCategoryResults, setSubCategoryResults] = useState([]);

	const hasResults = vendorResults.length > 0 || subCategoryResults.length > 0;

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
		<div className={styles.search}>
			<input
				ref={inputRef}
				type="text"
				placeholder="How can we help?"
				className="w-full"
				onFocus={() => setIsFocused(true)}
				onBlur={handleBlur}
				onChange={(e) => setSearchValue(e.target.value)}
			/>
			{searchValue ? (
				<X width={16} height={16} onClick={() => setIsFocused(false)} />
			) : (
				<Search width={16} height={16} />
			)}

			{isFocused && searchValue && (
				<div ref={dropdownRef}>
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
						hasResults={hasResults}
					/>
				</div>
			)}
		</div>
	);
};

export default SearchBarTransparent;
