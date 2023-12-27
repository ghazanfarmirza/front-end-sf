import ContactBox from '@/components/Contact/ContactBox/ContactBox';
import { FC } from 'react';
import styles from './ContactBoxWrapper.module.css';

interface ContactBoxWrapperProps {
	data: any;
}

const ContactBoxWrapper: FC<ContactBoxWrapperProps> = ({
	data,
}: ContactBoxWrapperProps) => {
	const contact_box = data;
	return (
		<section className={styles.wrapper}>
			<div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
				{contact_box.map((box: any) => (
					<ContactBox key={box.id} data={box} />
				))}
			</div>
		</section>
	);
};

export default ContactBoxWrapper;
