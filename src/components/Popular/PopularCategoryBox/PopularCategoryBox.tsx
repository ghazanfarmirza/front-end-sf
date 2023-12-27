import Image from 'next/image';
import { FC } from 'react';

import Rating from '@/components/ui/Rating/Rating';
import Link from 'next/link';
import Paragraph from '../../ui/Paragraph/Paragraph';
import styles from './PopularCategoryBox.module.css';

interface PopularCategoryBoxProps {
	title: string;
	slug: string;
	rating: number;
	icon: string;
	category: string;
}

const PopularCategoryBox: FC<PopularCategoryBoxProps> = ({
	title,
	slug,
	rating,
	icon,
	category,
}) => {
	return (
		<div className="flex flex-col items-center justify-start gap-4">
			<Link prefetch={false} href={`/${category}/${slug}`}>
				<div className={styles.image}>
					<Image src={icon} alt={title} width={148} height={58} />
				</div>
			</Link>
			<div className="flex flex-col items-center justify-center gap-1">
				<Link prefetch={false} href={`/${category}/${slug}`}>
					<Paragraph
						size={'md'}
						variant={'regular'}
						className="text-black text-center"
					>
						{title}
					</Paragraph>
				</Link>
				<Rating rating={rating} />
			</div>
		</div>
	);
};

export default PopularCategoryBox;
