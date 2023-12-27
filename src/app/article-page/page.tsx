import ArticleHeader from '@/components/Article/ArticleHeader/ArticleHeader';
import ArticleWhitePaperForm from '@/components/Article/ArticleWhitePaperForm/ArticleWhitePaperForm';
import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import Header from '@/components/Header/Header';
import HorizontalPageProgress from '@/components/HorizontalScrollBar/HorizontalPageProgress';
import MetaTags from '@/components/MetaTags/MetaTags';
import PageTableContent from '@/components/Page/PageTableContent/PageTableContent';
import RelevantArticles from '@/components/Related/RelevantArticles/RelevantArticles';
import Description from '@/components/ui/Description/Description';
import { articleHeaderList } from '@/lib/settings/settings';

type ArticleProps = {
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
		relevent_resources: any;
		seo: any;
	};
};

const Article = ({ resource }: ArticleProps) => {
	if (!resource) {
		return null;
	}
	return (
		<>
			<MetaTags seo={resource.seo} />
			<Header sticky={true} />
			<HorizontalPageProgress />
			<BreadCrumb
				item1={{ name: 'Resource Center', link: 'resources' }}
				item2={resource.title}
			/>
			<ArticleHeader articleName={resource.title} />
			<section>
				<div className="container">
					<div className="flex flex-col grid-cols-12 gap-16 lg:grid">
						<div className="col-span-12 lg:col-span-8">
							<PageTableContent lists={articleHeaderList} />
							<Description className="mt-6 text-black ">
								{resource.content}
							</Description>

							{/* <FillArticleBox /> */}
							{/* <Heading size={'h4'} variant={'semibold'} className="text-black">
								{resource.title}
							</Heading> */}

							<ArticleWhitePaperForm />
						</div>
						<div className="hidden lg:block lg:col-span-4">
							{/* <Paragraph variant={'bold'} className="mb-6 text-green">
								On This Page
							</Paragraph>
							{articleHeaderList.map((item) => (
								<PageListItem key={item.id} item={item} />
							))} */}
							<div className="grid grid-cols-12">
								<div className="col-span-12 col-start-3">
									{/* <VendorSelectionTemplate /> */}
									<RelevantArticles lists={resource.relevent_resources.data} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Article;
