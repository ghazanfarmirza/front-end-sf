import Description from '@/components/ui/Description/Description';
import { FC } from 'react';

interface CategoryDetailDescriptionProps {
	shortDescription: string;
}

const CategoryDetailDescription: FC<CategoryDetailDescriptionProps> = ({
	shortDescription,
}) => {
	return (
		<div className="col-span-9">
			<Description className="text-black">{shortDescription}</Description>
		</div>
	);
};

export default CategoryDetailDescription;
