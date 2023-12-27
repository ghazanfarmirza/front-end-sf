import { cn } from '@/lib/utils/utils';
import { FC } from 'react';

import Paragraph from '@/components/ui/Paragraph/Paragraph';
import styles from './LeadDetailBox.module.css';

interface LeadDetailBoxProps {
	data: {
		heading: string;
		clientName: string;
		companyName: string;
		email: string;
		phone: string;
		address: string;
		industry: string;
		companySize: string;
		annualRevenue: string;
		applicationRequired: string;
		keyFeatures: string;
		currentSoftware: string;
		priceExpectations: string;
		projectTimeline: string;
		detailedNotes: string;
	};
}

const LeadDetailBox: FC<LeadDetailBoxProps> = ({ data }) => {
	return (
		<div className={styles.box}>
			<Paragraph size={'lg'} variant={'bold'} className="mb-12 text-black">
				{data.heading}
			</Paragraph>
			<div className={cn('grid grid-cols-12')}>
				<div
					className={cn(
						styles.left,
						'col-span-12 gap-4 lg:gap-0 lg:col-span-4 flex flex-col justify-between'
					)}
				>
					<div className="flex flex-col gap-2">
						<Paragraph size={'lg'} variant={'semibold'} className="text-white">
							Contact Information
						</Paragraph>
						<Paragraph className="text-white">
							<span className="font-bold">Client Name: </span>
							{data.clientName}
						</Paragraph>
						<Paragraph className="text-white">
							<span className="font-bold">Company Name: </span>
							{data.companyName}
						</Paragraph>
						<Paragraph className="text-white">
							<span className="font-bold">Email: </span>
							{data.email}
						</Paragraph>
						<Paragraph className="text-white">
							<span className="font-bold">Phone: </span>
							{data.phone}
						</Paragraph>
						<Paragraph className="text-white">
							<span className="font-bold">Address: </span>
							{data.address}
						</Paragraph>
					</div>
					<div className="flex flex-col gap-2">
						<Paragraph size={'lg'} variant={'semibold'} className="text-white">
							Company Profile
						</Paragraph>
						<Paragraph className="text-white">
							<span className="font-bold">Industry: </span>
							{data.industry}
						</Paragraph>
						<Paragraph className="text-white">
							<span className="font-bold">Company Size: </span>
							{data.companySize}
						</Paragraph>
						<Paragraph className="text-white">
							<span className="font-bold">Annual Revenue: </span>
							{data.annualRevenue}
						</Paragraph>
					</div>
				</div>
				<div className={cn(styles.right, 'col-span-12 lg:col-span-8')}>
					<div className="flex flex-col gap-2">
						<Paragraph size={'lg'} variant={'semibold'} className="text-black">
							Outline of Projects & Requirements
						</Paragraph>
						<Paragraph className="text-black">
							<span className="font-bold">Application Required: </span>
							{data.applicationRequired}
						</Paragraph>
						<Paragraph className="text-black">
							<span className="font-bold">Key Features Required: </span>
							{data.keyFeatures}
						</Paragraph>
						<Paragraph className="text-black">
							<span className="font-bold">Current Software: </span>
							{data.currentSoftware}
						</Paragraph>
						<Paragraph className="text-black">
							<span className="font-bold">Price Expectation: </span>
							{data.priceExpectations}
						</Paragraph>
						<Paragraph className="text-black">
							<span className="font-bold">Timeline of Project: </span>
							{data.projectTimeline}
						</Paragraph>
						<Paragraph className="text-black">
							<span className="font-bold">Detailed call notes: </span>
							{data.detailedNotes}
						</Paragraph>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LeadDetailBox;
