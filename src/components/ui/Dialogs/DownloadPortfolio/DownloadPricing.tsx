'use client';
import { cn } from '@/lib/utils/utils';
import * as Checkbox from '@radix-ui/react-checkbox';
import * as Dialog from '@radix-ui/react-dialog';
import { CheckIcon, Cross2Icon } from '@radix-ui/react-icons';
import Image from 'next/image';
import { FC, useEffect, useState } from 'react';
import Button from '../../Button/Button';
import Input from '../../Input/Input';
import Paragraph from '../../Paragraph/Paragraph';
import styles from './DownloadPortfolio.module.css';
interface DownloadPortfolioProps {
	open: boolean;
	onClose: () => void;
	subCategory: string;
	pdfLink?: string;
}

const DownloadPricing: FC<DownloadPortfolioProps> = ({
	open,
	onClose,
	subCategory,
	pdfLink,
}) => {
	const [isClient, setIsClient] = useState(false);
	useEffect(() => {
		setIsClient(true);
	}, []);

	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleSubmit = () => {
		setIsSubmitted(true);
		// open a pdf in new tab
		if (pdfLink) {
			window.open(pdfLink, '_blank');
			return;
		}

		setTimeout(() => {
			window.stop();
		}, 5000);
	};
	return (
		<Dialog.Root open={open}>
			{isClient && (
				<Dialog.Portal>
					<Dialog.Overlay className={styles.DialogOverlay} />
					<Dialog.Content className={styles.DialogContent}>
						<div className="grid grid-cols-1 lg:grid-cols-2">
							<div className={cn(styles.left, 'hidden lg:block')}>
								<Paragraph
									variant={'medium'}
									className="mb-10 text-black text-2xl"
								>
									Download <span className="text-green"> {subCategory}</span>{' '}
									List.
								</Paragraph>
								<Image
									src={'/images/Portfolio.png'}
									width={250}
									height={320}
									alt="pricing"
									className="mx-auto main-Image-popup"
								/>
							</div>
							<div className={styles.right}>
								<Paragraph className="text-white">
									Hidden <span className="text-green">charges</span>,
									implementation fees, long term costs? Get the complete picture
									from us to simplify your software selection.
								</Paragraph>
								<form
									id="download-portfolio"
									method="POST"
									onSubmit={handleSubmit}
								>
									<div className="flex flex-col items-center justify-center mt-8">
										<Input
											className="w-full mb-4"
											type="text"
											placeholder="Name"
											name="name"
										/>
										<Input
											className="w-full mb-4"
											type="phone"
											placeholder="Phone"
											name="phone"
										/>
										<Input
											className="w-full mb-4"
											type="email"
											placeholder="Email"
											name="email"
										/>
										<Input
											className="w-full"
											type="text"
											placeholder="Organization"
											name="company"
										/>
										<div className="grid grid-cols-12 gap-2 mt-6">
											<Checkbox.Root
												className={cn(styles.CheckboxRoot, 'col-span-1')}
												id="c1"
												required
											>
												<Checkbox.Indicator
													className={styles.CheckboxIndicator}
												>
													<CheckIcon />
												</Checkbox.Indicator>
											</Checkbox.Root>
											<label
												className={cn(styles.Label, 'col-span-11 text-white')}
												htmlFor="c1"
											>
												I agree to receive promotional message sent via an
												autodialer, and this agreement isn’t a condition of any
												purchase. I also agree to the
												<span className="text-green">
													{' '}
													Terms of Service
												</span>{' '}
												and
												<span className="text-green"> Privacy Policy</span>.
											</label>
										</div>
										<div className="flex items-center justify-start w-full mt-6">
											{isSubmitted ? (
												<Paragraph className="text-white">
													Thank you for downloading the portfolio. Please check
													your email.
												</Paragraph>
											) : (
												<Button size={'default'} variant={'green'}>
													Download List
												</Button>
											)}
										</div>
									</div>
								</form>
							</div>
						</div>
						<Dialog.Close asChild>
							<button
								className={styles.IconButton}
								aria-label="Close"
								onClick={onClose}
							>
								<Cross2Icon />
							</button>
						</Dialog.Close>
					</Dialog.Content>
				</Dialog.Portal>
			)}
		</Dialog.Root>
	);
};

export default DownloadPricing;
