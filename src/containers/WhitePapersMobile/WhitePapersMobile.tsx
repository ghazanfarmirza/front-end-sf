'use client';
import WhitePaperMobile from '@/components/Whitepapers/WhitePaperMobile/WhitePaperMobile';
import { whitepaper } from '@/lib/settings/settings';
import { cn } from '@/lib/utils/utils';
import { FC } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { v4 as uuidv4 } from 'uuid';
interface WhitePapersMobileProps {}

const WhitePapersMobile: FC<WhitePapersMobileProps> = () => {
	return (
		<>
			<style jsx global>
				{`
					.vendor_mobile .swiper-pagination-bullet {
						width: 12px;
						height: 12px;
					}
				`}
			</style>
			<Swiper
				pagination={{ clickable: true }}
				spaceBetween={30}
				className={cn('vendor_mobile', 'mt-10')}
				slidesPerView={1}
				breakpoints={{
					400: {
						slidesPerView: 1,
					},
					600: {
						slidesPerView: 2,
					},
				}}
			>
				{whitepaper.map((whitepaper) => (
					<SwiperSlide key={uuidv4()}>
						<WhitePaperMobile
							key={uuidv4()}
							title={whitepaper.title}
							desc={whitepaper.desc}
							image={whitepaper.image}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
};

export default WhitePapersMobile;
