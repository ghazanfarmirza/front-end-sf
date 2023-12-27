import { FC } from 'react';
import styles from './InputTransparent.module.css';

interface InputTransparentProps {
	type: string;
	placeholder: string;
	className?: string;
}

const InputTransparent: FC<InputTransparentProps> = ({
	type,
	placeholder,
	className,
}) => {
	return (
		<input
			className={styles.input + ' ' + className}
			type={type}
			placeholder={placeholder}
		/>
	);
};

export default InputTransparent;
