import Image from 'next/image';
import { FC } from 'react';
import Heading from '../../ui/Heading/Heading';
import Paragraph from '../../ui/Paragraph/Paragraph';

interface AboutCommitBoxProps {
	data: {
		id: number;
		icon: any;
		heading: string;
		paragraph: string;
	};
}

const AboutCommitBox: FC<AboutCommitBoxProps> = ({ data }) => {
	return (
		<div className="flex flex-col items-center justify-center gap-6 text-center lg:max-w-sm">
			<Image
				src={data.icon?.data?.attributes?.url}
				alt={data.heading}
				width={72}
				height={72}
			/>
			<Heading size={'h5'} variant={'medium'} className="text-black">
				{data.heading}
			</Heading>
			<Paragraph className="text-black opacity-50">{data.paragraph}</Paragraph>
		</div>
	);
};

export default AboutCommitBox;
