import Description from '@/components/ui/Description/Description';
import { FC } from 'react';
import Paragraph from '../../ui/Paragraph/Paragraph';
import styles from './ContactListBox.module.css';

interface ContactListBoxProps {
	list: {
		id: number;
		title: string;
		desc: string;
	};
}

const ContactListBox: FC<ContactListBoxProps> = ({ list }) => {
	return (
		<li className={styles.item}>
			<Paragraph size={'lg'} variant={'semibold'} className="text-black mb-4">
				{list.title}:
			</Paragraph>
			<Description className=" text-black opacity-50">{list.desc}</Description>
		</li>
	);
};

export default ContactListBox;
