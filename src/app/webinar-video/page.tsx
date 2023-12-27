import Header from '@/components/Header/Header';
import MetaTags from '@/components/MetaTags/MetaTags';
import WebinarVideo from '@/components/Webinar/WebinarVideo/WebinarVideo';
import WebinarVideoHero from '@/components/Webinar/WebinarVideoHero/WebinarVideoHero';
import RecommendedArticles from '@/containers/Recommendation/RecommendedArticles/RecommendedArticles';
import RecommendedArticlesMobile from '@/containers/RecommendedArticlesMobile/RecommendedArticlesMobile';
import { onDemandWebinar } from '@/lib/gql';
import { getDataFromStrapi } from '@/lib/networkCalls/strapiFunctions';

const page: any = async () => {
	const response = await getDataFromStrapi(onDemandWebinar);
	const onDemandWebinarData =
		response.onDemandWebinar.data.attributes.on_demand_fields;
	const {
		heading1_video_page,
		heading_green_video_page,
		VideoPageVideoId,
		resources,
	} = onDemandWebinarData;
	return (
		<>
			<MetaTags />
			<Header sticky={true} />
			<WebinarVideoHero
				heading={heading1_video_page}
				heading_green={heading_green_video_page}
			/>
			<WebinarVideo videoId={VideoPageVideoId} />
			<RecommendedArticles
				config={{
					color: 'bg-light-white',
				}}
				recommendedArticles={resources.data}
			/>
			<RecommendedArticlesMobile
				config={{
					color: 'bg-light-white',
				}}
				recommendedArticles={resources.data}
			/>
		</>
	);
};

export default page;
