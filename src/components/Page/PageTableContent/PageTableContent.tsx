'use client';
import { cn } from '@/lib/utils/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC, useState } from 'react';
import Paragraph from '../../ui/Paragraph/Paragraph';
import styles from './PageTableContent.module.css';

interface PageTableContentProps {
	lists: {
		id: number;
		title: string;
		link: string;
		linkActive: boolean;
	}[];
}

const PageTableContent: FC<PageTableContentProps> = ({ lists }) => {
	const path = usePathname();
	const [sidebarLinks, setSidebarLinks] = useState(lists);
	// Function to handle link clicks and update activeLink
	const handleLinkClick = (link: string) => {
		const updatedLinks = lists.map((item: any) => ({
			...item,
			linkActive: item.link === link,
		}));
		setSidebarLinks(updatedLinks);
	};
	return (
		<div className={cn(styles.header, 'my-8 lg:my-14')}>
			<Paragraph variant={'bold'} className="mb-6 text-green">
				On This Page
			</Paragraph>
			{sidebarLinks.map((item) => (
				<li
					key={item.id}
					className={cn(
						styles.item,
						item.linkActive ? styles.item_active : 'text-sm text-grey'
					)}
				>
					<Link
						prefetch={false}
						href={path + item.link}
						onClick={() => handleLinkClick(item.link)}
					>
						{item.title}
					</Link>
				</li>
			))}
		</div>
	);
};

export default PageTableContent;
