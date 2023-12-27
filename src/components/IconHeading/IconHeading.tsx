import Image from 'next/image';
import { FC } from 'react';
import Heading from '../ui/Heading/Heading';

interface IconHeadingProps {
	title: string;
	image: string;
	link?: string;
}

const IconHeading: FC<IconHeadingProps> = ({
	title,
	image,
	link,
}: IconHeadingProps) => {
	return (
		<div className="flex items-center gap-4 mb-8">
			<Image src={image} alt={title} width={32} height={32} />
			<Heading variant={'semibold'} size={'h5'} className="text-green">
				{title}
			</Heading>
		</div>
	);
};

export default IconHeading;
