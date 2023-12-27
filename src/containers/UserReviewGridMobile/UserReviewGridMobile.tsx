'use client';
import UserReviewCardMobile from '@/components/Review/UserReviewCardMobile/UserReviewCardMobile';
import Heading from '@/components/ui/Heading/Heading';
import RightArrowLink from '@/components/ui/Link/RightArrowLink/RightArrowLink';
import { cn } from '@/lib/utils/utils';
import { FC } from 'react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './UserReviewGridMobile.module.css';

interface UserReviewGridMobileProps {
	topRatedVendors: {
		title: string;
		image: string;
		description: string;
	}[];
	link: string;
}

const UserReviewGridMobile: FC<UserReviewGridMobileProps> = ({
	topRatedVendors,
	link,
}) => {
	return (
		<>
			<style jsx global>
				{`
					.userreview_grid_mobile .swiper-pagination-bullet {
						width: 12px;
						height: 12px;
					}
					.userreview_grid_mobile {
						padding-bottom: 54px;
					}
					.userreview_grid_mobile .swiper-pagination-bullet {
						width: 16px;
						height: 16px;
						background: #a5a5a5;
						opacity: 1;
					}
					.userreview_grid_mobile .swiper-pagination-bullet-active {
						opacity: 1;
						background: #10292d;
					}

					.userreview_grid_mobile .swiper-pagination-bullet {
						width: 12px;
						height: 12px;
					}
				`}
			</style>
			<section className={cn(styles.section, 'block lg:hidden')}>
				<div className="container">
					<Heading
						size={'h3'}
						variant={'semibold'}
						className="mb-8 text-left lg:text-center"
					>
						Make decisions with real reviews from real users
					</Heading>
					<Swiper
						spaceBetween={30}
						slidesPerView={1}
						modules={[Pagination]}
						pagination
						className="userreview_grid_mobile"
						breakpoints={{
							650: {
								slidesPerView: 2,
							},
						}}
					>
						{topRatedVendors.map((item: any) => (
							<SwiperSlide key={item.title}>
								<UserReviewCardMobile
									title={item.title}
									image={process.env.NEXT_PUBLIC_STRAPI_IMAGE_URL + item.image}
									description={item.description}
								/>
							</SwiperSlide>
						))}
					</Swiper>
					<RightArrowLink link={link} title="See All Reviews" />
				</div>
			</section>
		</>
	);
};

export default UserReviewGridMobile;
