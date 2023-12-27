import { cn } from '@/lib/utils/utils';
import Image from 'next/image';
import { FC } from 'react';
import Heading from '../../ui/Heading/Heading';
import Paragraph from '../../ui/Paragraph/Paragraph';
import styles from './ResourcesListItem.module.css';

interface ResourcesListItemProps {
	item: {
		id: number;
		image: string;
		title: string;
		desc: string;
		date: string;
	};
}

const ResourcesListItem: FC<ResourcesListItemProps> = ({ item }) => {
	return (
		<div
			className={cn(styles.item, 'flex flex-col md:grid grid-cols-12 gap-6')}
		>
			<div className="order-2 col-span-12 md:order-1 md:col-span-9">
				<Heading size={'h5'} variant={'medium'} className="text-black">
					{item.title}
				</Heading>
				<Paragraph className="mt-2 text-black">{item.desc}</Paragraph>
				<Paragraph
					className="mt-6 text-sm text-grey"
					size={'xs'}
					variant={'regular'}
				>
					{item.date}
				</Paragraph>
			</div>
			<div className="order-1 col-span-12 md:order-2 md:col-span-3">
				<Image
					src={item.image}
					alt={item.title}
					width={160}
					height={160}
					className="object-cover object-center w-full h-full"
				/>
			</div>
		</div>
	);
};

export default ResourcesListItem;
