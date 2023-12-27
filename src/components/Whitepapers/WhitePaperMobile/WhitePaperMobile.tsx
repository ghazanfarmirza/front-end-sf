import Heading from '@/components/ui/Heading/Heading';
import Paragraph from '@/components/ui/Paragraph/Paragraph';
import { cn } from '@/lib/utils/utils';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import styles from './WhitePaperMobile.module.css';

interface WhitePaperMobileProps {
	title: string;
	desc: string;
	image: string;
}

const WhitePaperMobile: FC<WhitePaperMobileProps> = ({
	image,
	title,
	desc,
}) => {
	return (
		<div className={cn(styles.whitepaper, 'flex flex-col gap-6')}>
			<div className="flex items-center justify-center h-60">
				<Image
					src={image}
					alt={title}
					width={245}
					height={245}
					className="mx-auto"
				/>
			</div>
			<div>
				<Heading
					size={'h4'}
					variant={'semibold'}
					className={cn('text-dark-blue', styles.twoLineEllipsis)}
				>
					{title}
				</Heading>
				<Paragraph
					size={'default'}
					variant={'regular'}
					className={cn(
						'max-w-xl mt-4 text-dark-blue',
						styles.fourLineEllipsis
					)}
				>
					{desc}
				</Paragraph>
			</div>
			<Link
				prefetch={false}
				href="#"
				className="flex items-center gap-2 text-base font-semibold text-green link-text"
			>
				Read More
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

export default WhitePaperMobile;
