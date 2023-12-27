import NotFound from '@/app/not-found';
import AlternativeGrid from '@/components/Alternative/AlternativeGrid/AlternativeGrid';
import AlternativeGridSlider from '@/components/Alternative/AlternativeGridSlider/AlternativeGridSlider';
import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import Cta from '@/components/CtaFolder/Cta/Cta';
import Header from '@/components/Header/Header';
import MetaTags from '@/components/MetaTags/MetaTags';
import RelevantArticles from '@/components/Related/RelevantArticles/RelevantArticles';
import VendorHeaderMobile from '@/components/VendorHeaderMobile/VendorHeaderMobile';
import VendorHeader from '@/components/Vendors/VendorHeader/VendorHeader';
import VendorProsCons from '@/components/Vendors/VendorProsCons/VendorProsCons';
import VendorProsConsMobile from '@/components/Vendors/VendorProsConsMobile/VendorProsConsMobile';
import VendorRecommendationSoftware from '@/components/Vendors/VendorRecommendationSoftware/VendorRecommendationSoftware';
import VendorSelectionTemplate from '@/components/Vendors/VendorSelectionTemplate/VendorSelectionTemplate';
import VendorSideBarBanner from '@/components/Vendors/VendorSideBarBanner/VendorSideBarBanner';
import Description from '@/components/ui/Description/Description';
import Faq from '@/containers/Faq/Faq';
import RecommendedArticles from '@/containers/Recommendation/RecommendedArticles/RecommendedArticles';
import RecommendedArticlesMobile from '@/containers/RecommendedArticlesMobile/RecommendedArticlesMobile';
import SubCategory from '@/containers/SubCategory/SubCategory';
import VendorFeatures from '@/containers/Vendor/VendorFeatures/VendorFeatures';
import VendorReviewsSection from '@/containers/Vendor/VendorReviewsSection/VendorReviewsSection';
import VendorSpecification from '@/containers/Vendor/VendorSpecification/VendorSpecification';
import { getAllSUbCategorySlugs, getVendorBySlug } from '@/lib/gql';
import { getDataFromStrapi } from '@/lib/networkCalls/strapiFunctions';
import { calculateRatingStatistics } from '@/lib/utils/ratingstats';
import dynamic from 'next/dynamic';

interface pageProps {
	params: { category: string; vendor: string };
}

