import { FC } from 'react';
import Heading from '../../ui/Heading/Heading';
import Paragraph from '../../ui/Paragraph/Paragraph';
import styles from './ContentHeader.module.css';

interface ContentHeaderProps {
	title: string;
	text: string;
}

const ContentHeader: FC<ContentHeaderProps> = ({ text }) => {
	return (
		<div className={styles.header}>
			<div className="container">
				<Heading
					size={'h1'}
					variant={'bold'}
					className="text-white text-3xl lg:text-4xl"
				>
					Start Your <span className="text-green"> Software Search </span> with
					Software Finder
				</Heading>
				<Paragraph size={'lg'} variant={'regular'} className="mt-4 text-white">
					{text}
				</Paragraph>
			</div>
		</div>
	);
};

export default ContentHeader;
