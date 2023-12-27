import Link from 'next/link';
import { FC } from 'react';
import Heading from '../../ui/Heading/Heading';
import Paragraph from '../../ui/Paragraph/Paragraph';
import styles from './VendorProgramBox.module.css';

interface VendorProgramBoxProps {
	title: string;
	desc: string;
}

const VendorProgramBox: FC<VendorProgramBoxProps> = ({ title, desc }) => {
	return (
		<Link prefetch={false} href="#" className={styles.vendor}>
			<Heading size={'h5'} variant={'semibold'} className="w-48 text-white">
				{title}
			</Heading>
			<Paragraph size={'default'} variant={'regular'}>
				{desc}
			</Paragraph>
		</Link>
	);
};

export default VendorProgramBox;
