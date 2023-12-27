import Heading from '@/components/ui/Heading/Heading';
import Paragraph from '@/components/ui/Paragraph/Paragraph';
import { FC } from 'react';

interface VendorDescriptionProps {}

const VendorDescription: FC<VendorDescriptionProps> = () => {
	return (
		<section>
			<Heading size={'h3'} variant={'semibold'} className="text-black">
				What is athenahealth EMR Software?
			</Heading>
			<Heading size={'h5'} variant={'medium'} className="text-black py-8">
				Overview
			</Heading>
			<Paragraph className="text-black">
				athenahealth is an electronic health record (EHR) software designed for
				small to mid-sized healthcare organizations. As a cloud-based system, it
				allows healthcare providers to manage patient records, schedule
				appointments, order and track lab tests, and communicate with other
				clinical stakeholders involved in the care process.In 2022, Athenahealth
				was crowned ‘#1 Best in KLAS’ for two of its features: athenaClinicals
				Ambulatory EHR and athenaIDX practice management.
			</Paragraph>
			<Heading size={'h5'} variant={'medium'} className="text-black py-8">
				What is athenaHealth EMR best for?
			</Heading>
			<Paragraph className="text-black">
				athenahealth EMR software is best known for its cloud-based architecture
				and integrated platform, which includes features for managing patient
				records, scheduling appointments, managing billing and revenue, and
				coordinating care with other members of the healthcare team.
			</Paragraph>
			<Paragraph className="text-black py-8">
				The EHR software surfaces real-time data and insights from a network of
				135K clinicians, which means medical practitioners can access more
				comprehensive information during encounters. The network also enables
				seamless patient record sharing through the company’s connections with
				Carequality and CommonWell–national-level frameworks for health data
				sharing.
			</Paragraph>
			<Heading size={'h5'} variant={'medium'} className="text-black">
				athenahealth Pricing
			</Heading>
			<Paragraph className="text-black py-8">
				athenahealth is an electronic health record (EHR) software designed for
				small to mid-sized healthcare organizations. As a cloud-based system, it
				allows healthcare providers to manage patient records, schedule
				appointments, order and track lab tests, and communicate with other
				clinical stakeholders involved in the care process.In 2022, Athenahealth
				was crowned ‘#1 Best in KLAS’ for two of its features: athenaClinicals
				Ambulatory EHR and athenaIDX practice management.
			</Paragraph>
		</section>
	);
};

export default VendorDescription;
