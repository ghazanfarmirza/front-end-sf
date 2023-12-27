import RightArrowLink from '@/components/ui/Link/RightArrowLink/RightArrowLink';
import Paragraph from '@/components/ui/Paragraph/Paragraph';
import { cn } from '@/lib/utils/utils';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import styles from './RecommendedArticleBoxMobile.module.css';

interface RecommendedArticleBoxMobileProps {
	id: number;
	title: string;
	image_url: string;
	slug: string;
}

const RecommendedArticleBoxMobile: FC<RecommendedArticleBoxMobileProps> = ({
	title,
	image_url: image,
	slug,
}) => {
	return (
		<div
			className={cn(
				styles.box,
				'flex flex-col items-start justify-center w-full'
			)}
		>
			<Link prefetch={false} href={`/resources/${slug}`} passHref>
				<div className={styles.image}>
					<Image
						src={process.env.NEXT_PUBLIC_DIGITAL_OCEAN_IMAGE_URL + image}
						alt={title}
						width={345}
						height={220}
					/>
				</div>
				<Paragraph
					size={'lg'}
					variant={'medium'}
					className={'py-6 ' + styles.title}
				>
					{title}
				</Paragraph>
			</Link>
			<RightArrowLink link={`/resources/${slug}`} title="Read More" />
		</div>
	);
};

export default RecommendedArticleBoxMobile;
