import CategoryCompareBox from '@/components/Categorys/CategoryCompareBox/CategoryCompareBox';
import Heading from '@/components/ui/Heading/Heading';
import RightArrowLink from '@/components/ui/Link/RightArrowLink/RightArrowLink';
import { FC } from 'react';

interface CategoryCompareProps {
	title: string;
	compareProductsList: {
		vendor1_name: string;
		vendor1_logo: { data: { attributes: { url: string } } };
		vendor2_name: string;
		vendor2_logo: { data: { attributes: { url: string } } };
		text: string;
		url: string;
	}[];
}

const CategoryCompare: FC<CategoryCompareProps> = ({
	title,
	compareProductsList,
}) => {
	return (
		<div>
			<Heading size={'h3'} variant={'semibold'}>
				{title}
			</Heading>
			<div className="grid grid-cols-2 gap-12 mt-8">
				{compareProductsList.map((item) => (
					<CategoryCompareBox key={item.text} compareList={item} />
				))}
			</div>
			<div className="flex items-center justify-end mt-8">
				<RightArrowLink link={`/resources`} title={'View All Comparisons'} />
			</div>
		</div>
	);
};

export default CategoryCompare;
