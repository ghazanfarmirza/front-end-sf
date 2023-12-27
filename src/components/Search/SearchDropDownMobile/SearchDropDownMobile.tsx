import RightArrowLink from '@/components/ui/Link/RightArrowLink/RightArrowLink';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './SearchDropDownMobile.module.css';
interface SearchDropDownMobileProps {
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
}

const SearchDropDownMobile: FC<SearchDropDownMobileProps> = ({
	list,
	searchTerm,
}) => {
	return (
		<div className={styles.box}>
			{list.map((item) => (
				<div key={uuidv4()} className={styles.card}>
					<div className={styles.header}>
						<div>{item.title}</div>
					</div>
					<div className={styles.body}>
						<ul>
							{item.listItems?.map((item) => (
								<li key={uuidv4()}>
									<Link
										prefetch={false}
										href={`/${
											Array.isArray(item.attributes?.categories?.data)
												? item.attributes?.categories?.data[0]?.attributes?.slug
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
			))}
			<RightArrowLink
				title="View Search Result"
				link={`/search-result?search=${searchTerm}`}
				variant="small"
			/>
		</div>
	);
};

export default SearchDropDownMobile;
