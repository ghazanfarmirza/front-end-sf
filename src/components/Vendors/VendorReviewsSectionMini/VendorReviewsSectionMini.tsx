import { FC } from 'react';
import VendorReviewMiniItem from '../VendorReviewMiniItem/VendorReviewMiniItem';

interface VendorReviewsSectionMiniProps {
	list: {
		id: number;
		attributes: {
			author: string;
			team_size: string;
			industry: string;
			time_used: string;
			company: string;
			rating: number;
			value_for_money: number;
			customer_support: number;
			ease_of_use: number;
			functionality: number;
			title: string;
			pros_text: string;
			cons_text: string;
			added_on: string;
		};
	}[];
}

const VendorReviewsSectionMini: FC<VendorReviewsSectionMiniProps> = ({
	list,
}) => {
	return (
		<div className="flex flex-col items-center justify-center gap-8 mb-12">
			{list.map((item) => (
				<VendorReviewMiniItem key={item.id} item={item.attributes} />
			))}
		</div>
	);
};

export default VendorReviewsSectionMini;
