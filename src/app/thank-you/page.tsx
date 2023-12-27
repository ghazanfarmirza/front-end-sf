import Header from '@/components/Header/Header';
import ThankYouContent from '@/components/ThankYouContent/ThankYouContent';
import RecommendedArticlesMobile from '@/containers/RecommendedArticlesMobile/RecommendedArticlesMobile';
import { thankYouPage } from '@/lib/gql';
import { getDataFromStrapi } from '@/lib/networkCalls/strapiFunctions';
import dynamic from 'next/dynamic';

const Page: any = async () => {
	const response = await getDataFromStrapi(thankYouPage);
	const thankYouPageData = response.thankYou.data.attributes;
	const { resources } = thankYouPageData;
	const RecommendedArticles = dynamic(
		() =>
			import(
				'@/containers/Recommendation/RecommendedArticles/RecommendedArticles'
			)
	);

	return (
		<div>
			<Header sticky={true} />
			<div className="py-16 lg:py-24">
				<ThankYouContent />
			</div>
			<RecommendedArticles
				config={{
					color: 'bg-light-green',
				}}
				recommendedArticles={resources.data}
			/>
			<RecommendedArticlesMobile
				config={{
					color: 'bg-light-green',
				}}
				recommendedArticles={resources.data}
			/>
		</div>
	);
};

export default Page;
