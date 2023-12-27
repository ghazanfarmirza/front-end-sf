import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PopularCategoryBox from '../PopularCategoryBox/PopularCategoryBox';
interface PopularCategoryGridProps {
	popularCategoryGrid: any;
	category: string;
}

const PopularCategoryGrid: FC<PopularCategoryGridProps> = ({
	popularCategoryGrid,
	category,
}) => {
	return (
		<div className="grid grid-cols-3 gap-6 lg:gap-12 xl:gap-16 lg:grid-cols-4 xl:grid-cols-5">
			{popularCategoryGrid.map((popular: any) => (
				<PopularCategoryBox
					key={uuidv4()}
					title={popular.attributes?.name}
					slug={popular.attributes?.slug}
					icon={
						process.env.NEXT_PUBLIC_STRAPI_IMAGE_URL +
						popular.attributes?.logo.image_url
					}
					rating={popular.rating}
					category={category}
				/>
			))}
		</div>
	);
};

export default PopularCategoryGrid;
