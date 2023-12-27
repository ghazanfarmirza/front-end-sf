import { cn } from '@/lib/utils/utils';
import { FC } from 'react';
import Heading from '../../ui/Heading/Heading';
import Paragraph from '../../ui/Paragraph/Paragraph';
import CtaForm from '../CtaForm/CtaForm';
import styles from './Cta.module.css';

interface CtaProps {
	heading1?: string;
	heading2?: string;
	paragraph?: string;
	categoryName?: string;
}

const Cta: FC<CtaProps> = ({
	heading1,
	heading2,
	paragraph,
	categoryName = '',
}) => {
	return (
		<div
			className={cn(
				styles.cta,
				' grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-2 items-center'
			)}
		>
			<div className={cn(styles.arrow, 'lg:col-span-7')}>
				<Heading
					size={'h3'}
					variant={'semibold'}
					className="mb-4 text-white lg:mb-8"
				>
					{heading1 || 'Need help deciding ?'}
				</Heading>
				{!heading2 && (
					<Heading variant={'medium'} size={'h5'} className="text-white">
						Talk to our <span className="text-green">Solution Experts</span> for
						free.
					</Heading>
				)}
				{heading2 && (
					<Heading variant={'medium'} size={'h5'} className="text-white">
						{heading2}
					</Heading>
				)}

				<Paragraph
					size={'default'}
					variant={'regular'}
					className="mt-4 text-white lg:mt-8"
				>
					{paragraph ||
						`We'll help you shortlist the best tools that fit your budget and
					business needs. Just fill in the form & we'll get back to you.`}
				</Paragraph>
			</div>
			<div className="lg:px-16 lg:col-span-5">
				<CtaForm
					btnConfig={{
						text: 'Get Free Advice',
						center: true,
						type: 'default',
						formId: `Get Free Advice ${categoryName}`,
					}}
				/>
			</div>
		</div>
	);
};

export default Cta;
