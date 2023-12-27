import Description from '@/components/ui/Description/Description';
import { cn } from '@/lib/utils/utils';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import Button from '../../ui/Button/Button';
import Paragraph from '../../ui/Paragraph/Paragraph';
import styles from './ResourceBoxFeaturedHorizontal.module.css';

interface ResourceBoxFeaturedHorizontalProps {
	resource: {
		image_url: string;
		type: string;
		title: string;
		slug: string;
		content: string;
	};
}

const ResourceBoxFeaturedHorizontal: FC<ResourceBoxFeaturedHorizontalProps> = ({
	resource,
}) => {
	if (!resource) return null;
	return (
		<Link prefetch={false} href={`/resources/${resource.slug}`} passHref>
			<div
				className={cn(
					styles.box,
					'flex flex-col md:grid md:grid-cols-2 items-center md:items-start gap-5'
				)}
			>
				<div className="md:col-span-1">
					<Image
						src={
							process.env.NEXT_PUBLIC_DIGITAL_OCEAN_IMAGE_URL +
							resource.image_url
						}
						alt="resource-img"
						width={370}
						height={280}
						className="w-full"
					/>
				</div>

				<div className={styles.content}>
					<Paragraph
						size={'default'}
						variant={'semibold'}
						className="py-2 text-black capitalize"
					>
						{resource.type}
					</Paragraph>
					{/* <ul className="flex items-center gap-2 ">
					{resource.tags.map((tag) => (
						<li key={tag} className={styles.tag}>
							{tag}
						</li>
					))}
				</ul> */}
					<Paragraph size={'lg'} variant={'medium'} className="py-3 text-black">
						{resource.title}
					</Paragraph>
					<Description className="text-black" showLess={true}>
						{resource.content}
					</Description>
					<div className="flex flex-col items-start justify-center gap-3 mt-4 md:items-end md:gap-0 md:flex-row md:justify-between">
						<Button size={'sm'} variant={'whiteGreen'}>
							Read More
						</Button>
						<p className="text-grey2 text-xsmall">
							{' '}
							{Math.floor(Math.random() * 10) + 1} min read
						</p>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default ResourceBoxFeaturedHorizontal;
