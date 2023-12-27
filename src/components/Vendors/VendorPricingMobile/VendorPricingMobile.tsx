'use client';
import Button from '@/components/ui/Button/Button';
import ComparePricing from '@/components/ui/Dialogs/ComparePricing/ComparePricing';
import FreeDemo from '@/components/ui/Dialogs/FreeDemo/FreeDemo';
import Heading from '@/components/ui/Heading/Heading';
import { FC, useState } from 'react';
import SwiperCore, { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import VendorPriceBox from '../VendorPriceBox/VendorPriceBox';

SwiperCore.use([Pagination]);

interface VendorPricingMobileProps {
	pricing: {
		plan_title: string;
		plan_description: string;
		price: string;
		feature_list: { feature: string }[];
	}[];
	vendorName: string;
	youtubeUrl: string;
}

const VendorPricingMobile: FC<VendorPricingMobileProps> = ({
	pricing,
	vendorName,
	youtubeUrl,
}) => {
	const [activeModal, setActiveModal] = useState('');

	const openModal = (modalName: string) => {
		setActiveModal(modalName);
	};

	const closeModal = () => {
		setActiveModal('');
	};
	return (
		<>
			<FreeDemo
				open={activeModal === 'demo'}
				onClose={closeModal}
				videoId={youtubeUrl}
			/>
			<ComparePricing open={activeModal === 'compare'} onClose={closeModal} />

			<style jsx global>
				{`
					.vendor_pricing .swiper-pagination-bullet {
						width: 12px;
						height: 12px;
					}
					.vendor_pricing {
						padding-bottom: 54px;
					}
					.vendor_pricing .swiper-pagination-bullet {
						width: 16px;
						height: 16px;
						background: #a5a5a5;
						opacity: 1;
					}
					.vendor_pricing .swiper-pagination-bullet-active {
						opacity: 1;
						background: #10292d;
					}

					.vendor_pricing .swiper-pagination-bullet {
						width: 12px;
						height: 12px;
					}
				`}
			</style>
			<section className="block py-12 lg:hidden lg:py-24">
				<div className="container">
					<Heading
						size={'h2'}
						variant={'semibold'}
						className="mb-10 text-left text-black lg:text-center mt-10"
					>
						{vendorName} Pricing
					</Heading>

					<Swiper
						modules={[Pagination]}
						pagination
						spaceBetween={30}
						className={'vendor_pricing'}
						slidesPerView={1}
						breakpoints={{
							600: {
								slidesPerView: 2,
							},
						}}
					>
						{pricing.map((p, index: number) => (
							<SwiperSlide key={index}>
								<VendorPriceBox
									name={p.plan_title}
									type={p.plan_description}
									price={p.price}
									list={p.feature_list.map((f) => f.feature)}
								/>
							</SwiperSlide>
						))}
					</Swiper>

					<div className="flex flex-col items-center justify-center gap-4 mt-12 md:flex-row">
						<Button
							variant={'black'}
							size={'sm'}
							onClick={() => openModal('demo')}
						>
							Watch Demo
						</Button>
						<Button
							variant={'whiteGreen'}
							size={'sm'}
							onClick={() => openModal('compare')}
						>
							Compare Pricing
						</Button>
					</div>
				</div>
			</section>
		</>
	);
};

export default VendorPricingMobile;
