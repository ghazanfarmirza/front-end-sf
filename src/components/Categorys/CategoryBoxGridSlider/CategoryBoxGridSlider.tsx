import Heading from '@/components/ui/Heading/Heading';
import RightArrowLink from '@/components/ui/Link/RightArrowLink/RightArrowLink';
import { FC } from 'react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { v4 as uuidv4 } from 'uuid';
import CategoryBox from '../CategoryBox/CategoryBox';
import styles from './CategoryBoxGridSlider.module.css';
interface CategoryBoxGridSliderProps {
	title: string;
	link?: string;
	list: {
		attributes: {
			id: number;
			icon: any;
			title: string;
			link: string;
		};
	}[];
}

const CategoryBoxGridSlider: FC<CategoryBoxGridSliderProps> = ({
	title,
	link,
	list,
}) => {
	return (
		<>
			<style jsx global>
				{`
					.category-grid-box {
						padding-left: 40px; /* To account for the left arrow */
						padding-right: 40px;
					}
					.category-grid-box .swiper-pagination-bullet {
						width: 12px;
						height: 12px;
					}
					.category-grid-box .swiper-slide {
						display: flex;
						flex-direction: column;
					}

					.category-grid-box .swiper-button-next:after,
					.category-grid-box .swiper-button-prev:after {
						font-size: 30px;
						color: #9abf15;
					}

					.category-grid-box .swiper-button-next,
					.category-grid-box .swiper-button-prev {
						width: 30px;
						top: 45%;
					}

					.category-grid-box .swiper-button-next {
						right: 0;
					}

					.category-grid-box .swiper-button-prev {
						left: 0;
					}
				`}
			</style>

			<li className={styles.listItem}>
				<Heading size={'h3'} variant={'semibold'} className="mb-8 text-black">
					Browse by {title}
				</Heading>

				<Swiper
					// pagination={{ clickable: true }}
					spaceBetween={40}
					className={'category-grid-box'}
					slidesPerView={1}
					navigation
					modules={[Navigation]}
					breakpoints={{
						500: {
							slidesPerView: 2,
						},
					}}
				>
					{list.map((item) => (
						<SwiperSlide key={uuidv4()}>
							<CategoryBox key={uuidv4()} item={item.attributes} />
						</SwiperSlide>
					))}
				</Swiper>

				<div className="flex items-center justify-end mt-6">
					<RightArrowLink
						title={`View All ${
							(title.includes('Spec') && 'Specialities') || 'Industries'
						}`}
						link={link || '/'}
					/>
				</div>
			</li>
		</>
	);
};

export default CategoryBoxGridSlider;
