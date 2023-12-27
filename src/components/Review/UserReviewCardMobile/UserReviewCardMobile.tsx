import Description from '@/components/ui/Description/Description';
import Paragraph from '@/components/ui/Paragraph/Paragraph';
import Image from 'next/image';
import { FC } from 'react';
import styles from './UserReviewCardMobile.module.css';

interface UserReviewCardMobileProps {
	title: string;
	image: string;
	description: string;
}

const UserReviewCardMobile: FC<UserReviewCardMobileProps> = ({
	title,
	image,
	description,
}) => {
	return (
		<div className="flex flex-col gap-3">
			<div className={styles.image}>
				<Image src={image} alt={title} width={240} height={150} />
			</div>
			<Paragraph size={'lg'} variant={'semibold'} className="text-black">
				{title}
			</Paragraph>
			<div className="flex justify-start items-center">
				<span className={styles.commaStart}>"</span>
				<Description variant={'regular'} className="text-black" showLess={true}>
					{description}
				</Description>
				<span className={styles.commaEnd}>"</span>
			</div>
		</div>
	);
};

export default UserReviewCardMobile;
