import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import Heading from '../../ui/Heading/Heading';
import Paragraph from '../../ui/Paragraph/Paragraph';
import Arrow from './../../../../public/images/right-black-arrow.svg';
import styles from './AboutServeBox.module.css';

interface AboutServeBoxProps {
	data: {
		id: number;
		icon: any;
		heading: string;
		text: string;
		link_text: string;
		link: string;
		link_icon: string;
	};
}

const AboutServeBox: FC<AboutServeBoxProps> = ({ data }) => {
	return (
		<div className={styles.box}>
			<div className="flex items-center gap-4">
				<Image
					width={45}
					height={45}
					src={data?.icon?.data?.attributes?.url}
					alt={data.text}
				/>
				<Heading variant={'semibold'} size={'h5'} className="text-black">
					{data.heading}
				</Heading>
			</div>
			<Paragraph className="py-5 text-black">{data.text}</Paragraph>
			<Link
				prefetch={false}
				href={data.link || '#'}
				className="flex items-center gap-4 font-semibold active:text-black"
			>
				{data.link_text}
				<Image src={Arrow} alt="right-arrow" />
			</Link>
		</div>
	);
};

export default AboutServeBox;
