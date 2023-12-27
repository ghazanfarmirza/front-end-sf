import Heading from '@/components/ui/Heading/Heading';
import Paragraph from '@/components/ui/Paragraph/Paragraph';
import { FC } from 'react';
import styles from './ContactHeader.module.css';

interface ContactHeaderProps {
	data: any;
}

const ContactHeader: FC<ContactHeaderProps> = ({
	data,
}: ContactHeaderProps) => {
	const { ['Heading']: heading, paragraph } = data;
	return (
		<div className={styles.header}>
			<div className="container">
				<Heading size={'h1'} variant={'bold'} className="text-3xl lg:text-4xl">
					{heading}
				</Heading>
				<Paragraph size={'lg'} variant={'regular'} className="mt-4">
					{paragraph}
				</Paragraph>
			</div>
		</div>
	);
};

export default ContactHeader;
