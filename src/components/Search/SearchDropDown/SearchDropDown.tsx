import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import RightArrowLink from '@/components/ui/Link/RightArrowLink/RightArrowLink';
import styles from './SearchDropDown.module.css';

interface SearchDropDownProps {
	list: {
		id: number;
		title: string;
		listItems: {
			attributes: {
				slug: string;
				name: string;
				logo?: { image_url: string | null };
				categories?: {
					data: [{ attributes: { slug: string } }];
				};
				category?: {
					data: { attributes: { slug: string } };
				};
			};
		}[];
	}[];
	searchTerm?: string;
	hasResults?: boolean;
}

const SearchDropDown: FC<SearchDropDownProps> = ({
	list,
	searchTerm,
	hasResults,
}) => {
	return (
		<div className={styles.box}>
			{list.map(
				(item) =>
					item.listItems &&
					item.listItems.length > 0 && (
						<div key={item.id} className={styles.card}>
							<div className={styles.header}>
								<div>{item.title}</div>
							</div>
							<div className={styles.body}>
								<ul>
									{item.listItems?.map((item) => (
										<li key={item.attributes?.slug}>
											<Link
												prefetch={false}
												href={`/${
													Array.isArray(item.attributes?.categories?.data)
														? item.attributes?.categories?.data[0]?.attributes
																?.slug
														: item.attributes?.category?.data?.attributes?.slug
												}/${item.attributes?.slug}`}
												className="flex items-center gap-4"
											>
												{item.attributes?.logo &&
													item.attributes?.logo.image_url && (
														<Image
															src={
																process.env.NEXT_PUBLIC_STRAPI_IMAGE_URL +
																(item.attributes?.logo.image_url || '') // Provide a default empty string if image_url is null
															}
															alt={item.attributes?.logo.image_url || 'Image'}
															width={30}
															height={20}
														/>
													)}
												{item.attributes?.name}
											</Link>
										</li>
									))}
								</ul>
							</div>
						</div>
					)
			)}
			{hasResults && (
				<RightArrowLink
					title="View Search Result"
					link={`/search-result?search=${searchTerm}`}
					variant="small"
				/>
			)}
		</div>
	);
};

export default SearchDropDown;
