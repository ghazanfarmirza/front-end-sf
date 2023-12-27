import { cn } from '@/lib/utils/utils';
import { FC } from 'react';
import styles from './InputTextArea.module.css';

interface InputTextAreaProps {
	className?: string;
	placeholder: string;
}

const InputTextArea: FC<InputTextAreaProps> = ({ className, placeholder }) => {
	return (
		<textarea
			className={cn(styles.input, className)}
			placeholder={placeholder}
		></textarea>
	);
};

export default InputTextArea;
