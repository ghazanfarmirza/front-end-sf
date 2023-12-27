import { cn } from '@/lib/utils/utils';
import { FC } from 'react';
import styles from './InputSelect.module.css';

interface InputSelectProps {
	className?: string;
	type: string;
	options: string[];
}

const InputSelect: FC<InputSelectProps> = ({ className, type, options }) => {
	return (
		<select name={type} className={cn(styles.select, className)}>
			<option value="">Select your {type}</option>
			{options.map((item) => (
				<option value={item} key={item}>
					{item}
				</option>
			))}
		</select>
	);
};

export default InputSelect;