const Page: any = async ({ params }: pageProps) => {
	let tabNames: string[] = ['overview'];
	const { vendor } = params;
	const VendorGallery = dynamic(
		() => import('@/components/Vendors/VendorGallery/VendorGallery'),
		{ ssr: false }
	);
	const VendorPricing = dynamic(
		() => import('@/components/Vendors/VendorPricing/VendorPricing'),
		{ ssr: false }
	);
	const VendorPricingMobile = dynamic(
		() =>
			import('@/components/Vendors/VendorPricingMobile/VendorPricingMobile'),
		{ ssr: false }
	);

	const res: any = await getDataFromStrapi(getAllSUbCategorySlugs);
	const subCategorySlugs = res?.subCategories?.data.map(
		(item: any) => item.attributes?.slug
	);
	//if request is for subcategory page then render subcategory component
	if (subCategorySlugs && subCategorySlugs.find((i: string) => i == vendor))
		return (
			<SubCategory subCategorySlug={vendor} categorySlug={params.category} />
		);

	const response: any = await getDataFromStrapi(getVendorBySlug(vendor));

	const vendorInfo = response?.vendors?.data[0]?.attributes;
	const id = response?.vendors?.data[0]?.id;
	if (!vendorInfo) return null;
	const {
		name,
		seo,
		short_description,
		specifications,
		description,
		feature,
		prosAndCons: { pros, cons },
		images,
		BreadCrumb_Category,
		youtube_link,
		banners,
		logo,
		faqs,
		prices,
		show_description,
		show_short_description,
		show_pros_cons,
		relevant_articles_sidebar,
		top_recommendation_softwares,
		popular_alternatives,
		recommended_whitepaper_articles,
		top_alternatives,
		categories: {
			data: [
				{
					attributes: {
						name: category,
						slug,
						type,
						specification: categorySpecification,
						relevant_articles_sidebar: categoryRelevantArticles,
						top_recommendation_softwares: categoryTopRecommendationSoftwares,
						popular_alternatives: categoryPopularAlternatives,
						recommended_whitepaper_articles:
							categoryRecommendedWhitepaperArticles,
						top_alternatives: categoryTopAlternatives,
						vendor_pricing_list: categoryVendorPricingList,
						vendor_selection_template: categoryVendorSelectionTemplate,
					},
				},
			],
		},
		allReviews,
	} = vendorInfo;

	if (slug !== params.category) return <NotFound />;

	const { averageRating, totalReviews } = calculateRatingStatistics(
		allReviews.data
	);
	//specification section
	const vendorSpecification =
		specifications?.length > 0 ? specifications : categorySpecification;

	//banners section sidebar
	const vendorPricingList = banners[0] ? banners[0] : categoryVendorPricingList;
	const vendorSelectionTemplate = banners[1]
		? banners[1]
		: categoryVendorSelectionTemplate;

	//check for alternatives section
	const top10Alternatives =
		top_alternatives?.data.length > 0
			? top_alternatives.data
			: categoryTopAlternatives?.data;

	const vendorLogo = process.env.NEXT_PUBLIC_STRAPI_IMAGE_URL + logo.image_url;
	const vendorModal = { name, image: vendorLogo };
	// Check if BreadCrumb_Category is not null before accessing its properties
	const BreadCrumbCategory = BreadCrumb_Category?.data?.attributes?.name;
	const BreadCrumbSlug = BreadCrumb_Category?.data?.attributes?.slug;
	const breadCrumb = {
		name: BreadCrumbCategory ? BreadCrumbCategory : category,
		slug: BreadCrumbSlug ? BreadCrumbSlug : slug,
	};
	const relevantArticles =
		(relevant_articles_sidebar.data.length == 0 &&
			categoryRelevantArticles.data) ||
		relevant_articles_sidebar.data;
	const RecommendedWhitepaperArticles =
		(recommended_whitepaper_articles.data.length &&
			recommended_whitepaper_articles.data) ||
		categoryRecommendedWhitepaperArticles.data;
	const PopularAlternatives = (
		popular_alternatives.data?.length == 0
			? categoryPopularAlternatives.data
			: popular_alternatives.data
	)
		?.filter((item: any) => item.attributes.slug !== vendor)
		.slice(0, 3);

	const TopRecommendationSoftwares =
		(top_recommendation_softwares?.data?.length == 0 &&
			categoryTopRecommendationSoftwares.data) ||
		top_recommendation_softwares.data;

	//check for sections and push to tabNames array
	if (
		feature &&
		feature.length > 0 &&
		feature.some((item: any) => item.feature_status === true)
	)
		tabNames.push('features');
	if (show_pros_cons && (pros.length > 0 || cons.length > 0))
		tabNames.push('pros and cons');
	if (prices.length > 0 && prices[0].plan_title) tabNames.push('pricing');
	if (type == 'service' && PopularAlternatives?.length > 0)
		tabNames.push('alternatives'); //service vendor page
	if (allReviews.data.length > 0) tabNames.push('reviews');
	if (faqs.data.length > 0) tabNames.push('faqs');
	if (type != 'service' && top10Alternatives && top10Alternatives.length > 0)
		tabNames.push('alternatives');
	if (type == 'service') tabNames.push('resources');
	return (
		<>
			<MetaTags seo={seo} />
			<Header sticky={false} />
			<BreadCrumb
				item1={{ name: breadCrumb.name, link: breadCrumb.slug }}
				item2={{ name, link: vendor }}
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

			<section className="mt-12 mb-12 md:mb-12">
				<div className="container">
					<div className="grid grid-cols-12">
						<div
							className={
								'col-span-12 lg:col-span-6' //+ ((type == 'service' && '6') || '5')
							}
						>
							{show_short_description && (
								<Description className="text-black">
									{(type == 'service' && description) || short_description}
								</Description>
							)}

							{vendorSpecification?.length > 0 && (
								<VendorSpecification list={vendorSpecification} name={name} />
							)}
						</div>
						<div className="hidden col-span-6 col-start-8 lg:block">
							<VendorGallery
								images={images}
								youtube_link={youtube_link}
								vendor={vendorModal}
							/>
						</div>
					</div>
				</div>
			</section>
			<div className="container">
				<div className="grid grid-cols-12 gap-2">
					<div className="col-span-12 lg:col-span-7">
						{type == 'software' && show_description && (
							<Description>{description}</Description>
						)}
						{tabNames.find((i) => i == 'features') && (
							<>
								<section id="features" className="vendorPageJump"></section>
								<VendorFeatures list={feature} name={name} />
							</>
						)}
					</div>
					<div className="hidden lg:block lg:col-span-5">
						<div className="grid grid-cols-12 vendor-sideBar">
							<div className="col-span-8 col-start-3 px-12">
								{vendorPricingList && (
									<VendorSideBarBanner
										banner={vendorPricingList}
										category={category}
									/>
								)}
								{relevantArticles && relevantArticles.length > 0 && (
									<RelevantArticles lists={relevantArticles} />
								)}
								{TopRecommendationSoftwares &&
									TopRecommendationSoftwares.length > 0 && (
										<VendorRecommendationSoftware
											recommendedSoftwares={TopRecommendationSoftwares}
											category={slug}
										/>
									)}
								{vendorSelectionTemplate && (
									<VendorSelectionTemplate
										banner={vendorSelectionTemplate}
										category={category}
									/>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
			{show_pros_cons && (pros.length > 0 || cons.length > 0) && (
				<>
					<section id="pros-cons" className="vendorPageJump"></section>
					<VendorProsCons prosAndCons={{ pros, cons }} vendorName={name} />
					{/* Mobile Screens  */}
					<VendorProsConsMobile
						prosAndCons={{ pros, cons }}
						vendorName={name}
					/>
				</>
			)}

			<section>
				<div className="container">
					{prices.length > 0 && prices[0].plan_title && (
						<>
							<section id="pricing" className="vendorPageJump"></section>
							<VendorPricing
								pricing={prices}
								vendorName={name}
								youtubeUrl={youtube_link}
								vendor={vendorModal}
							/>
							{/* Mobile Screens */}
							<VendorPricingMobile
								pricing={prices}
								vendorName={name}
								youtubeUrl={youtube_link}
							/>
						</>
					)}
					{type == 'service' &&
						PopularAlternatives &&
						PopularAlternatives.length > 0 && (
							<>
								<section id="alternatives" className="vendorPageJump"></section>
								<AlternativeGrid
									title="Popular Alternatives"
									button={true}
									alternatives={PopularAlternatives}
									type={type}
								/>
								<AlternativeGridSlider
									title="Popular Alternatives"
									button={true}
									alternatives={PopularAlternatives}
									type={type}
								/>
							</>
						)}
					<section id="reviews" className="vendorPageJump"></section>
					{allReviews.data.length > 0 && (
						<VendorReviewsSection
							list={allReviews.data}
							vendor={{ name, logo, id }}
							totalReviews={allReviews.data.length}
						/>
					)}

					<section id="faqs" className="vendorPageJump"></section>
					{faqs.data.length > 0 && <Faq faq={faqs.data} />}
					{type == 'software' &&
						PopularAlternatives &&
						PopularAlternatives.length > 0 && (
							<>
								<section id="alternatives" className="vendorPageJump"></section>
								<AlternativeGrid
									title="Popular Alternatives"
									button={true}
									alternatives={PopularAlternatives}
								/>
								<AlternativeGridSlider
									title="Popular Alternatives"
									button={true}
									alternatives={PopularAlternatives}
								/>
							</>
						)}
				</div>
			</section>
			<section className="py-24">
				<div className="container">
					<Cta
						heading1={`Not sure if ${name} is the right fit?`}
						heading2=" "
					/>
				</div>
			</section>
			<section id="resources" className="vendorPageJump"></section>
			{RecommendedWhitepaperArticles && (
				<>
					{' '}
					<RecommendedArticles
						config={{
							color: 'bg-light-white',
						}}
						recommendedArticles={RecommendedWhitepaperArticles}
					/>
					<RecommendedArticlesMobile
						config={{
							color: 'bg-light-white',
						}}
						recommendedArticles={RecommendedWhitepaperArticles}
					/>
				</>
			)}
		</>
	);
};

export default Page;
