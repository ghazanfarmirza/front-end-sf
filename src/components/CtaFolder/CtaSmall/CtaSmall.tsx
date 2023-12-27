'use client';
import GetPricing from '@/components/ui/Dialogs/GetPricing/GetPricing';
import { cn } from '@/lib/utils/utils';
import Image from 'next/image';
import { FC, useState } from 'react';
import Button from '../../ui/Button/Button';
import Heading from '../../ui/Heading/Heading';
import Paragraph from '../../ui/Paragraph/Paragraph';
import styles from './CtaSmall.module.css';

interface CtaSmallProps {
	pdfLink?: string;
}

const CtaSmall: FC<CtaSmallProps> = ({ pdfLink }) => {
	const [activeModal, setActiveModal] = useState('');

	const openModal = (modalName: string) => {
		setActiveModal(modalName);
	};

	const closeModal = () => {
		setActiveModal('');
	};
	return (
		<section>
			<GetPricing
				open={activeModal === 'pricing'}
				onClose={closeModal}
				// pdfLink={pdfLink}
			/>
			<div className="container">
				<div
					className={cn(
						styles.cta,
						'flex  flex-col gap-8 lg:gap-0 lg:grid grid-cols-12 items-center'
					)}
				>
					<div className="lg:col-span-6">
						<Heading size={'h3'} variant={'semibold'} className="text-white">
							Get <span className="text-green">Pricing Guide</span> 2023
						</Heading>
						<Paragraph size={'lg'} className="mt-4 text-white">
							Get custom pricing for an ideal software suitable for your
							business or practice.
						</Paragraph>
					</div>
					<div className="hidden lg:col-span-4 lg:block ">
						<Image
							src={'/images/arrow-cta.svg'}
							alt="cta-arrow"
							width={330}
							height={50}
						/>
					</div>
					<div className="flex items-center justify-start w-full lg:col-span-2 lg:justify-end">
						<Button
							variant={'green'}
							size={'default'}
							onClick={() => openModal('pricing')}
						>
							Pricing Guide
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CtaSmall;
