import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import styles from './Category.module.css';
interface CategoryProps {
	title: string;
	icon: string;
	href: string;
}

const Category: FC<CategoryProps> = ({ title, href, icon }) => {
	return (
		<Link prefetch={false} href={href} className={styles.category}>
			<Image src={icon} alt={title} width={36} height={36} />
			<p className="text-white text-medium">{title}</p>
		</Link>
	);
};

export default Category;
