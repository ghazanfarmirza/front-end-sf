import { FC } from 'react';
import Heading from '../../ui/Heading/Heading';
import Paragraph from '../../ui/Paragraph/Paragraph';

interface WebinarDescriptionSectionProps {
	data: {
		description_heading: string;
		description_heading_green: string;
		description_heading2: string;
		description_text: string;
	};
}

const WebinarDescriptionSection: FC<WebinarDescriptionSectionProps> = ({
	data,
}) => {
	return (
		<section className="py-16 lg:py-24">
			<div className="container">
				<div className="max-w-4xl mx-auto text-left lg:text-center">
					<Heading size={'h3'} variant={'medium'} className="text-dark-blue">
						{data.description_heading}
						<span className="font-semibold text-green">
							{data.description_heading_green}
						</span>
						{data.description_heading2}
					</Heading>
					<Paragraph className="mt-5 text-black lg:mt-10">
						{data.description_text}
					</Paragraph>
				</div>
			</div>
		</section>
	);
};

export default WebinarDescriptionSection;
