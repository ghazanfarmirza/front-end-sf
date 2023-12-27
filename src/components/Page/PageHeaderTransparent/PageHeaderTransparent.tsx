import { FC } from 'react';
import Heading from '../../ui/Heading/Heading';
import styles from './PageHeaderTransparent.module.css';

interface PageHeaderTransparentProps {
	title: string;
}

const PageHeaderTransparent: FC<PageHeaderTransparentProps> = ({
	title,
}: PageHeaderTransparentProps) => {
	return (
		<div className="container">
			<div className={styles.header}>
				<Heading size={'h2'} variant={'bold'} className="text-black">
					{title}
				</Heading>
			</div>
		</div>
	);
};

export default PageHeaderTransparent;
