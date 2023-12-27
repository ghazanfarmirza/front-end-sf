import CategoryListItemMobile from '@/components/Categorys/CategoryListItemMobile/CategoryListItemMobile';
import FiltersMobile from '@/components/FiltersMobile/FiltersMobile';
import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface CategoryListMobileContainerProps {
	categoryListItems: any;
	category?: string;
	type: string;
}

const CategoryListMobileContainer: FC<CategoryListMobileContainerProps> = ({
	categoryListItems,
	category,
	type,
}) => {
	return (
		<section className="block py-12 lg:hidden">
			<div className="container">
				<div>
					<FiltersMobile />
				</div>
				<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
					{categoryListItems.map((item: any) => (
						<CategoryListItemMobile
							key={uuidv4()}
							item={item.attributes}
							category={category}
							type={type}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default CategoryListMobileContainer;
