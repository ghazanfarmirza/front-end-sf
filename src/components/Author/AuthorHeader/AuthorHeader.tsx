import Image from 'next/image';
import { FC } from 'react';
import Heading from '../../ui/Heading/Heading';
import Paragraph from '../../ui/Paragraph/Paragraph';
import styles from './AuthorHeader.module.css';

interface AuthorHeaderProps {
	name: string;
	avatar: string;
	bio: string;
	jobTitle: string;
}

const AuthorHeader: FC<AuthorHeaderProps> = ({
	name,
	avatar,
	bio,
	jobTitle,
}) => {
	return (
		<section>
			<div className="flex flex-col items-start justify-start gap-8 md:items-center md:flex-row">
				<div className={styles.img_thumb}>
					<Image
						src={
							(avatar && process.env.NEXT_PUBLIC_STRAPI_IMAGE_URL + avatar) ||
							'/images/user-thumb.png'
						}
						alt="user-img"
						width={170}
						height={170}
					/>
				</div>
				<div>
					<Heading size={'h3'} variant={'semibold'} className="text-black">
						{name}
					</Heading>
					<Paragraph className="mt-2 text-grey">
						{jobTitle || 'Senior Software Consultant, Software Finder'}
					</Paragraph>
				</div>
			</div>
			<Paragraph className="mt-8 lg:mt-12">
				{bio ||
					`Experienced Software Expert with a demonstrated history of working in
				the information technology and services industry. Skilled in
				Communication, English, Project Management, Training, and Research.
				Strong engineering professional with a BBA focused in Economics from
				University of Toronto and then an MBA at Schulich School of Business at
				York University.`}
			</Paragraph>
		</section>
	);
};

export default AuthorHeader;
