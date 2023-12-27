import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import styles from './SearchDropDown.module.css';

interface SearchDropDownProps {
	list: {
		id: number;
		title: string;
		listItems: {
			attributes: {
				slug: string;
				title: string;
				image_url: string | null;
			};
		}[];
	}[];
	searchTerm?: string;
}

const SearchDropDownResources: FC<SearchDropDownProps> = ({ list }) => {
	return (
		<div className={styles.box}>
			{list.map((item) => (
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
										href={`/resources/${item.attributes?.slug}`}
										className="flex items-center gap-4"
									>
										{item.attributes?.image_url &&
											item.attributes?.image_url && (
												<Image
													src={
														process.env.NEXT_PUBLIC_DIGITAL_OCEAN_IMAGE_URL +
														(item.attributes?.image_url || '') // Provide a default empty string if image_url is null
													}
													alt={item.attributes?.image_url || 'Image'}
													width={30}
													height={20}
												/>
											)}
										{item.attributes?.title}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
			))}
		</div>
	);
};

export default SearchDropDownResources;
