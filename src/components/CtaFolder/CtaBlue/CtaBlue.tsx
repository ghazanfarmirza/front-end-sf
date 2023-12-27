import Heading from '@/components/ui/Heading/Heading';
import { FC } from 'react';
import IconHeadingLarge from '../../IconHeadingLarge/IconHeadingLarge';
import Paragraph from '../../ui/Paragraph/Paragraph';
import CtaForm from '../CtaForm/CtaForm';
import styles from './CtaBlue.module.css';

interface CtaBlueProps {
	category?: string;
}

const CtaBlue: FC<CtaBlueProps> = ({ category = '' }) => {
	return (
		<section className={styles.cta}>
			<div className="container">
				<div className="grid items-center grid-cols-12 gap-8 lg:gap-16">
					<div className="col-span-12 lg:col-span-8">
						{category ? (
							<Heading size={'h3'} variant={'semibold'} className="text-white">
								Feeling overwhelmed by all the {category} option listed?
							</Heading>
						) : (
							<IconHeadingLarge title="Message Us" icon="/images/message.svg" />
						)}
						<Paragraph size={'lg'} className="max-w-xl mt-8 text-white">
							{category
								? 'Don’t worry - we’re here to offer some quick, targeted Advice!'
								: 'If you’re not sure where to direct your query, please complete this form below and our team will get in touch with you.'}
						</Paragraph>
					</div>
					<div className="col-span-12 lg:col-span-4">
						<CtaForm
							btnConfig={{
								text: 'Get Free Advice',
								center: true,
								type: 'default',
								formId: `Get Free Advice ${category}`,
							}}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CtaBlue;
