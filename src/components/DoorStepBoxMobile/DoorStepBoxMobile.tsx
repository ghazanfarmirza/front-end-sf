import { FC } from 'react';
import Paragraph from '../ui/Paragraph/Paragraph';
import styles from './DoorStepBoxMobile.module.css';

interface DoorStepBoxMobileProps {
	title: string;
	desc: string;
	boxNumber: number;
}

const DoorStepBoxMobile: FC<DoorStepBoxMobileProps> = ({
	title,
	desc,
	boxNumber,
}) => {
	return (
		<div className={'flex flex-col gap-4'}>
			<div className={styles.box}>{boxNumber}</div>
			<Paragraph size={'lg'} variant={'bold'} className="text-green">
				{title}
			</Paragraph>
			<Paragraph className="text-black ">{desc}</Paragraph>
		</div>
	);
};

export default DoorStepBoxMobile;
