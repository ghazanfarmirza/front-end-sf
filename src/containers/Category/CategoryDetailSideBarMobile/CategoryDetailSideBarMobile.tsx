'use client';
import Paragraph from '@/components/ui/Paragraph/Paragraph';
import { cn } from '@/lib/utils/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC, useState } from 'react';
import styles from './CategoryDetailSideBarMobile.module.css';

interface CategoryDetailSideBarMobileProps {
	sideBarList: any;
}

const CategoryDetailSideBarMobile: FC<CategoryDetailSideBarMobileProps> = ({
	sideBarList,
}) => {
	const path = usePathname();

	const [sidebarLinks, setSidebarLinks] = useState(sideBarList);

	// Function to handle link clicks and update activeLink
	const handleLinkClick = (link: string) => {
		const updatedLinks = sidebarLinks.map((item: any) => ({
			...item,
			activeLink: item.link === link,
		}));
		setSidebarLinks(updatedLinks);
	};
	return (
		<div className={cn(styles.box, 'block lg:hidden')}>
			<Paragraph size={'default'} variant={'bold'} className="py-4 text-green">
				On This Page
			</Paragraph>
			<ul className="flex flex-col gap-2">
				{sidebarLinks.map((linkItem: any) => (
					<li key={linkItem.id}>
						<Link
							prefetch={false}
							href={path + linkItem.link}
							className={
								linkItem.activeLink
									? styles.link_active
									: 'text-sm text-[#c1c1c1] '
							}
							onClick={() => handleLinkClick(linkItem.link)}
						>
							{linkItem.name}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default CategoryDetailSideBarMobile;
