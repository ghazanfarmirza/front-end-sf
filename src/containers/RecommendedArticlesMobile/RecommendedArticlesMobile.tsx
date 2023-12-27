'use client';
import Heading from '@/components/ui/Heading/Heading';
import { cn } from '@/lib/utils/utils';
import { FC } from 'react';

import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import RecommendedArticleBoxMobile from '../Recommendation/RecommendedArticleBoxMobile/RecommendedArticleBoxMobile';
import styles from './RecommendedArticlesMobile.module.css';

interface RecommendedArticlesMobileProps {
	config: {
		color: string;
	};
	recommendedArticles?: any;
}

const RecommendedArticlesMobile: FC<RecommendedArticlesMobileProps> = ({
	config,
	recommendedArticles,
}) => {
	if (!recommendedArticles) return null;
	return (
		<>
			<style jsx global>
				{`
					.recommended_articles_mobile .swiper-pagination-bullet {
						width: 12px;
						height: 12px;
					}
					.recommended_articles_mobile {
						padding-bottom: 54px;
					}
					.recommended_articles_mobile .swiper-pagination-bullet {
						width: 16px;
						height: 16px;
						background: #a5a5a5;
						opacity: 1;
					}
					.recommended_articles_mobile .swiper-pagination-bullet-active {
						opacity: 1;
						background: #10292d;
					}

					.recommended_articles_mobile .swiper-pagination-bullet {
						width: 12px;
						height: 12px;
					}
				`}
			</style>
			<section
				className={cn(
					styles.wrapper,
					'recommend_slider py-12 block lg:hidden',
					config.color
				)}
			>
				<div className="container">
					<Heading
						size={'h3'}
						variant={'semibold'}
						className="text-left text-black lg:text-center"
					>
						Recommended Whitepaper and Articles
					</Heading>
					<div className="mt-12">
						<Swiper
							spaceBetween={30}
							slidesPerView={1}
							modules={[Pagination]}
							pagination
							className="recommended_articles_mobile"
							breakpoints={{
								650: {
									slidesPerView: 2,
								},
							}}
						>
							{recommendedArticles.map((article: any) => (
								<SwiperSlide key={article.id}>
									<RecommendedArticleBoxMobile {...article.attributes} />
								</SwiperSlide>
							))}
						</Swiper>
					</div>
				</div>
			</section>
		</>
	);
};

export default RecommendedArticlesMobile;
