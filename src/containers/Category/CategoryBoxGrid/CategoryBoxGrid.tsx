import CategoryBox from '@/components/Categorys/CategoryBox/CategoryBox';
import Heading from '@/components/ui/Heading/Heading';
import RightArrowLink from '@/components/ui/Link/RightArrowLink/RightArrowLink';
import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './CategoryBoxGrid.module.css';
interface CategoryBoxGridProps {
	title: string;
	link?: string;
	linkTitle?: string;
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

const CategoryBoxGrid: FC<CategoryBoxGridProps> = ({
	title,
	list,
	linkTitle,
	category,
}) => {
	if (!list.length) return null;
	return (
		<li className={styles.listItem}>
			<Heading size={'h3'} variant={'semibold'} className="text-black">
				Browse by {title}
			</Heading>
			<div className="grid grid-cols-4 py-12 gap-14">
				{list &&
					list
						.slice(0, 4)
						?.map((item) => (
							<CategoryBox key={uuidv4()} item={item.attributes} />
						))}
			</div>
			<div className="flex items-center justify-end">
				<RightArrowLink
					title={`View all ${linkTitle || title}`}
					link={`/categories#${category}`}
				/>
			</div>
		</li>
	);
};

export default CategoryBoxGrid;
