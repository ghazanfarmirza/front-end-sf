import Image from 'next/image';
import { FC } from 'react';
import Heading from '../ui/Heading/Heading';

interface IconHeadingLargeProps {
	title: string;
	icon: string;
}

const IconHeadingLarge: FC<IconHeadingLargeProps> = ({ title, icon }) => {
	return (
		<div className="flex items-center gap-4">
			<Image width={40} height={40} src={icon} alt={title} />
			<Heading size={'h3'} variant={'semibold'} className="text-green">
				{title}
			</Heading>
		</div>
	);
};

export default IconHeadingLarge;
