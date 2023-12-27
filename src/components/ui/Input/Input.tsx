import { FC } from 'react';
import styles from './Input.module.css';

interface InputProps {
	type: string;
	placeholder: string;
	className?: string;
	name?: string;
}

const Input: FC<InputProps> = ({ type, placeholder, className, name }) => {
	return (
		<input
			className={styles.input + ' ' + className}
			type={type}
			placeholder={placeholder}
			name={name}
			id={name}
			required
		/>
	);
};

export default Input;
