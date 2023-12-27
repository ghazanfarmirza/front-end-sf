'use client';
import { FC } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import CategoryBoxGridSlider from '../CategoryBoxGridSlider/CategoryBoxGridSlider';

interface CategoryBoxGridMobileProps {
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
	category?: string;
}

const CategoryBoxGridMobile: FC<CategoryBoxGridMobileProps> = ({
	title,
	link = '/categories',
	list,
	category,
}) => {
	if (!list.length) return null;
	return (
		<>
			<section className="block lg:hidden mt-14">
				<div className="container">
					<ul>
						<CategoryBoxGridSlider
							title={title}
							link={`${link}#${category}`}
							list={list}
						/>
					</ul>
				</div>
			</section>
		</>
	);
};

export default CategoryBoxGridMobile;
