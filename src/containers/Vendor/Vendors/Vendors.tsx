'use client';
import Heading from '@/components/ui/Heading/Heading';
import Link from 'next/link';
import { FC } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import Vendor from '../../../components/Vendors/Vendor/Vendor';

interface VendorsProps {
	vendors: any;
}
const Vendors: FC<VendorsProps> = ({ vendors }) => {
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
			<section className="py-10">
				<div className="container">
					<Heading
						size={'h4'}
						variant={'semibold'}
						className="text-left lg:text-center text-grey"
					>
						Trusted by Top Vendors
					</Heading>
					{/* Vendors Mobile and Tablet Screen */}
					<div className="block mt-8 lg:hidden ">
						<Swiper
							pagination={{ clickable: true }}
							spaceBetween={20}
							className={'vendor_mobile'}
							slidesPerView={2.5}
							breakpoints={{
								767: {
									slidesPerView: 3.5,
								},
							}}
						>
							{vendors &&
								vendors.map((v: any) => (
									<SwiperSlide key={v.vendor.data.attributes?.slug}>
										<Link
											prefetch={false}
											href={`/${v.vendor.data.attributes?.categories.data[0]?.attributes?.slug}/${v.vendor.data.attributes?.slug}`}
											key={v.vendor.data.attributes?.slug}
										>
											<Vendor
												src={v.src?.data?.attributes?.url}
												alt={v.alt}
												width={160}
												height={44}
											/>
										</Link>
									</SwiperSlide>
								))}
						</Swiper>
					</div>
					{/* Vendors Desktop Screen */}
					<div className="items-center justify-between hidden gap-3 mt-8 lg:flex">
						{vendors &&
							vendors.map((v: any) => (
								<Link
									prefetch={false}
									href={`/${v.vendor.data.attributes?.categories.data[0]?.attributes?.slug}/${v.vendor.data.attributes?.slug}`}
									key={v.vendor.data.attributes?.slug}
								>
									<Vendor
										key={v.vendor.data.attributes?.slug}
										src={v.src?.data?.attributes?.url}
										alt={v.alt}
										width={160}
										height={56}
									/>
								</Link>
							))}
					</div>
				</div>
			</section>
		</>
	);
};

export default Vendors;
