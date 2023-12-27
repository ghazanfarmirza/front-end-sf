'use client';
import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';
import { FC } from 'react';
import Paragraph from '../../ui/Paragraph/Paragraph';
import styles from './FilterBox.module.css';

interface FilterBoxProps {
	data: {
		id: number;
		title: string;
		list: string[];
	};
}

const FilterBox: FC<FilterBoxProps> = ({ data }) => {
	return (
		<div className={styles.filter}>
			<Paragraph className="text-black" variant={'semibold'}>
				{data.title}
			</Paragraph>
			<div className="flex flex-col gap-3 mt-4">
				{data.list.map((checkList) => (
					<div key={checkList} className="flex items-center gap-4">
						<Checkbox.Root className={styles.CheckboxRoot} id={checkList}>
							<Checkbox.Indicator className={styles.CheckboxIndicator}>
								<CheckIcon />
							</Checkbox.Indicator>
						</Checkbox.Root>
						<label className={styles.Label} htmlFor={checkList}>
							{checkList}
						</label>
					</div>
				))}
			</div>
		</div>
	);
};

export default FilterBox;
