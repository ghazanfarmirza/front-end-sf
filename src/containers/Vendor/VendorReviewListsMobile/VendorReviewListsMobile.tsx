'use client';
import { FC } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import VendorReviewListItemMobile from '../VendorReviewListItemMobile/VendorReviewListItemMobile';

interface VendorReviewListsMobileProps {
	list: {
		id: number;
		attributes: {
			author: string;
			team_size: string;
			industry: string;
			time_used: string;
			company: string;
			rating: number;
			value_for_money: number;
			customer_support: number;
			ease_of_use: number;
			functionality: number;
			title: string;
			pros_text: string;
			cons_text: string;
			added_on: string;
		};
	}[];
}

const VendorReviewListsMobile: FC<VendorReviewListsMobileProps> = ({
	list,
}) => {
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
			<section className="block mb-12 lg:hidden">
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
					{list.map((item, index) => (
						<SwiperSlide key={index}>
							<VendorReviewListItemMobile item={item.attributes} />
						</SwiperSlide>
					))}
				</Swiper>
			</section>
		</>
	);
};

export default VendorReviewListsMobile;
