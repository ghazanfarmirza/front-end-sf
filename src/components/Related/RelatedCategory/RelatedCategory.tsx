import { FC } from 'react';
import RelatedCollapseBox from '../RelatedCollapseBox/RelatedCollapseBox';
interface RelatedCategoryProps {
	heading: string;
	relatedSoftware: any;
	category: string;
}

const RelatedCategory: FC<RelatedCategoryProps> = ({
	heading,
	relatedSoftware,
	category,
}) => {
	return (
		<section className="py-16 md:py-24 md:mb-10">
			<div className="container border-b border-solid border-grey">
				<RelatedCollapseBox
					heading={`Related ${heading}`}
					items={relatedSoftware}
					category={category}
				/>
			</div>
		</section>
	);
};

export default RelatedCategory;
