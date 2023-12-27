import { SuccessStoriesType } from '@/lib/types/types';
import Image from 'next/image';
import { FC } from 'react';
import Heading from '../ui/Heading/Heading';
import Paragraph from '../ui/Paragraph/Paragraph';
import styles from './CustomerTestimonials.module.css';

interface CustomerTestimonialsProps {
	data: SuccessStoriesType;
}

const CustomerTestimonials: FC<CustomerTestimonialsProps> = ({ data }) => {
	return (
		<>
			<style jsx>{`
				.customer-slider {
					background: linear-gradient(
							270deg,
							#10292d 26.04%,
							rgba(16, 41, 45, 0.15) 78.65%
						),
						url(${process.env.NEXT_PUBLIC_STRAPI_URL}${data.icon?.data
							?.attributes?.url || '/'});
					background-size: cover;
					background-repeat: no-repeat;
					background-position: center;
					padding: 70px;
					border-radius: 18px;
				}
			`}</style>
			<div className="grid grid-cols-12 customer-slider">
				<div className="col-span-7 col-start-6 px-12 py-10 bg-white rounded-2xl">
					<Paragraph
						size={'lg'}
						variant={'regular'}
						className={`${styles.comma} mb-8 text-dark-blue`}
					>
						{data.story_text}
					</Paragraph>
					<div className="grid grid-cols-2 ">
						<div>
							<div className="flex items-center gap-4 mb-2">
								<Heading
									size={'h4'}
									variant={'bold'}
									className="text-dark-blue "
								>
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
							<div className="flex items-center gap-4 mb-6">
								<Heading
									size={'h4'}
									variant={'bold'}
									className="text-dark-blue"
								>
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
							<div>
								<Image
									src="/images/signature.svg"
									width={92}
									height={58}
									alt="signature"
								/>
								<p className="opacity-50 font-regular text-dark-blue text-small">
									{data.name}
								</p>
							</div>
						</div>
						<div>
							<div className="flex flex-col items-center justify-center gap-2">
								<Heading
									size={'h4'}
									variant={'bold'}
									className="text-dark-blue "
								>
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
							<div className="flex flex-col items-center justify-center gap-2 mt-6">
								<Heading
									size={'h4'}
									variant={'bold'}
									className="text-dark-blue "
								>
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
				</div>
			</div>
		</>
	);
};

export default CustomerTestimonials;
