'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC, useState } from 'react';
import Paragraph from '../../ui/Paragraph/Paragraph';
import styles from './CatageoryDetailSideBar.module.css';

interface CategoryDetailSideBarProps {
	sideBarList: any;
}

const CategoryDetailSideBar: FC<CategoryDetailSideBarProps> = ({
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
		<div className="hidden col-span-3 lg:block">
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
								linkItem.activeLink ? styles.link_active : 'text-sm text-grey'
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

export default CategoryDetailSideBar;
