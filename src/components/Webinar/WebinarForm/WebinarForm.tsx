import { FC, useState } from 'react';
import Button from '../../ui/Button/Button';
import Heading from '../../ui/Heading/Heading';
import Input from '../../ui/Input/Input';
import Paragraph from '../../ui/Paragraph/Paragraph';

interface WebinarFormProps {
	heading_form_page: string;
	heading_green_form_page: string;
	form_heading_1: string;
	form_heading_2: string;
}

const WebinarForm: FC<WebinarFormProps> = ({
	heading_form_page,
	heading_green_form_page,
	form_heading_1,
	form_heading_2,
}) => {
	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleSubmit = () => {
		setIsSubmitted(true);

		setTimeout(() => {
			window.stop();
		}, 5000);
	};

	return (
		<div>
			<Heading
				size={'h1'}
				variant={'semibold'}
				className="text-white text-2xl lg:text-3xl"
			>
				{heading_form_page}
				<span className="text-green">{heading_green_form_page}</span>
			</Heading>
			<Paragraph size={'md'} variant={'regular'} className="py-6 text-white">
				<span className="font-semibold">{form_heading_1}</span> {form_heading_2}
			</Paragraph>
			<form id="Webinar" method="POST" onSubmit={handleSubmit}>
				<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
					<Input className="w-full" type="text" placeholder="Name" />
					<Input className="w-full" type="phone" placeholder="Phone" />
					<Input className="w-full" type="email" placeholder="Email" />
					<Input className="w-full" type="text" placeholder="Organization" />
				</div>
				{isSubmitted ? (
					<Paragraph className="text-white">
						Thank you for your interest. We will be in touch shortly.
					</Paragraph>
				) : (
					<Button size={'lg'} variant={'green'} className="mt-6">
						Watch Now
					</Button>
				)}
			</form>
		</div>
	);
};

export default WebinarForm;
