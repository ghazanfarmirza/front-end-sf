import AlternativeDetailContent from '@/components/Alternative/AlternativeDetailContent/AlternativeDetailContent';
import AlternativeGrid from '@/components/Alternative/AlternativeGrid/AlternativeGrid';
import AlternativeGridSlider from '@/components/Alternative/AlternativeGridSlider/AlternativeGridSlider';
import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import CategoryDetailSideBar from '@/components/Categorys/CategoryDetailSideBar/CategoryDetailSideBar';
import CompareFeaturesTable from '@/components/CompareFeaturesTable/CompareFeaturesTable';
import CompareFeaturesTableMobile from '@/components/CompareFeaturesTableMobile/CompareFeaturesTableMobile';
import Cta from '@/components/CtaFolder/Cta/Cta';
import Header from '@/components/Header/Header';
import MetaTags from '@/components/MetaTags/MetaTags';
import ScrollTop from '@/components/ScrollTop/ScrollTop';
import Description from '@/components/ui/Description/Description';
import CategoryDetailSideBarMobile from '@/containers/Category/CategoryDetailSideBarMobile/CategoryDetailSideBarMobile';
import CategoryTopPicks from '@/containers/Category/CategoryTopPicks/CategoryTopPicks';
import Faq from '@/containers/Faq/Faq';
import RecommendedArticles from '@/containers/Recommendation/RecommendedArticles/RecommendedArticles';
import RecommendedArticlesMobile from '@/containers/RecommendedArticlesMobile/RecommendedArticlesMobile';
import UserReviewGrid from '@/containers/UserReviewGrid/UserReviewGrid';
import UserReviewGridMobile from '@/containers/UserReviewGridMobile/UserReviewGridMobile';
import { getAlternativeBySlug } from '@/lib/gql';
import { getDataFromStrapi } from '@/lib/networkCalls/strapiFunctions';
import { calculateRatingStatistics } from '@/lib/utils/ratingstats';
import dynamic from 'next/dynamic';

interface pageProps {
	params: { vendor: string };
}

