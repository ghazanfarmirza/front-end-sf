import Header from '@/components/Header/Header';
import WebinarSmallBanner from '@/components/Webinar/WebinarSmallBanner/WebinarSmallBanner';
import FreeTrailGrid from '@/containers/FreeTrailGrid/FreeTrailGrid';
import RecommendationHero from '@/containers/Recommendation/RecomendationHero/RecommendationHero';
import RecomendationPoints from '@/containers/Recommendation/RecomendationPoints/RecomendationPoints';
import RecomendationTestimonials from '@/containers/Recommendation/RecomendationTestimonials/RecomendationTestimonials';
import { FC } from 'react';

interface pageProps {}

const page: FC<pageProps> = () => {
	return (
		<>
			<Header sticky={true} />
			<RecommendationHero />
			<FreeTrailGrid />
			<RecomendationPoints />
			<RecomendationTestimonials />
			<WebinarSmallBanner
				title={`“We’ll take care of the grind, Happy to let you enjoy the find.”`}
			/>
		</>
	);
};

export default page;
