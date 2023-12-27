import Image from 'next/image';
import { FC } from 'react';
import Paragraph from '../ui/Paragraph/Paragraph';
import styles from './UserReviewCard.module.css';

interface UserReviewCardProps {
	title: string;
	image: string;
}

const UserReviewCard: FC<UserReviewCardProps> = ({ title, image }) => {
	return (
		<div>
			<div className={styles.image}>
				<Image src={image} alt={title} width={240} height={150} />
			</div>
			<Paragraph size={'lg'} variant={'semibold'} className="mt-3 text-black">
				{title}
			</Paragraph>
		</div>
	);
};

export default UserReviewCard;
