'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC, useState } from 'react';
import Paragraph from '../../ui/Paragraph/Paragraph';
import styles from './BuyerGuideSideBar.module.css';

interface BuyerGuideSideBarProps {
	categoryName: string;
	sideBarList?: any;
}

const BuyerGuideSideBar: FC<BuyerGuideSideBarProps> = ({
	// categoryName,
	sideBarList,
}) => {
	const path = usePathname();

	const [sidebarLinks, setSidebarLinks] = useState(
		sideBarList?.map((item: any, index: number) => ({
			...item,
			activeLink: index === 0,
			link: `#${item.link_id}`,
		}))
	);

	// Function to handle link clicks and update activeLink
	const handleLinkClick = (link: string) => {
		const updatedLinks = sidebarLinks.map((item: any) => ({
			...item,
			activeLink: item.link === link,
		}));
		setSidebarLinks(updatedLinks);
	};
	if (!sideBarList.length) return null;
	return (
		<div className="sticky top-24 h-24 hidden col-span-3 lg:block ">
			<Paragraph size={'default'} variant={'bold'} className="py-4 text-green">
				Table Of Contents
			</Paragraph>
			<ul className="flex flex-col gap-2">
				{sidebarLinks?.map((linkItem: any) => (
					<li key={linkItem.link}>
						<Link
							prefetch={false}
							href={path + linkItem.link}
							className={
								linkItem.activeLink ? styles.link_active : 'text-sm text-grey'
							}
							onClick={() => handleLinkClick(linkItem.link)}
						>
							{linkItem.text}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default BuyerGuideSideBar;
