import Description from '@/components/ui/Description/Description';
import { FC } from 'react';
import Heading from '../../ui/Heading/Heading';

interface BuyerGuideDetailProps {
	description: string;
	category: string;
}

const BuyerGuideDetail: FC<BuyerGuideDetailProps> = ({
	description,
	category,
}: BuyerGuideDetailProps) => {
	return (
		<div className="col-span-9">
			<Heading
				size={'h3'}
				variant={'semibold'}
				className="mb-8 text-left text-black"
			>
				{category} Buyers Guide
			</Heading>
			<Description className="text-black">{description}</Description>
		</div>
	);
};

export default BuyerGuideDetail;
