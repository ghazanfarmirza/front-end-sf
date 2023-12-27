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
import styles from './FreeDemo.module.css';

interface FreeDemoProps {
	open: boolean;
	onClose: () => void;
	videoId: string;
	vendor?: {
		name: string;
		image: string;
	};
	type?: string;
}

const FreeDemo: FC<FreeDemoProps> = ({
	open,
	onClose,
	videoId,
	vendor,
	type,
}) => {
	const [isClient, setIsClient] = useState(false);
	useEffect(() => {
		setIsClient(true);
	}, []);
	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleSubmit = () => {
		setIsSubmitted(true);
		const thankYouPageUrl = `/thank-you?type=demo${
			videoId && `&videoId=${videoId}`
		}`;
		window.open(thankYouPageUrl, '_blank');

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
								<Image
									src={vendor?.image || '/images/athenahealth.svg'}
									alt="hero"
									width={300}
									height={40}
									className="main-Image-popup mx-auto"
								/>
								<Paragraph
									size={'lg'}
									variant={'medium'}
									className="mb-8 text-black"
								>
									Get <span className="font-semibold text-green">Pricing </span>
									for {vendor?.name || 'Athenahealth'}
								</Paragraph>
								<Image
									src={'/images/laptop_demo.png'}
									width={500}
									height={330}
									alt="pricing"
									className="mx-auto"
								/>
							</div>
							<div className={styles.right}>
								<Paragraph className="text-white">
									Hidden <span className="text-green">charges</span>,
									implementation fees, long term costs? Get the complete picture
									from us to simplify your software selection.
								</Paragraph>
								<form
									id={`Watch Demo ${vendor?.name}`}
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
													We have received your contact information.
												</Paragraph>
											) : (
												<Button size={'default'} variant={'green'}>
													{type == 'service'
														? 'Request Free Demo'
														: 'Download Portfolio'}
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

export default FreeDemo;
