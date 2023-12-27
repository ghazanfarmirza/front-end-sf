'use client';
import Heading from '@/components/ui/Heading/Heading';
import { FC } from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './RecommendedArticles.module.css';

import RecommendedArticleBox from '@/components/Recommendation/RecommendedArticleBox/RecommendedArticleBox';
import RightArrowLink from '@/components/ui/Link/RightArrowLink/RightArrowLink';
import { cn } from '@/lib/utils/utils';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/navigation';

interface RecommendedArticlesProps {
	config: {
		color: string;
	};
	recommendedArticles?: any;
}

const RecommendedArticles: FC<RecommendedArticlesProps> = ({
	config,
	recommendedArticles,
}) => {
	if (!recommendedArticles || recommendedArticles?.length == 0) return null;
	return (
		<>
			<style jsx global>
				{`
					.recommended_articles {
						padding: 0 40px !important;
					}
					@media (min-width: 1025px) {
						.recommended_articles {
							margin-left: 70px;
							margin-right: 70px;
						}
					}

					.recommended_articles .swiper-button-next:after,
					.recommended_articles .swiper-button-prev:after {
						font-size: 30px;
						color: #9abf15;
					}

					.recommended_articles .swiper-button-next,
					.recommended_articles .swiper-button-prev {
						width: 30px;
						top: 45%;
					}

					.recommended_articles .swiper-button-next {
						right: 0;
					}

					.recommended_articles .swiper-button-prev {
						left: 0;
					}
				`}
			</style>
			<section
				className={cn(
					styles.wrapper,
					'recommend_slider hidden lg:block',
					config.color
				)}
			>
				<div className="container">
					<Heading
						size={'h3'}
						variant={'semibold'}
						className="text-center text-black"
					>
						Recommended Whitepaper and Articles
					</Heading>
					<div className="mt-12">
						<Swiper
							spaceBetween={40}
							slidesPerView={2}
							navigation
							modules={[Navigation]}
							className="recommended_articles"
						>
							{recommendedArticles.map((article: any, index: number) => (
								<SwiperSlide key={index}>
									<Link
										prefetch={false}
										href={`/resources/${article.attributes?.slug}`}
										passHref
									>
										<RecommendedArticleBox {...article.attributes} />
									</Link>
								</SwiperSlide>
							))}
						</Swiper>
					</div>
					<div className="flex items-center justify-end mt-12">
						<RightArrowLink link="/resources" title="View All Resources" />
					</div>
				</div>
			</section>
		</>
	);
};

export default RecommendedArticles;
