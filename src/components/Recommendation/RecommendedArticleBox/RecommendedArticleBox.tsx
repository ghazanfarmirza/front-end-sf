import Image from 'next/image';
import { FC } from 'react';
import Paragraph from '../../ui/Paragraph/Paragraph';
import styles from './RecommendedArticleBox.module.css';

interface RecommendedArticleBoxProps {
	id: number;
	title: string;
	image_url: string;
}

const RecommendedArticleBox: FC<RecommendedArticleBoxProps> = ({
	title,
	image_url: image,
}) => {
	return (
		<div
			className={'flex flex-col items-start justify-center' + styles.imageBox}
		>
			<div className={styles.image}>
				<Image
					src={process.env.NEXT_PUBLIC_DIGITAL_OCEAN_IMAGE_URL + image}
					alt={title}
					width={345}
					height={220}
				/>
			</div>
			<Paragraph size={'lg'} variant={'medium'} className="mt-6">
				{title}
			</Paragraph>
		</div>
	);
};

export default RecommendedArticleBox;
