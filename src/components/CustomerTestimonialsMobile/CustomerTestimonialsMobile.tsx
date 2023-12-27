import Image from 'next/image';
import { FC } from 'react';
import Heading from '../ui/Heading/Heading';
import Paragraph from '../ui/Paragraph/Paragraph';

import { SuccessStoriesType } from '@/lib/types/types';
import styles from './CustomerTestimonialsMobile.module.css';

interface CustomerTestimonialsMobileProps {
	data: SuccessStoriesType;
}

const CustomerTestimonialsMobile: FC<CustomerTestimonialsMobileProps> = ({
	data,
}) => {
	return (
		<>
			<div className={styles.box}>
				<Image
					src="/images/signature.svg"
					width={92}
					height={58}
					alt="signature"
				/>

				<Paragraph
					size={'default'}
					variant={'regular'}
					className={`${styles.comma} text-dark-blue mt-4`}
				>
					{data.story_text}
				</Paragraph>
				<p className="py-6 font-bold opacity-50 text-dark-blue text-small">
					{data.name}
				</p>
				<div className="flex flex-col gap-5">
					<div className="flex flex-col gap-4">
						<Heading size={'h4'} variant={'bold'} className="text-dark-blue ">
							{data.research_hours}+
						</Heading>
						<Paragraph
							size={'xs'}
							variant={'regular'}
							className="text-dark-blue text-small"
						>
							Research Hours Saved
						</Paragraph>
					</div>
					<div className="flex flex-col gap-4">
						<Heading size={'h4'} variant={'bold'} className="text-dark-blue">
							{data.demo_views}+
						</Heading>
						<Paragraph
							size={'xs'}
							variant={'regular'}
							className="text-dark-blue text-small"
						>
							Demo Views
						</Paragraph>
					</div>
					<div className="flex flex-col gap-4">
						<Heading size={'h4'} variant={'bold'} className="text-dark-blue ">
							{data.purchase_timeframe}%
						</Heading>
						<Paragraph
							size={'xs'}
							variant={'regular'}
							className="text-dark-blue text-small"
						>
							Reduced Purchase Timeframe
						</Paragraph>
					</div>
					<div className="flex flex-col gap-4">
						<Heading size={'h4'} variant={'bold'} className="text-dark-blue ">
							{data.software_options}
						</Heading>
						<Paragraph
							size={'xs'}
							variant={'regular'}
							className="text-dark-blue text-small"
						>
							Narrowed Software Options
						</Paragraph>
					</div>
				</div>
			</div>
		</>
	);
};

export default CustomerTestimonialsMobile;
