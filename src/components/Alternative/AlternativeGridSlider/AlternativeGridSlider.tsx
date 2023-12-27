'use client';
import Button from '@/components/ui/Button/Button';
import Heading from '@/components/ui/Heading/Heading';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import AlternativeGridBox from '../AlternativeGridBox/AlternativeGridBox';

interface AlternativeGridSliderProps {
	title: string;
	button: boolean;
	alternatives?: any;
	type?: string;
}

const AlternativeGridSlider: FC<AlternativeGridSliderProps> = ({
	title,
	button,
	alternatives,
	type = 'software',
}) => {
	const path = usePathname().split('/');
	const category = path[1];
	const vendor = path[2];
	return (
		<>
			<style jsx global>
				{`
					.alternative_grid_mobile .swiper-pagination-bullet {
						width: 12px;
						height: 12px;
					}
					.alternative_grid_mobile {
						padding-bottom: 54px;
					}
					.alternative_grid_mobile .swiper-pagination-bullet {
						width: 16px;
						height: 16px;
						background: #a5a5a5;
						opacity: 1;
					}
					.alternative_grid_mobile .swiper-pagination-bullet-active {
						opacity: 1;
						background: #10292d;
					}

					.alternative_grid_mobile .swiper-pagination-bullet {
						width: 12px;
						height: 12px;
					}
				`}
			</style>
			<section className="block lg:hidden">
				<div className="container">
					<Heading
						size={'h3'}
						variant={'semibold'}
						className="mb-10 text-left text-black lg:text-center"
					>
						{title}
					</Heading>
					<Swiper
						pagination={{ clickable: true }}
						spaceBetween={20}
						className={'alternative_grid_mobile'}
						slidesPerView={1}
						breakpoints={{
							500: {
								slidesPerView: 2,
							},
							767: {
								slidesPerView: 3,
							},
						}}
					>
						{alternatives?.map((item: any) => (
							<SwiperSlide key={item.attributes?.slug}>
								<AlternativeGridBox
									title={item.attributes?.name}
									desc={item.attributes?.description}
									rating={item.attributes?.alternativeReviews?.data}
									image={
										process.env.NEXT_PUBLIC_STRAPI_IMAGE_URL +
										item.attributes?.logo.image_url
									}
									link={`/${
										item?.attributes?.categories?.data[0].attributes.slug ||
										category
									}/${item.attributes?.slug}
									${type == 'software' && '/alternatives'}`}
								/>
							</SwiperSlide>
						))}
					</Swiper>
					{type == 'software' && button && (
						<div className="flex items-center justify-center mt-8">
							<Link
								prefetch={false}
								href={`/${category}/${vendor}/alternatives`}
							>
								<Button size={'lg'} variant={'green'}>
									All Alternatives
								</Button>
							</Link>
						</div>
					)}
				</div>
			</section>
		</>
	);
};

export default AlternativeGridSlider;
