import { FC } from 'react';
import styles from './TextArea.module.css';

interface TextAreaProps {
	placeholder: string;
	name?: string;
}

const TextArea: FC<TextAreaProps> = ({ placeholder, name }) => {
	return (
		<textarea
			placeholder={placeholder}
			className={styles.textarea}
			name={name}
			id={name}
			required
		></textarea>
	);
};

export default TextArea;
