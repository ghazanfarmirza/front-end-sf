import { cn } from '@/lib/utils/utils';
import Link from 'next/link';
import { FC } from 'react';
import styles from './PageListItem.module.css';

interface PageListItemProps {
	item: {
		id: number;
		title: string;
		link: string;
		linkActive: boolean;
	};
}

const PageListItem: FC<PageListItemProps> = ({ item }) => {
	return (
		<li className={cn(styles.item, item.linkActive ? styles.item_active : '')}>
			<Link prefetch={false} href={item.link}>
				{item.title}
			</Link>
		</li>
	);
};

export default PageListItem;
