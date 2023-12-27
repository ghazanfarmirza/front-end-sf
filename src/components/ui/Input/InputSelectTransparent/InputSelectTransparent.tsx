import { cn } from '@/lib/utils/utils';
import { FC } from 'react';
import styles from './InputSelectTransparent.module.css';

interface InputSelectTransparentProps {
	className?: string;
	type: string;
	options: string[];
	onSelect?: (newValue: any) => void;
}

const InputSelectTransparent: FC<InputSelectTransparentProps> = ({
	options,
	type,
	className,
	onSelect,
}) => {
	const handleSelectChange = (newValue: any) => {
		if (onSelect) onSelect(newValue);
	};
	return (
		<select
			name={type}
			className={cn(styles.select, className)}
			onSelect={handleSelectChange}
		>
			<option value="">Select your {type}</option>
			{options.map((item) => (
				<option value={item} key={item}>
					{item}
				</option>
			))}
		</select>
	);
};

export default InputSelectTransparent;
