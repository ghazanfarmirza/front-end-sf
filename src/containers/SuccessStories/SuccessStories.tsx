'use client';
import CustomerTestimonials from '@/components/CustomerTestimonials/CustomerTestimonials';
import Heading from '@/components/ui/Heading/Heading';
// Import Swiper React components

import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Pagination]);

import CustomerTestimonialsMobile from '@/components/CustomerTestimonialsMobile/CustomerTestimonialsMobile';
import { SuccessStoriesType } from '@/lib/types/types';
import { FC } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';

interface SuccessStoriesProps {
	successStories: Array<SuccessStoriesType>;
}

const SuccessStories: FC<SuccessStoriesProps> = ({ successStories }) => {
	return (
		<>
			<style jsx global>
				{`
					.swiper {
						padding-bottom: 54px;
					}
					.swiper-pagination-bullet {
						width: 16px;
						height: 16px;
						background: #a5a5a5;
						opacity: 1;
					}
					.swiper-pagination-bullet-active {
						opacity: 1;
						background: #10292d;
					}

					.customer_mobile .swiper-pagination-bullet {
						width: 12px;
						height: 12px;
					}
				`}
			</style>
			<section className="mb-20 md:mb-36">
				<div className="container">
					<Heading
						size={'h2'}
						variant={'medium'}
						className="max-w-screen-lg mx-auto mb-12 text-left lg:text-center text-dark-blue"
					>
						Success Stories from
						<span className="font-bold text-green"> Our Customers</span>
					</Heading>
					{/* For Desktop  */}
					<div className="hidden lg:block">
						<Swiper
							spaceBetween={30}
							slidesPerView={1}
							pagination={{
								clickable: true,
							}}
						>
							{successStories &&
								successStories.map((testimonial, index) => (
									<SwiperSlide key={index}>
										<CustomerTestimonials data={testimonial} />
									</SwiperSlide>
								))}
						</Swiper>
					</div>

					{/* For Mobile Screen */}

					<div className="block lg:hidden">
						<Swiper
							spaceBetween={30}
							slidesPerView={1}
							pagination={{
								clickable: true,
							}}
							breakpoints={{
								400: {
									slidesPerView: 1,
								},
								600: {
									slidesPerView: 2,
								},
							}}
							className="customer_mobile"
						>
							{successStories &&
								successStories.map((testimonial: any, index) => (
									<SwiperSlide key={index}>
										<CustomerTestimonialsMobile data={testimonial} />
									</SwiperSlide>
								))}
						</Swiper>
					</div>
				</div>
			</section>
		</>
	);
};

export default SuccessStories;
