import * as RadioGroup from '@radix-ui/react-radio-group';
import { FC, useState } from 'react';
import styles from './InputRadio.module.css';

interface InputRadioProps {
	item: string;

	onRadioSelect: (newValue: any) => void;
}

const InputRadio: FC<InputRadioProps> = ({ item, onRadioSelect }) => {
	const [radioValue, setRadioValue] = useState<any>('default');

	const handleRadioChange = (newValue: any) => {
		setRadioValue(newValue);
		onRadioSelect(newValue);
	};
	return (
		<>
			<div className={styles.box}>
				<RadioGroup.Item
					className={styles.RadioGroupItem}
					value="default"
					id={item}
					onClick={handleRadioChange}
				>
					<RadioGroup.Indicator className={styles.RadioGroupIndicator} />
				</RadioGroup.Item>
				<label className={styles.Label} htmlFor={item}>
					{item}
				</label>
			</div>
		</>
	);
};

export default InputRadio;
