import Link from 'next/link';
import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface FooterListProps {
	list: {
		title: string;
		slug: string;
		categories?: {
			data: {
				attributes: {
					name: string;
					slug: string;
				};
			}[];
		};
	}[];
}

const FooterList: FC<FooterListProps> = ({ list }) => {
	return (
		<ul className="flex flex-col gap-2 mt-4 text-white">
			{list.map((item) => (
				<li key={uuidv4()}>
					<Link
						prefetch={false}
						href={`${
							item.categories
								? `/${item.categories.data[0]?.attributes?.slug}/${item.slug}`
								: `/resources/${item.slug}`
						}`}
						className="font-regular hover:font-medium transition-effect"
					>
						{item.title}
					</Link>
				</li>
			))}
		</ul>
	);
};

export default FooterList;
