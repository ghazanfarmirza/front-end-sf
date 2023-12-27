'use client';
import { FC, useState } from 'react';

import Button from '@/components/ui/Button/Button';
import Heading from '@/components/ui/Heading/Heading';
import Input from '@/components/ui/Input/Input';
import Paragraph from '@/components/ui/Paragraph/Paragraph';
import TextArea from '@/components/ui/TextArea/TextArea';
import styles from './LeadGenerationForm.module.css';

interface LeadGenerationFormProps {}

const LeadGenerationForm: FC<LeadGenerationFormProps> = () => {
	const [isSubmitted, setIsSubmitted] = useState(false);
	const handleSubmit = () => {
		setIsSubmitted(true);

		setTimeout(() => {
			window.stop();
		}, 5000);
	};

	return (
		<div className={styles.form_wrapper}>
			<Heading size={'h5'} variant={'medium'} className="text-white">
				Get in touch with us to learn more
			</Heading>
			<form id="Get Advice" method="POST" onSubmit={handleSubmit}>
				<div className="flex flex-col gap-4 mt-8">
					<Input placeholder="Name" type="text" name="name" />
					<Input placeholder="Phone" type="text" name="phone" />
					<Input placeholder="Email" type="email" name="email" />
					<Input placeholder="Organization" type="text" name="company" />
					<TextArea placeholder="Message" name="message" />
					<div className="flex items-center justify-start mt-2 lg:justify-center">
						{isSubmitted ? (
							<Paragraph className="text-white">
								Thank you for your interest. We will be in touch shortly.
							</Paragraph>
						) : (
							<Button size={'lg'} variant={'green'} type="submit">
								Get Advice
							</Button>
						)}
					</div>
				</div>
			</form>
		</div>
	);
};

export default LeadGenerationForm;
