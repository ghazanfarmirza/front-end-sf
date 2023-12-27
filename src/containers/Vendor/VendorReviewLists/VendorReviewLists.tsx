import { FC } from 'react';
import VendorReviewListItem from '../VendorReviewListItem/VendorReviewListItem';

interface VendorReviewListsProps {
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

const VendorReviewLists: FC<VendorReviewListsProps> = ({ list }) => {
	return (
		<div className="flex-col items-center justify-center hidden gap-8 mb-24 lg:flex">
			{list.map((item) => (
				<VendorReviewListItem key={item.id} item={item.attributes} />
			))}
		</div>
	);
};

export default VendorReviewLists;
