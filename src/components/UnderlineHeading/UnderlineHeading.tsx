import { FC } from 'react';
import Heading from '../ui/Heading/Heading';
import styles from './UnderlineHeading.module.css';

interface UnderlineHeadingProps {
	title: string;
}

const UnderlineHeading: FC<UnderlineHeadingProps> = ({ title }) => {
	return (
		<div className={styles.heading}>
			<Heading variant={'medium'} size={'h5'}>
				{title}
			</Heading>
		</div>
	);
};

export default UnderlineHeading;
