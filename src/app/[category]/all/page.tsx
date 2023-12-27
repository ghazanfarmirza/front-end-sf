'use client';
import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import CategoryListItem from '@/components/Categorys/CategoryListItem/CategoryListItem';
import CtaBlue from '@/components/CtaFolder/CtaBlue/CtaBlue';
import Filters from '@/components/Filter/Filters/Filters';
import Header from '@/components/Header/Header';
import { Loader } from '@/components/Loader/Loader';
import LoadingSpinner from '@/components/LoadingSpinner/LoadingSpinner';
import MetaTags from '@/components/MetaTags/MetaTags';
import PageFillHeader from '@/components/Page/PageFillHeader/PageFillHeader';
import SortBox from '@/components/SortBox/SortBox';
import RightArrowDownLink from '@/components/ui/Link/RightArrowLink/RightArrowDownLink/RightArrowDownLink';
import CategoryListMobileContainer from '@/containers/CategoryListMobileContainer/CategoryListMobileContainer';
import { getVendorByCategoryAllProductsPage } from '@/lib/gql';
import { getDataFromStrapi } from '@/lib/networkCalls/strapiFunctions';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Page = () => {
	const paths = usePathname().split('/');
	const categorySlug = paths[paths.length - 2];
	const [offset, setOffset] = useState(0);
	const [allVendors, setAllVendors] = useState<Set<any>>(new Set());
	const [isLoading, setIsLoading] = useState(true);

	const handleLoadMore = () => {
		setIsLoading(true);
		setOffset((prevOffset) => prevOffset + 10);
	};
	const [categoryInfo, setCategoryInfo] = useState<any>({});
	// const [currentSortOption, setCurrentSortOption] = useState('recent');

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response: any = await getDataFromStrapi(
					getVendorByCategoryAllProductsPage(categorySlug, offset)
				);
				const categoryAttributes = response?.categories?.data[0]?.attributes;
				if (categoryAttributes) {
					const { vendors } = categoryAttributes;
					// Use a Set to prevent duplicates
					if (offset === 0) {
						setAllVendors(new Set(vendors.data));
						setCategoryInfo(categoryAttributes);
					} else
						setAllVendors((prevVendors) => {
							const newSet = new Set(prevVendors);
							vendors.data.forEach((vendor: any) => newSet.add(vendor));
							return newSet;
						});
				}
				setIsLoading(false);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};

		// Fetch data whenever offset changes
		fetchData();
	}, [offset, categorySlug]);

	return (
		<>
			<MetaTags />
			<Header sticky={true} />
			{(isLoading && offset < 10 && <Loader />) || (
				<>
					<PageFillHeader title={categoryInfo?.name} />
					<BreadCrumb
						item1={{ name: categoryInfo?.name, link: categoryInfo?.slug }}
						item2={`All ${
							categoryInfo.type == 'service' ? 'Companies' : 'Products'
						}`}
					/>
					{/* Desktop Screen */}
					<section className="hidden mb-16 lg:block">
						<div className="container">
							<div className="grid grid-cols-12 gap-4">
								<div className="col-span-3">
									<Filters />
								</div>
								<div className="col-span-9">
									<SortBox />
									<div className="flex flex-col gap-8">
										{Array.from(allVendors).map((item) => (
											<CategoryListItem
												key={uuidv4()}
												item={item.attributes}
												category={categorySlug}
												type={categoryInfo?.type}
											/>
										))}
									</div>
									<div className="flex items-center justify-center mt-8">
										{(!isLoading && (
											<button onClick={handleLoadMore}>
												<RightArrowDownLink
													title={`Load more ${
														(categoryInfo.type == 'service' && 'Companies') ||
														'Products'
													}`}
												/>
											</button>
										)) ||
											(offset > 10 && <LoadingSpinner />)}
									</div>
								</div>
							</div>
						</div>
					</section>
					{/* Mobile Screen */}
					<CategoryListMobileContainer
						categoryListItems={Array.from(allVendors)}
						category={categorySlug}
						type={categoryInfo?.type}
					/>
					<div className="flex items-center justify-center mt-4 mb-8 md:hidden">
						{(!isLoading && (
							<button onClick={handleLoadMore}>
								<RightArrowDownLink title="Load more Products" />
							</button>
						)) ||
							(offset > 10 && <LoadingSpinner />)}
					</div>
					<CtaBlue category={categoryInfo?.name} />
				</>
			)}
		</>
	);
};

export default Page;
