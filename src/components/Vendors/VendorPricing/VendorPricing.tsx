'use client';
import Button from '@/components/ui/Button/Button';
import ComparePricing from '@/components/ui/Dialogs/ComparePricing/ComparePricing';
import FreeDemo from '@/components/ui/Dialogs/FreeDemo/FreeDemo';
import Heading from '@/components/ui/Heading/Heading';
import Paragraph from '@/components/ui/Paragraph/Paragraph';
import { getCurrentWorkingDayFormatted } from '@/lib/utils/dateUtils';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { FC, useEffect, useRef, useState } from 'react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import VendorPriceBox from '../VendorPriceBox/VendorPriceBox';
import VendorPriceBoxSingle from '../VendorPriceBox/VendorPriceBoxSingle';
SwiperCore.use([Navigation]);
interface VendorPricingProps {
	pricing: {
		plan_title: string;
		plan_description: string;
		price: string;
		feature_list: { feature: string }[];
		currency: string;
		price_description: string;
	}[];
	vendorName: string;
	youtubeUrl: string;
	vendor: {
		name: string;
		image: string;
	};
}

const VendorPricing: FC<VendorPricingProps> = ({
	pricing,
	vendorName,
	youtubeUrl,
	vendor,
}) => {
	const currentWorkingDayFormatted = getCurrentWorkingDayFormatted();
	const [activeModal, setActiveModal] = useState('');
	const [enablePrice, setEnablePrice] = useState(false);

	const navigationPrevRef = useRef<HTMLButtonElement | null>(null);
	const navigationNextRef = useRef<HTMLButtonElement | null>(null);
	const swiperRef = useRef<SwiperCore | null>(null);
	const [client, setClient] = useState(false);
	useEffect(() => {
		setClient(true);
	}, []);

	const openModal = (modalName: string) => {
		setActiveModal(modalName);
	};

	const closeModal = () => {
		setActiveModal('');
	};
	useEffect(() => {
		if (swiperRef.current) {
			swiperRef.current.navigation.init();
			swiperRef.current.navigation.update();
		}
	}, [navigationPrevRef, navigationNextRef, client]);

	return (
		<section className="hidden py-24 lg:block">
			<FreeDemo
				open={activeModal === 'demo'}
				onClose={closeModal}
				videoId={youtubeUrl}
				vendor={vendor}
			/>
			<ComparePricing
				open={activeModal === 'compare'}
				onClose={closeModal}
				vendor={vendor}
			/>
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
					.swiper-button-disabled {
						color: #939393;
					}
				`}
			</style>
			<div className="container">
				<Heading
					size={'h2'}
					variant={'semibold'}
					className="text-center text-black mt-10"
				>
					{vendorName} Pricing
				</Heading>

				{(pricing.length > 1 && (
					<div className="mt-12 flex justify-center items-center">
						<button
							ref={navigationPrevRef}
							className="mr-4 .swiper-button-disabled"
						>
							<ChevronLeft size={40} />
						</button>
						<Swiper
							onSwiper={(swiper) => (swiperRef.current = swiper)}
							spaceBetween={30}
							className={'vendor_pricing flex justify-center'}
							slidesPerView={1}
							breakpoints={{
								600: {
									slidesPerView: pricing.length == 2 ? 2 : 3,
								},
							}}
							navigation={{
								prevEl: navigationPrevRef.current,
								nextEl: navigationNextRef.current,
							}}
						>
							<div
								className={pricing.length == 2 ? `flex justify-center` : 'mt-4'}
							>
								{pricing.map((p, i) => (
									<SwiperSlide key={i}>
										<VendorPriceBox
											key={i}
											name={p.plan_title}
											type={p.plan_description}
											price={p.currency + p.price + p.price_description}
											list={p.feature_list.map((f) => f.feature)}
											enableViewPrice={enablePrice}
											setEnableViewPrice={setEnablePrice}
										/>
									</SwiperSlide>
								))}
							</div>
						</Swiper>
						<button
							ref={navigationNextRef}
							className="ml-4 .swiper-button-disabled"
						>
							<ChevronRight size={40} />
						</button>
					</div>
				)) || (
					<VendorPriceBoxSingle
						name={pricing[0].plan_title}
						type={pricing[0].plan_description}
						price={
							pricing[0].currency +
							pricing[0].price +
							pricing[0].price_description
						}
						list={pricing[0].feature_list.map((f) => f.feature)}
						enableViewPrice={enablePrice}
						setEnableViewPrice={setEnablePrice}
					/>
				)}
				<Paragraph
					size={'small'}
					variant={'regular'}
					className="mt-12 text-center text-black"
				>
					<span className="font-semibold">Disclaimer: </span>The pricing details
					were last updated on {currentWorkingDayFormatted} from the vendor's
					website. Please contact us for a tailored pricing list.
				</Paragraph>
				<div className="flex items-center justify-center gap-4 mt-12">
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
	);
};

export default VendorPricing;
