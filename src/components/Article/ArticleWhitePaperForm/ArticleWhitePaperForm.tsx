'use client';
import Paragraph from '@/components/ui/Paragraph/Paragraph';
import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';
import { ArrowDownToLine } from 'lucide-react';
import Link from 'next/link';
import { FC, useState } from 'react';
import Button from '../../ui/Button/Button';
import Heading from '../../ui/Heading/Heading';
import Input from '../../ui/Input/Input';
import styles from './ArticleWhitePaperForm.module.css';

interface ArticleWhitePaperFormProps {}

const ArticleWhitePaperForm: FC<ArticleWhitePaperFormProps> = () => {
	const [isSubmitted, setIsSubmitted] = useState(false);
	const handleSubmit = () => {
		setIsSubmitted(true);

		setTimeout(() => {
			window.stop();
		}, 5000);
	};
	return (
		<div className={styles.form}>
			<Heading size={'h3'} variant={'semibold'} className="text-white">
				Download Whitepaper
			</Heading>
			<Heading size={'h5'} variant={'medium'} className="mt-2 text-green">
				Top Medical Software: Our Best 10 for 2023
			</Heading>
			<form id="Download" method="POST" onSubmit={handleSubmit}>
				<div className="grid grid-cols-1 gap-6 py-8 md:grid-cols-2">
					<Input placeholder="Name" type="text" className="" name="name" />
					<Input placeholder="Phone" type="text" className="" name="phone" />
					<Input placeholder="Email" type="email" className="" name="email" />
					<Input
						placeholder="Organization"
						type="text"
						className=""
						name="company"
					/>
				</div>
				<div style={{ display: 'flex', alignItems: 'center' }}>
					<Checkbox.Root className={styles.CheckboxRoot} id="c1" required>
						<Checkbox.Indicator className={styles.CheckboxIndicator}>
							<CheckIcon />
						</Checkbox.Indicator>
					</Checkbox.Root>
					<label className={styles.Label} htmlFor="c1">
						By clicking, you agree to our{' '}
						<Link
							className="underline"
							href="/terms-of-service"
							target="_blank"
						>
							{' '}
							Terms Of Use
						</Link>{' '}
						and{' '}
						<Link className="underline" href="/privacy-policy" target="_blank">
							{' '}
							Privacy Policy
						</Link>
						.
					</label>
				</div>
				{isSubmitted ? (
					<Paragraph className="text-white">
						We have received your contact information.
					</Paragraph>
				) : (
					<Button size={'lg'} variant={'green'} className="mt-8">
						<ArrowDownToLine size={20} />
						Download
					</Button>
				)}
			</form>
		</div>
	);
};

export default ArticleWhitePaperForm;
