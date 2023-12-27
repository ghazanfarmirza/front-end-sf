'use client';
import { cn } from '@/lib/utils/utils';
import { ArrowDownToLine } from 'lucide-react';
import { FC, useState } from 'react';
import Button from '../ui/Button/Button';
import DownloadPricing from '../ui/Dialogs/DownloadPortfolio/DownloadPricing';
import Paragraph from '../ui/Paragraph/Paragraph';
import styles from './SubHeader.module.css';

interface SubHeaderProps {
	title: string;
	subCategory: string;
	link: string;
}

const SubHeader: FC<SubHeaderProps> = ({ title, link, subCategory: name }) => {
	const [activeModal, setActiveModal] = useState('');

	const openModal = (modalName: string) => {
		setActiveModal(modalName);
	};

	const closeModal = () => {
		setActiveModal('');
	};
	return (
		<div
			className={cn(
				styles.header,
				'flex flex-col text-center md:text-left md:flex-row gap-4 items-center justify-between'
			)}
		>
			<DownloadPricing
				subCategory={name}
				open={activeModal === 'softwareList'}
				onClose={closeModal}
				// pdfLink={link}
			/>
			<Paragraph variant={'semibold'} size={'lg'}>
				{title}
			</Paragraph>
			<Button
				variant={'green'}
				size={'default'}
				onClick={() => openModal('softwareList')}
			>
				<ArrowDownToLine size={'20'} />
				Download
			</Button>
		</div>
	);
};

export default SubHeader;
