import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import ComparisonTable from '@/components/ComparisonTable/ComparisonTable';
import DownloadWhitePaper from '@/components/DownloadWhitePaper/DownloadWhitePaper';
import FeatureProducts from '@/components/FeatureProducts/FeatureProducts';
import Header from '@/components/Header/Header';
import HorizontalPageProgress from '@/components/HorizontalScrollBar/HorizontalPageProgress';
import MetaTags from '@/components/MetaTags/MetaTags';
import PageTableContent from '@/components/Page/PageTableContent/PageTableContent';
import RelevantArticles from '@/components/Related/RelevantArticles/RelevantArticles';
import Description from '@/components/ui/Description/Description';
import Heading from '@/components/ui/Heading/Heading';
import RightArrowDownLink from '@/components/ui/Link/RightArrowLink/RightArrowDownLink/RightArrowDownLink';
import { getComparisonPageData } from '@/lib/gql';
import { getDataFromStrapi } from '@/lib/networkCalls/strapiFunctions';

interface pageProps {
	resource: {
		title: string;
		content: string;
		type: string;
		status: string;
		date_added: string;
		image_url: string;
		categories: string;
		post_id: string;
		slug: string;
		seo: any;
		relevent_resources: any;
	};
}

const Comparison: any = async ({ resource }: pageProps) => {
	if (!resource) {
		return null;
	}
	const response = await getDataFromStrapi(
		getComparisonPageData(resource.slug)
	);
	const comparison = response?.resources.data[0].attributes;
	if (!comparison) return null;
	const { comparison_vendors, show_feature_products, feature_vendors } =
		comparison;

	return (
		<div>
			<MetaTags seo={resource.seo} />
			<Header sticky={true} />
			<HorizontalPageProgress />
			<BreadCrumb
				item1={{ name: 'Resource Center', link: 'resources' }}
				item2={resource.title}
			/>
			<section className="mt-12 lg:mt-0">
				<div className="container">
					<div className="flex flex-col grid-cols-12 gap-16 lg:grid">
						<div className="col-span-12 lg:col-span-8">
							<Heading
								size={'h1'}
								variant={'semibold'}
								className="text-3xl lg:text-4xl"
							>
								{resource.title}
							</Heading>

							<section id="description">
								<Description className="mt-6 text-black">
									{resource.content}
								</Description>
							</section>

							<div className="flex items-center justify-end pt-6">
								<RightArrowDownLink title="View More" />
							</div>
							<div className="block mt-5 lg:hidden">
								<DownloadWhitePaper
									formHeading="Side-by-Side Review"
									formSubHeading="Get a side-by-side overview of all the features you can expect with a Moodle or Canvas subscription. Enter the information below!"
								/>
							</div>
							<section id="comparison-table">
								<ComparisonTable vendors={comparison_vendors.data} />
							</section>
						</div>
						<div className="hidden lg:block lg:col-span-4">
							<DownloadWhitePaper
								formHeading="Side-by-Side Review"
								formSubHeading="Get a side-by-side overview of all the features you can expect with a Moodle or Canvas subscription. Enter the information below!"
							/>
							<div className="grid grid-cols-12">
								<div className="col-span-12 col-start-3">
									<PageTableContent
										lists={[
											{
												id: 1,
												title: 'Which One Should You Go For?',
												link: '#description',
												linkActive: true,
											},
											{
												id: 2,
												title: 'Side By Side Comaprison',
												link: '#comparison-table',
												linkActive: false,
											},
											{
												id: 3,
												title: 'Similar Products',
												link: '#feature-products',
												linkActive: false,
											},
										]}
									/>
									{/* <VendorSelectionTemplate /> */}
									<RelevantArticles lists={resource.relevent_resources.data} />
								</div>
							</div>
						</div>
					</div>
					{show_feature_products && feature_vendors.data.length > 0 && (
						<section id="feature-products">
							<FeatureProducts featureProducts={feature_vendors.data} />
						</section>
					)}
				</div>
			</section>
		</div>
	);
};

export default Comparison;
