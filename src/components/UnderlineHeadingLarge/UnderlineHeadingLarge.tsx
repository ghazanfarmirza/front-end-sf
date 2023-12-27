import { FC } from 'react';
import Heading from '../ui/Heading/Heading';
import styles from './UnderlineHeadingLarge.module.css';

interface UnderlineHeadingLargeProps {
	title: string;
}

const UnderlineHeadingLarge: FC<UnderlineHeadingLargeProps> = ({ title }) => {
	return (
		<div className={styles.heading}>
			<Heading variant={'semibold'} size={'h3'} className="text-black">
				{title}
			</Heading>
		</div>
	);
};

export default UnderlineHeadingLarge;
