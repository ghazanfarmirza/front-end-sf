'use client';
import Paragraph from '@/components/ui/Paragraph/Paragraph';
import { ArrowDownToLine } from 'lucide-react';
import { FC, useState } from 'react';
import Button from '../../ui/Button/Button';
import Input from '../../ui/Input/Input';

interface CtaFormProps {
	btnConfig: {
		text: string;
		type: 'download' | 'default';
		center: boolean;
		formId?: string;
	};
}

const CtaForm: FC<CtaFormProps> = ({ btnConfig }) => {
	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleSubmit = () => {
		setIsSubmitted(true);

		setTimeout(() => {
			window.stop();
		}, 5000);
	};

	return (
		<form id={`${btnConfig.formId}`} method="POST" onSubmit={handleSubmit}>
			<div className="flex flex-col items-center justify-center mt-4">
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
				{btnConfig.type === 'download' && (
					<div
						className={`flex items-center ${
							btnConfig.center
								? 'justify-start lg:justify-center'
								: 'justify-start'
						} w-full`}
					>
						{isSubmitted ? (
							<Paragraph className="text-white mt-8">
								Thank you for your interest. We will be in touch shortly.
							</Paragraph>
						) : (
							<Button
								size={'default'}
								variant={'green'}
								className="mt-8 text-center"
							>
								<ArrowDownToLine size={20} />
								Download
							</Button>
						)}
					</div>
				)}
				{btnConfig.type === 'default' && (
					<div
						className={`flex items-center ${
							btnConfig.center
								? 'justify-start lg:justify-center'
								: 'justify-start'
						} w-full`}
					>
						{isSubmitted ? (
							<Paragraph className="text-white mt-8">
								Thank you for your interest. We will be in touch shortly.
							</Paragraph>
						) : (
							<Button
								size={'default'}
								variant={'green'}
								className="flex justify-center w-full mt-6 text-center lg:inline-block lg:w-auto "
							>
								Get Free Advice
							</Button>
						)}
					</div>
				)}
			</div>
		</form>
	);
};

export default CtaForm;
