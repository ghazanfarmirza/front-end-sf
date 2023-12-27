import { cn } from '@/lib/utils/utils';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import Heading from '../../ui/Heading/Heading';
import Paragraph from '../../ui/Paragraph/Paragraph';
import styles from './Whitepaper.module.css';

interface WhitepaperProps {
	title: string;
	desc: string;
	image: string;
	link: string;
}

const Whitepaper: FC<WhitepaperProps> = ({ image, title, desc, link }) => {
	return (
		<div
			className={cn(
				styles.whitepaper,
				'grid grid-cols-12 gap-6 items-center w-full'
			)}
		>
			<div className="flex items-center justify-center col-span-4 h-60">
				<Image
					src={image}
					alt={title}
					width={245}
					height={245}
					className="mx-auto"
				/>
			</div>
			<div className="col-span-7">
				<Heading size={'h4'} variant={'semibold'} className="text-dark-blue">
					{title}
				</Heading>
				<Paragraph
					size={'default'}
					variant={'regular'}
					className="max-w-xl mt-4 text-dark-blue"
				>
					{desc}
				</Paragraph>
			</div>
			<Link
				prefetch={false}
				href={link}
				className="flex items-center gap-2 text-base font-semibold text-green link-text"
			>
				Read More{' '}
				<Image
					src="/images/icon-left-arrow.svg"
					alt="arrow-right"
					width={24}
					height={10}
					className="rotate-180 translate-x-0 translate-y-0"
				/>
			</Link>
		</div>
	);
};

export default Whitepaper;
