import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import Header from '@/components/Header/Header';
import MetaTags from '@/components/MetaTags/MetaTags';
import VendorHeaderMobile from '@/components/VendorHeaderMobile/VendorHeaderMobile';
import VendorHeader from '@/components/Vendors/VendorHeader/VendorHeader';
import ReviewsContainer from '@/containers/ReviewsContainer/ReviewsContainer';
import { getVendorReviews } from '@/lib/gql';
import { getDataFromStrapi } from '@/lib/networkCalls/strapiFunctions';
import { calculateRatingStatistics } from '@/lib/utils/ratingstats';

interface pageProps {
	params: { vendor: string };
}

const Page: any = async ({ params: { vendor } }: pageProps) => {
	let tabNames: string[] = ['overview'];

	const response = await getDataFromStrapi(getVendorReviews(vendor)); // Pass the limit to the query
	const vendorInfo = response?.vendors?.data[0]?.attributes;
	const vendorId = response?.vendors?.data[0]?.id;
	const {
		seo_reviews: seo,
		faqs,
		prosAndCons: { pros, cons },
		show_pros_cons,
		feature,
		prices,
		reviews,
		top_alternatives,
		categories: {
			data: [
				{
					attributes: {
						name: categoryName,
						slug: categorySlug,
						type,
						top_alternatives: categoryTopAlternatives,
					},
				},
			],
		},
	} = vendorInfo;
	if (
		feature &&
		feature.length > 0 &&
		feature.some((item: any) => item.feature_status === true)
	)
		tabNames.push('features');
	if (show_pros_cons && (pros.length > 0 || cons.length > 0))
		tabNames.push('pros and cons');
	if (type == 'service') tabNames.push('alternatives'); //service vendor page

	if (prices.length > 0 && prices[0].plan_title) tabNames.push('pricing');
	tabNames.push('reviews');
	if (faqs.data.length > 0) tabNames.push('faqs');
	const alternatives =
		top_alternatives?.data.length == 0
			? categoryTopAlternatives.data
			: top_alternatives.data;
	if (type == 'software' && alternatives.length > 0)
		tabNames.push('alternatives');
	if (type == 'service') tabNames.push('resources'); //service vendor page

	const { ratingCounts, averageRating, totalReviews } =
		calculateRatingStatistics(reviews.data);

	return (
		<>
			<MetaTags seo={seo} />
			<Header sticky={false} />
			<BreadCrumb
				item1={{ name: categoryName, link: categorySlug }}
				item2={{ name: vendorInfo?.name, link: vendor }}
				item3={'Reviews'}
			/>
			<VendorHeader
				name={vendorInfo?.name}
				logo={vendorInfo?.logo}
				rating={averageRating}
				totalReviews={totalReviews}
				tabNames={tabNames}
				youtubeUrl={vendorInfo?.youtube_link}
				type={type}
			/>
			<VendorHeaderMobile
				name={vendorInfo?.name}
				logo={vendorInfo?.logo}
				rating={averageRating}
				totalReviews={totalReviews}
				tabNames={tabNames}
				youtubeUrl={vendorInfo.youtube_link}
				type={type}
			/>

			<ReviewsContainer
				reviewsInfo={{ ratingCounts, averageRating, totalReviews }}
				allReviews={reviews.data}
				vendorInfo={{
					name: vendorInfo?.name,
					id: vendorId,
					logo: vendorInfo?.logo,
				}}
			/>
		</>
	);
};

export default Page;
