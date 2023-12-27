import LeadDetailBox from '@/components/Lead/LeadDetailBox/LeadDetailBox';
import Heading from '@/components/ui/Heading/Heading';
import { FC } from 'react';
import styles from './LeadDetailsSection.module.css';
interface LeadDetailsSectionProps {
	leadsExamples: {
		title: string;
		example: {
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
		}[];
	};
}

const LeadDetailsSection: FC<LeadDetailsSectionProps> = ({
	leadsExamples: { title, example },
}) => {
	return (
		<section className={styles.wrapper}>
			<div className="container">
				<div className="grid grid-cols-12">
					<div className="col-span-10 col-start-2">
						<Heading
							size={'h3'}
							variant={'semibold'}
							className="mb-12 text-left text-black lg:text-center"
						>
							{title}
						</Heading>
						{example.map((item, index) => (
							<LeadDetailBox key={index} data={item} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default LeadDetailsSection;
