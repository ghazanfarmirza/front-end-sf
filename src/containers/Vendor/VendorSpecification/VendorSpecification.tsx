'use client';
import Heading from '@/components/ui/Heading/Heading';
import RightArrowDownLink from '@/components/ui/Link/RightArrowLink/RightArrowDownLink/RightArrowDownLink';
import RightArrowUpLink from '@/components/ui/Link/RightArrowLink/RightArrowUpLink/RightArrowUpLink';
import { FC, useState } from 'react';
import VendorSpecificationListItem from '../VendorSpecificationListItem/VendorSpecificationListItem';

interface VendorSpecificationProps {
	list: {
		id: string;
		title: string;
		status: boolean;
	}[];
	name: string;
}

const VendorSpecification: FC<VendorSpecificationProps> = ({ list, name }) => {
	//show 4 items first and then on clicking view all show all items
	const [specifications, setSpecifications] = useState(list.slice(0, 4));

	return (
		<section className="py-12">
			<Heading size={'h5'} variant={'semibold'} className="text-black mb-8">
				{name} Specifications
			</Heading>
			{specifications.map((item) => (
				<VendorSpecificationListItem key={item.id} item={item} />
			))}
			{(list.length != specifications.length && (
				<div
					className="flex items-center justify-end mt-8 pointer-events-auto"
					onClick={() => setSpecifications(list)}
				>
					<RightArrowDownLink link="" title="View All Specifications" />
				</div>
			)) ||
				(list.length > 4 && (
					<div
						className="flex items-center justify-end mt-8 hover:pointer-events-auto"
						onClick={() => setSpecifications(list.slice(0, 4))}
					>
						<RightArrowUpLink link="" title="View Less Specifications" />
					</div>
				))}
		</section>
	);
};

export default VendorSpecification;
