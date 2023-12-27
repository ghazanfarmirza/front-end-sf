import Image from 'next/image';
import { FC } from 'react';
import Heading from '../../ui/Heading/Heading';
import Paragraph from '../../ui/Paragraph/Paragraph';

interface BenefitProps {
	icon: string;
	title: string;
	text: string;
}

const Benefit: FC<BenefitProps> = ({ title, icon, text }) => {
	return (
		<div
			className={'flex flex-col justify-start items-center text-center mt-24'}
		>
			<Image src={icon} alt={title} width={92} height={92} />
			<Heading
				size={'h5'}
				variant={'semibold'}
				className="mt-8 mb-4 text-dark-blue"
			>
				{title}
			</Heading>
			<Paragraph size={'default'} className="w-64 text-dark-blue">
				{text}
			</Paragraph>
		</div>
	);
};

export default Benefit;
