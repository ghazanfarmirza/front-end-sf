'use client';
import RecommendationTestimonialBox from '@/components/Recommendation/RecommendationTestimonialBox/RecommendationTestimonialBox';
import Heading from '@/components/ui/Heading/Heading';
import { recommendationTestimonialList } from '@/lib/settings/settings';
import { FC } from 'react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './RecomendationTestimonials.module.css';

interface RecomendationTestimonialsProps {}

const RecomendationTestimonials: FC<RecomendationTestimonialsProps> = () => {
	return (
		<>
			<style jsx global>
				{`
					.recommended_testimonials .swiper-pagination-bullet {
						width: 12px;
						height: 12px;
					}
					.recommended_testimonials {
						padding-bottom: 54px;
					}
					.recommended_testimonials .swiper-pagination-bullet {
						width: 16px;
						height: 16px;
						background: #a5a5a5;
						opacity: 1;
					}
					.recommended_testimonials .swiper-pagination-bullet-active {
						opacity: 1;
						background: #10292d;
					}

					.recommended_testimonials .swiper-pagination-bullet {
						width: 12px;
						height: 12px;
					}
				`}
			</style>
			<section className={styles.wrapper}>
				<div className="container">
					<Heading
						size={'h3'}
						variant={'semibold'}
						className="text-left text-black lg:text-center"
					>
						What Our Customers Say About Our Service
					</Heading>
					<Swiper
						spaceBetween={30}
						slidesPerView={1}
						modules={[Pagination]}
						pagination
						className={'recommended_testimonials'}
					>
						{recommendationTestimonialList.map((testimonial) => (
							<SwiperSlide key={testimonial.id}>
								<RecommendationTestimonialBox testimonial={testimonial} />
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</section>
		</>
	);
};

export default RecomendationTestimonials;
