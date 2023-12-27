import Description from '@/components/ui/Description/Description';
import Image from 'next/image';
import { FC } from 'react';
import styles from './ContactBox.module.css';

interface ContactBoxProps {
	data: {
		id: number;
		title: string;
		image: any;
		text1: string;
		text2: string;
	};
}

const ContactBox: FC<ContactBoxProps> = ({ data }: ContactBoxProps) => {
	return (
		<div className={styles.box}>
			<Image
				src={data?.image?.data?.attributes?.url}
				alt={data.title}
				width={48}
				height={48}
			/>
			<Description variant={'medium'} className="text-green mt-9 text-xl">
				{data.title}
			</Description>
			<Description
				size={'default'}
				variant={'regular'}
				className="py-8 text-black"
			>
				{data.text1}
			</Description>
			<Description size={'default'} variant={'regular'} className="text-black">
				{data.text2}
			</Description>
		</div>
	);
};

export default ContactBox;
