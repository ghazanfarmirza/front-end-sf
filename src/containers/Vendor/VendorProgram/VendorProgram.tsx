'use client';
import VendorProgramBox from '@/components/Vendors/VendorProgramBox/VendorProgramBox';
import Button from '@/components/ui/Button/Button';
import Heading from '@/components/ui/Heading/Heading';
import Link from 'next/link';
import { FC } from 'react';
import SwiperCore, { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { v4 as uuidv4 } from 'uuid';
SwiperCore.use([Pagination]);

interface VendorProgramProps {
	vendorsProgramBoxes: any;
}

const VendorProgram: FC<VendorProgramProps> = ({ vendorsProgramBoxes }) => {
	return (
		<section className="mb-20 md:mb-36">
			<div className="container">
				<Heading
					size={'h2'}
					variant={'medium'}
					className="max-w-screen-lg mx-auto text-left lg:text-center text-dark-blue"
				>
					Are you a<span className="font-bold text-green"> vendor?</span>
				</Heading>
				<Heading
					size={'h5'}
					variant={'regular'}
					className="max-w-6xl mx-auto mt-4 text-left lg:text-center text-dark-blue"
				>
					Sell more software and grow your business with ready-to-buy leads at
					<span className="font-bold"> 30% lower cost.</span>
				</Heading>
				{/* Desktop Screens */}
				<div className="hidden grid-cols-3 gap-8 mt-12 lg:grid">
					{vendorsProgramBoxes &&
						vendorsProgramBoxes.map((vendor: any) => (
							<VendorProgramBox
								key={uuidv4()}
								title={vendor.title}
								desc={vendor.description}
							/>
						))}
				</div>
				{/* Mobile Screens */}
				<div className="block mt-12 lg:hidden">
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
						{vendorsProgramBoxes &&
							vendorsProgramBoxes.map((vendor: any) => (
								<SwiperSlide key={uuidv4()}>
									<VendorProgramBox
										key={uuidv4()}
										title={vendor.title}
										desc={vendor.description}
									/>
								</SwiperSlide>
							))}
					</Swiper>
				</div>
				<div className="flex justify-center mt-12">
					<Link
						prefetch={false}
						href="/lead-generation"
						className="w-full md:w-60"
					>
						<Button variant={'green'} size={'lg'}>
							Vendor Program
						</Button>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default VendorProgram;
