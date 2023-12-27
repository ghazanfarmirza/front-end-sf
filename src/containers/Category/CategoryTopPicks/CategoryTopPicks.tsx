import CategoryListItem from '@/components/Categorys/CategoryListItem/CategoryListItem';
import CategoryListItemMobile from '@/components/Categorys/CategoryListItemMobile/CategoryListItemMobile';
import Button from '@/components/ui/Button/Button';
import Heading from '@/components/ui/Heading/Heading';
import Link from 'next/link';
import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface CategoryTopPicksProps {
	title: string;
	subTitle?: string;
	vendors: any;
	category?: string;
	type: string;
}

const CategoryTopPicks: FC<CategoryTopPicksProps> = ({
	title,
	subTitle,
	vendors,
	category,
	type,
}) => {
	return (
		<section className="py-24">
			<div className="container">
				<Heading
					size="h2"
					variant={'semibold'}
					className="text-black text-2xl lg:text-3xl"
				>
					{title}
				</Heading>
				{subTitle && (
					<Heading
						size="h3"
						variant={'medium'}
						className="mt-2 text-black text-base lg:text-xl"
					>
						{subTitle}
					</Heading>
				)}

				{/* Desktop Screens */}
				<div className="flex-col hidden gap-8 mt-8 lg:flex">
					{vendors.map((item: any) => (
						<CategoryListItem
							key={uuidv4()}
							item={item.attributes}
							category={category}
							type={type}
						/>
					))}
				</div>

				{/* Mobile Screens */}

				<div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 lg:hidden">
					{vendors.map((item: any) => (
						<CategoryListItemMobile
							key={item.id}
							item={item.attributes}
							category={category}
							type={type}
						/>
					))}
				</div>
				<div className="flex justify-center mt-10">
					<Link prefetch={false} href={`/${category}/all`}>
						<Button size={'lg'} variant={'green'}>
							{type == 'software' ? 'All Products' : 'All Companies'}
						</Button>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default CategoryTopPicks;
