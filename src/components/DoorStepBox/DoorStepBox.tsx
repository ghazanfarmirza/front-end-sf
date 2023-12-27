import { FC } from 'react';
import Paragraph from '../ui/Paragraph/Paragraph';

interface DoorStepBoxProps {
	title: string;
	desc: string;
	className?: string;
}

const DoorStepBox: FC<DoorStepBoxProps> = ({ title, desc, className }) => {
	return (
		<div className={className}>
			<Paragraph size={'lg'} variant={'bold'} className="text-green">
				{title}
			</Paragraph>
			<Paragraph className="w-56 mt-2 text-black">{desc}</Paragraph>
		</div>
	);
};

export default DoorStepBox;
