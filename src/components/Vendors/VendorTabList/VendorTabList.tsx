import { cn } from '@/lib/utils/utils';
import Link from 'next/link';
import { FC } from 'react';
import styles from './VendorTabList.module.css';

interface VendorTabListProps {
	list: {
		id: number;
		name: string;
		link: string;
	}[];
}

const VendorTabList: FC<VendorTabListProps> = ({ list }) => {
	return (
		<ul className={cn(styles.lists, 'flex items-center gap-6')}>
			{list.map((item) => (
				<li key={item.id} className={styles.list_item}>
					<Link
						prefetch={false}
						href={item.link}
						className="font-medium text-black transition-effect shifted-up"
					>
						{item.name}
					</Link>
				</li>
			))}
		</ul>
	);
};

export default VendorTabList;
