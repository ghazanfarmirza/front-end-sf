import Link from 'next/link';
import { FC } from 'react';

interface CategoryLinkListProps {
	list: any[];
	category?: string;
}

const CategoryLinkList: FC<CategoryLinkListProps> = ({
	list,
	category,
}: CategoryLinkListProps) => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2">
			{list.map((catLink: any) => (
				<Link
					prefetch={false}
					key={catLink?.id}
					href={`/${category}/${catLink?.attributes?.slug}`}
					className="hover:font-medium text-black"
				>
					{catLink?.attributes?.name}
				</Link>
			))}
		</div>
	);
};

export default CategoryLinkList;
