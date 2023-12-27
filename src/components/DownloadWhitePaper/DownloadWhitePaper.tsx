import { FC } from 'react';
import CtaForm from '../CtaFolder/CtaForm/CtaForm';
import Heading from '../ui/Heading/Heading';
import Paragraph from '../ui/Paragraph/Paragraph';
import styles from './DownloadWhitePaper.module.css';

interface DownloadWhitePaperProps {
	formHeading?: string;
	formSubHeading?: string;
	title?: string;
}

const DownloadWhitePaper: FC<DownloadWhitePaperProps> = ({
	title,
	formHeading,
	formSubHeading,
}) => {
	return (
		<div className={styles.wrapper}>
			<Heading size={'h5'} variant={'medium'} className="text-white">
				{formHeading || 'Download Whitepaper'}
			</Heading>
			<Paragraph size={'small'} variant={'regular'} className="pt-4 text-white">
				{formSubHeading}
			</Paragraph>
			<CtaForm
				btnConfig={{
					text: 'Download',
					type: 'download',
					center: false,
					formId: title,
				}}
			/>
		</div>
	);
};

export default DownloadWhitePaper;
