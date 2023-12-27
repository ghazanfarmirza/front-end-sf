import Description from '@/components/ui/Description/Description';
import { FC } from 'react';
import Heading from '../../ui/Heading/Heading';

interface AlternativeDetailContentProps {
	name: string;
	description: string;
}

const AlternativeDetailContent: FC<AlternativeDetailContentProps> = ({
	name,
	description,
}) => {
	return (
		<div className="col-span-9">
			<Heading size={'h3'} variant={'semibold'} className="text-black">
				The best {name} alternatives
			</Heading>
			<Description>{description}</Description>
		</div>
	);
};

export default AlternativeDetailContent;
