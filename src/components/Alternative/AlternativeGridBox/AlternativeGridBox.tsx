import Description from '@/components/ui/Description/Description';
import Rating from '@/components/ui/Rating/Rating';
import { calculateRatingStatistics } from '@/lib/utils/ratingstats';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import RightArrowLink from '../../ui/Link/RightArrowLink/RightArrowLink';
import Paragraph from '../../ui/Paragraph/Paragraph';
import styles from './AlternativeGridBox.module.css';

interface AlternativeGridBoxProps {
	title: string;
	desc: string;
	rating: any;
	image: string;
	link: string;
}

const AlternativeGridBox: FC<AlternativeGridBoxProps> = ({
	title,
	desc,
	rating,
	image,
	link,
}) => {
	const averageRating = calculateRatingStatistics(rating)?.averageRating;
	return (
		<div className="flex flex-col gap-4">
			<Link prefetch={false} href={link}>
				<div className={styles.img}>
					<Image src={image} alt={title} width={250} height={150} />
				</div>
				<Rating rating={averageRating} size={22} />
				<Paragraph size={'lg'} variant={'semibold'} className="text-black">
					{title}
				</Paragraph>
			</Link>
			<Description className="text-black text-small" showLess={true}>
				{desc}
			</Description>
			<RightArrowLink link={link} title="Read More" />
		</div>
	);
};

export default AlternativeGridBox;
