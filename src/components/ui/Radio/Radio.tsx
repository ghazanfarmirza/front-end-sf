'use client';
import * as RadioGroup from '@radix-ui/react-radio-group';
import { FC, useState } from 'react';
import InputRadio from '../Input/InputRadio/InputRadio';
import styles from './Radio.module.css';

interface RadioProps {
	items: string[];
	onRadioSelect?: (newValue: any) => void;
}

const Radio: FC<RadioProps> = ({ items, onRadioSelect }) => {
	const [radioValue, setRadioValue] = useState<any>('');

	const handleRadioChange = (newValue: any) => {
		setRadioValue(newValue);
		if (onRadioSelect) onRadioSelect(newValue);
	};

	return (
		<RadioGroup.Root
			className={styles.RadioGroupRoot}
			defaultValue="default"
			aria-label="View density"
		>
			{items.map((item) => (
				<InputRadio
					key={item}
					item={item}
					onRadioSelect={() => handleRadioChange(item)}
				/>
			))}
		</RadioGroup.Root>
	);
};

export default Radio;
