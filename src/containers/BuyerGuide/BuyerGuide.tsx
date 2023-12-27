import BuyerGuideDetail from '@/components/BuyerGuide/BuyerGuideDetail/BuyerGuideDetail';
import BuyerGuideSideBar from '@/components/BuyerGuide/BuyerGuideSideBar/BuyerGuideSideBar';
import { FC } from 'react';

interface BuyerGuideProps {
	description: string;
	category: string;
	sideBarList?: any;
}

const BuyerGuide: FC<BuyerGuideProps> = ({
	description,
	category,
	sideBarList,
}) => {
	const index = description.indexOf('null');
	if (index != -1) return null;
	return (
		<section className="mt-12 md:mt-24">
			<div className="container">
				<div className="block grid-cols-12 gap-24 lg:grid">
					<BuyerGuideDetail description={description} category={category} />
					<BuyerGuideSideBar
						categoryName={category}
						sideBarList={sideBarList}
					/>
				</div>
			</div>
		</section>
	);
};

export default BuyerGuide;
