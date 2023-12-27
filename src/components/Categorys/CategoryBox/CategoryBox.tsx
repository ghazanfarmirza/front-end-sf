import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import Paragraph from '../../ui/Paragraph/Paragraph';
import styles from './CategoryBox.module.css';

interface CategoryBoxProps {
	item: {
		id: number;
		title: string;
		icon: any;
		link: string;
	};
}

const CategoryBox: FC<CategoryBoxProps> = ({ item }) => {
	return (
		<div className={styles.box}>
			<Link prefetch={false} href={item?.link || ''}>
				<Image
					src={item.icon?.data?.attributes?.url}
					alt={item.title}
					width={45}
					height={45}
				/>
				<Paragraph
					size={'default'}
					variant={'medium'}
					className="text-black mt-5"
				>
					{item.title}
				</Paragraph>
			</Link>
		</div>
	);
};

export default CategoryBox;
