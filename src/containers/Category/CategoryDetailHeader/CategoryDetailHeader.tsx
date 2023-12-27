import CategoryDetailDescription from '@/components/Categorys/CategoryDetailDescription/CategoryDetailDescription';
import CategoryDetailSideBar from '@/components/Categorys/CategoryDetailSideBar/CategoryDetailSideBar';
import { catgorySideBarList } from '@/lib/settings/settings';
import { FC } from 'react';
import CategoryDetailSideBarMobile from '../CategoryDetailSideBarMobile/CategoryDetailSideBarMobile';

interface CategoryDetailHeaderProps {
	shortDescription: string;
	categoryName: string;
	onThisPage?: any;
}

const CategoryDetailHeader: FC<CategoryDetailHeaderProps> = ({
	shortDescription,
	categoryName,
	onThisPage,
}) => {
	const sideBarList = catgorySideBarList(categoryName).map((item, index) => {
		return { ...item, name: onThisPage[index]?.text || item.name };
	});

	return (
		<section className="mt-16 lg:mt-0">
			<div className="container">
				<div className="flex flex-col gap-12 lg:gap-8 lg:grid lg:grid-cols-12">
					{/* For Desktop Screens */}
					<CategoryDetailSideBar sideBarList={sideBarList} />
					{/* For Mobile Screens  */}
					<CategoryDetailSideBarMobile sideBarList={sideBarList} />
					<CategoryDetailDescription shortDescription={shortDescription} />
				</div>
			</div>
		</section>
	);
};

export default CategoryDetailHeader;
