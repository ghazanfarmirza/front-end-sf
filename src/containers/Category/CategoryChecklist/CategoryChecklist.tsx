import CategoryCheckListBox from '@/components/Categorys/CategoryCheckListBox/CategoryCheckListBox';
import Heading from '@/components/ui/Heading/Heading';
import RightArrowLink from '@/components/ui/Link/RightArrowLink/RightArrowLink';
import { FC } from 'react';

interface CategoryChecklistProps {
	checkList: any[];
}

const CategoryChecklist: FC<CategoryChecklistProps> = ({ checkList }) => {
	return (
		<div>
			<Heading size={'h3'} variant={'semibold'}>
				Pricing Guides and Checklist
			</Heading>
			<div className="grid grid-cols-2 gap-12 mt-8">
				{checkList &&
					checkList.map((list: any, index: number) => (
						<CategoryCheckListBox key={index} checkList={list.attributes} />
					))}
			</div>
			<div className="flex items-center justify-end mt-8">
				<RightArrowLink link={'/resources'} title={'View all Resources'} />
			</div>
		</div>
	);
};

export default CategoryChecklist;
