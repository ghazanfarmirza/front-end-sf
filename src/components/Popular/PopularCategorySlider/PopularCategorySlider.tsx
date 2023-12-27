import { FC } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { v4 as uuidv4 } from 'uuid';
import PopularCategoryBox from '../PopularCategoryBox/PopularCategoryBox';
interface PopularCategorySliderProps {
	popularCategoryGrid: any;
	category: string;
}

const PopularCategorySlider: FC<PopularCategorySliderProps> = ({
	popularCategoryGrid,
	category,
}) => {
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
				className={'vendor_mobile'}
				slidesPerView={1}
				breakpoints={{
					420: {
						slidesPerView: 2,
					},
					767: {
						slidesPerView: 3,
					},
				}}
			>
				{popularCategoryGrid.map((popular: any) => (
					<SwiperSlide key={uuidv4()}>
						<PopularCategoryBox
							key={uuidv4()}
							title={popular.attributes?.name}
							slug={popular.attributes?.slug}
							icon={
								process.env.NEXT_PUBLIC_STRAPI_IMAGE_URL +
								popular.attributes?.logo.image_url
							}
							rating={popular.rating}
							category={category}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
};

export default PopularCategorySlider;
