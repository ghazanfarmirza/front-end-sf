import { cn } from '@/lib/utils/utils';
import { FC } from 'react';

import Paragraph from '@/components/ui/Paragraph/Paragraph';
import styles from './NumberBox.module.css';

interface NumberBoxProps {
	data: {
		number: number;
		title: string;
		desc: string;
	};
}

const NumberBox: FC<NumberBoxProps> = ({ data }) => {
	return (
		<div className={styles.numberBox}>
			<h3>{data.number}</h3>
			<div className={cn(styles.box, 'flex flex-col gap-4')}>
				<Paragraph size={'lg'} variant={'bold'} className="text-dark-blue">
					{data.title}
				</Paragraph>
				<Paragraph className="text-black">{data.desc}</Paragraph>
			</div>
		</div>
	);
};

export default NumberBox;