const Page: any = async ({ params: { vendor } }: pageProps) => {
	const res = await getDataFromStrapi(getAlternativeBySlug(vendor));
	const alternativeInfo = res?.vendors?.data[0]?.attributes;
	if (!alternativeInfo) return null;
	const {
		name,
		logo,
		seo_alternative: seo,
		faqs,
		feature,
		show_pros_cons,
		prosAndCons: { pros, cons },
		prices,
		allReviews,
		youtube_link,
		specifications,
		top_alternatives,
		alternative_short_description,
		alternative_long_description,
		alternative_top_reviews_vendors,
		alternative_more_alternatives,
		alternative_compare_features,
		alternative_recommended_whitepaper_articles,
		categories: {
			data: [
				{
					attributes: {
						name: category,
						slug,
						type,
						alternative_recommended_whitepaper_articles:
							CategoryAlternativeRecommendedWhitePaperArticles,
						top_alternatives: categoryTopAlternatives,
						alternative_short_description: categoryAlternativeShortDescription,
						alternative_long_description: categoryAlternativeLongDescription,
						alternative_top_reviews_vendors:
							categoryAlternativesTopReviewsVendors,
						alternative_more_alternatives: categoryAlternativesMoreAlternatives,
						alternative_compare_features: categoryAlternativeCompareFeatures,
					},
				},
			],
		},
	} = alternativeInfo;
	let vendorsfeatures = (
		alternative_compare_features?.data.length > 0
			? alternative_compare_features.data
			: categoryAlternativeCompareFeatures?.data
	)
		?.filter((i: any) => i.attributes.slug != vendor)
		?.slice(0, 4);
	vendorsfeatures = [
		{
			attributes: {
				specifications,
				logo,
				name,
				slug: vendor,
				categories: { data: [{ attributes: { slug } }] },
			},
		},
		...vendorsfeatures,
	];

	const top10Alternatives =
		(top_alternatives?.data.length > 0 && top_alternatives.data) ||
		categoryTopAlternatives?.data;
	const shortDescription =
		alternative_short_description || categoryAlternativeShortDescription;
	const longDescription =
		alternative_long_description || categoryAlternativeLongDescription;
	const moreAlternatives =
		alternative_more_alternatives?.data.length > 0
			? alternative_more_alternatives.data
			: categoryAlternativesMoreAlternatives?.data;
	// Calculate the average rating for each vendor
	top10Alternatives &&
		top10Alternatives.forEach((vendor: any) => {
			const reviews = vendor.attributes?.reviews.data;
			const sum = reviews.reduce(
				(total: any, review: any) => total + review.attributes?.rating,
				0
			);
			vendor.averageRating = sum / reviews.length;
		});
	let topReviewsVendors =
		alternative_top_reviews_vendors?.data.length > 0
			? alternative_top_reviews_vendors.data
			: categoryAlternativesTopReviewsVendors?.data;
	topReviewsVendors = topReviewsVendors?.map((i: any) => {
		return {
			title: i.attributes?.name,
			image: i.attributes?.logo?.image_url,
			link: `/${i.attributes?.categories?.data[0].attributes?.slug}/${i.attributes?.slug}/reviews`,
			description: i.attributes?.description,
		};
	});

	const recommended_resources =
		alternative_recommended_whitepaper_articles?.data.length > 0
			? alternative_recommended_whitepaper_articles
			: CategoryAlternativeRecommendedWhitePaperArticles;

	// Sort the vendors in descending order based on average rating
	top10Alternatives?.sort(
		(a: any, b: any) => b.averageRating - a.averageRating
	);

	const VendorHeader = dynamic(
		() => import('@/components/Vendors/VendorHeader/VendorHeader'),
		{ ssr: false }
	);
	const VendorHeaderMobile = dynamic(
		() => import('@/components/VendorHeaderMobile/VendorHeaderMobile'),
		{ ssr: false }
	);
	let tabNames: string[] = ['overview'];

	if (
		feature &&
		feature.length > 0 &&
		feature.some((item: any) => item.feature_status === true)
	)
		tabNames.push('features');
	if (show_pros_cons && (pros.length > 0 || cons.length > 0))
		tabNames.push('pros and cons');
	if (prices.length > 0 && prices[0].plan_title) tabNames.push('pricing');
	if (type == 'service' && moreAlternatives?.length > 0)
		tabNames.push('alternatives'); //service vendor page
	if (allReviews.data.length > 0) tabNames.push('reviews');
	if (faqs.data.length > 0) tabNames.push('faqs');
	if (type != 'service' && top10Alternatives && top10Alternatives.length > 0)
		tabNames.push('alternatives');
	if (type == 'service') tabNames.push('resources');
	const { averageRating, totalReviews } = calculateRatingStatistics(
		allReviews.data
	);
	return (
		<>
			<MetaTags seo={seo} />
			<ScrollTop />
			<Header sticky={false} />
			<BreadCrumb
				item1={{ name: category, link: slug }}
				item2={{ name: name, link: vendor }}
				item3="Alternatives"
			/>
			<VendorHeader
				name={name}
				logo={logo}
				rating={averageRating}
				totalReviews={totalReviews}
				tabNames={tabNames}
				youtubeUrl={youtube_link}
				type={type}
			/>
			<VendorHeaderMobile
				name={name}
				logo={logo}
				rating={averageRating}
				totalReviews={totalReviews}
				tabNames={tabNames}
				youtubeUrl={youtube_link}
				type={type}
			/>
			{shortDescription && (
				<section className="mt-12 ">
					<div className="container">
						<div className="flex flex-col grid-cols-12 gap-8 lg:grid">
							<CategoryDetailSideBar sideBarList={sideBarList(name)} />
							{/* For Mobile Screens  */}
							<CategoryDetailSideBarMobile sideBarList={sideBarList(name)} />
							<AlternativeDetailContent
								name={name}
								description={shortDescription}
							/>
						</div>
					</div>
				</section>
			)}
			<section id="top-picks" className="pageJump"></section>
			<CategoryTopPicks
				title="Top 10 Alternatives"
				vendors={top10Alternatives}
				category={slug}
				type="software"
			/>
			<section id="compare-features" className="scroll-my-6 pageJump"></section>
			{/* For Desktop Screens */}
			{vendorsfeatures.length > 1 && (
				<>
					<CompareFeaturesTable
						featureProperties={specifications}
						vendorsfeatures={vendorsfeatures}
					/>

					{/* For Mobile Screens */}
					<CompareFeaturesTableMobile
						featureProperties={specifications}
						vendorsfeatures={vendorsfeatures}
					/>
				</>
			)}

			{topReviewsVendors.length > 0 && (
				<>
					<section id="reviews" className="pageJump"></section>
					{/* For Desktop */}
					<UserReviewGrid
						topRatedVendors={topReviewsVendors}
						link={`/${slug}/${vendor}#reviews`}
					/>
					{/* For Mobile */}
					<UserReviewGridMobile
						topRatedVendors={topReviewsVendors}
						link={`/${slug}/${vendor}#reviews`}
					/>
				</>
			)}
			<section className="pageJump" id="detail"></section>
			<div className="container mb-16 md:mb-24">
				<Description>{longDescription}</Description>
			</div>

			{faqs?.data.length > 0 && (
				<>
					<section id="faqs" className="pageJump"></section>
					<Faq faq={faqs.data} />
				</>
			)}
			{moreAlternatives.length > 0 && (
				<>
					<section id="alternatives" className="pageJump"></section>
					<AlternativeGrid
						title="Find More Alternatives"
						button={false}
						alternatives={moreAlternatives}
					/>
					<AlternativeGridSlider
						title="Find More Alternatives"
						button={false}
						alternatives={moreAlternatives}
					/>
				</>
			)}
			<section className="py-16 md:py-24">
				<div className="container">
					<Cta />
				</div>
			</section>
			<section id="checklist" className="pageJump"></section>
			{recommended_resources && (
				<>
					<RecommendedArticles
						config={{
							color: 'bg-light-white',
						}}
						recommendedArticles={recommended_resources.data}
					/>
					<RecommendedArticlesMobile
						config={{
							color: 'bg-light-white',
						}}
						recommendedArticles={recommended_resources.data}
					/>
				</>
			)}
		</>
	);
};

export default Page;

const sideBarList = (vendorName: string) => {
	return [
		{
			id: 1,
			name: 'The best ' + vendorName + ' alternatives',
			link: '#popular',
			activeLink: true,
		},
		{
			id: 2,
			name: 'Top 10 Alternatives',
			link: '#top-picks',
			activeLink: false,
		},
		{
			id: 3,
			name: 'Compare Features',
			link: '#compare-features',
			activeLink: false,
		},
		{
			id: 4,
			name: 'Make decision with real reviews',
			link: '#reviews',
			activeLink: false,
		},
		{
			id: 5,
			name: 'Detail',
			link: '#detail',
			activeLink: false,
		},
		{
			id: 7,
			name: 'FAQs',
			link: '#faqs',
			activeLink: false,
		},
		{
			id: 8,
			name: 'Find more Alternatives',
			link: '#alternatives',
			activeLink: false,
		},
		{
			id: 9,
			name: 'Pricing Guides and Checklist',
			link: '#checklist',
			activeLink: false,
		},
	];
};
