'use client';
import CategoryListItem from '@/components/Categorys/CategoryListItem/CategoryListItem';
import CategoryListItemMobile from '@/components/Categorys/CategoryListItemMobile/CategoryListItemMobile';
import Header from '@/components/Header/Header';
import { Loader } from '@/components/Loader/Loader';
import PageHeaderTransparent from '@/components/Page/PageHeaderTransparent/PageHeaderTransparent';
import {
	SubCategories,
	Vendors,
} from '@/components/Search/SearchBarTransparent/SearchBarTransparent';
import SearchTabs from '@/components/Search/SearchTab/SearchTabs';
import { getSearchBarData, getVendorsBySearch } from '@/lib/gql';
import { getDataFromStrapi } from '@/lib/networkCalls/strapiFunctions';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Search = () => {
	const searchParams = useSearchParams();
	const [isLoading, setIsLoading] = useState(true);
	const search = searchParams.get('search');

	const [vendorResults, setVendorResults] = useState<Vendors>([]);
	const [subCategoryResults, setSubCategoryResults] = useState<SubCategories>(
		[]
	);

	useEffect(() => {
		async function fetchData() {
			if (search) {
				const res = await getDataFromStrapi(
					getSearchBarData(search, false, 30)
				);
				setVendorResults(res?.vendors?.data);
				setSubCategoryResults(res?.subCategories?.data);
			}
		}
		fetchData();
	}, [search]);

	const [searchedVendors, setSearchedVendors] = useState<any>([]);
	useEffect(() => {
		const searchData = async () => {
			const array =
				vendorResults.map((item: any) => item?.attributes?.slug) || [];
			const query = getVendorsBySearch(array);
			const vendorsFromDb = await getDataFromStrapi(query);
			setSearchedVendors(vendorsFromDb?.vendors.data);
			vendorsFromDb && setIsLoading(false);
		};
		searchData();
	}, [subCategoryResults, vendorResults]);

	const [activeTab, setActiveTab] = useState('product');
	const handleTabChange = (tab: string) => {
		setActiveTab(tab);
	};
	return (
		<>
			{(isLoading && <Loader />) || (
				<>
					<Header sticky={true} />
					<div className="mt-10 mb-12 lg:mt-20 lg:mb-24">
						<PageHeaderTransparent
							title={`${
								activeTab == 'product'
									? searchedVendors?.length
									: subCategoryResults.length
							} Search Result For “${search}”`}
						/>
						<section className="hidden lg:block">
							<div className="container">
								<SearchTabs onTabChange={handleTabChange} />
								<div className="flex flex-col gap-6">
									{activeTab === 'product'
										? searchedVendors.length > 0 &&
										  searchedVendors.map((vendor: any) => (
												<CategoryListItem
													key={uuidv4()}
													item={vendor.attributes}
													type="software"
												/>
										  ))
										: subCategoryResults.length > 0 && (
												<ul className="flex flex-col gap-1 mb-12 mt-8">
													{subCategoryResults.map((subCategory: any) => (
														<li key={uuidv4()} className="ml-10 mb-5">
															<a
																href={`/${subCategory.attributes?.category.data.attributes?.slug}/${subCategory.attributes?.slug}`}
																className="text-lg hover:text-dark-green transition-effect"
															>
																{subCategory.attributes?.name}
															</a>
														</li>
													))}
												</ul>
										  )}
								</div>
							</div>
						</section>
						<section className="block lg:hidden">
							<div className="container">
								<SearchTabs onTabChange={handleTabChange} />
								<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
									{activeTab === 'product'
										? searchedVendors.length > 0 &&
										  searchedVendors.map((vendor: any) => (
												<CategoryListItemMobile
													key={uuidv4()}
													item={vendor.attributes}
													type="software"
												/>
										  ))
										: subCategoryResults.length > 0 && (
												<ul className="flex flex-col gap-1 mb-12 mt-8">
													{subCategoryResults.map((subCategory: any) => (
														<li key={uuidv4()} className="ml-10 mb-5">
															<a
																href={`/${subCategory.attributes?.category.data.attributes?.slug}/${subCategory.attributes?.slug}`}
																className="text-lg hover:text-dark-green transition-effect"
															>
																{subCategory.attributes?.name}
															</a>
														</li>
													))}
												</ul>
										  )}
								</div>
							</div>
						</section>
					</div>
				</>
			)}
		</>
	);
};

export default Search;
