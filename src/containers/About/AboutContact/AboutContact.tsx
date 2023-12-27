import AboutContactBox from '@/components/About/AboutContactBox/AboutContactBox';
import Heading from '@/components/ui/Heading/Heading';
import Paragraph from '@/components/ui/Paragraph/Paragraph';
import { FC } from 'react';

interface AboutContactProps {
	data: any;
}

const AboutContact: FC<AboutContactProps> = ({ data }: AboutContactProps) => {
	const { title, title_bold, description, about_contact_box } = data;
	return (
		<section className="mb-16 md:mb-24">
			<div className="container">
				<Heading
					size={'h3'}
					variant={'semibold'}
					className="text-left text-black lg:text-center"
				>
					{' '}
					{title}
					<span className="text-green"> {title_bold}.</span>
				</Heading>
				<Paragraph className="mt-4 text-left text-black lg:text-center">
					{description}
				</Paragraph>
				<div className="grid grid-cols-1 gap-16 mt-16 md:grid-cols-2 lg:grid-cols-3">
					{about_contact_box.map((box: any) => (
						<AboutContactBox
							key={box.id}
							icon={box?.icon?.data?.attributes?.url}
							text={box.text}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default AboutContact;
