import { cn } from '@/lib/utils/utils';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import Arrow from '../../../../../public/images/right-arrow.svg';
import styles from './RightArrowLink.module.css';

interface RightArrowProps {
	link: string;
	title: string;
	variant?: 'small';
}

const RightArrowLink: FC<RightArrowProps> = ({ title, link, variant }) => {
	return (
		<Link
			prefetch={false}
			href={link}
			className={cn(variant === 'small' ? styles.small : styles.link)}
			passHref
		>
			{title}
			<Image src={Arrow} alt="right-arrow" />
		</Link>
	);
};

export default RightArrowLink;
