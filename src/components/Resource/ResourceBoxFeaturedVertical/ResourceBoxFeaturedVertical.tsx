import Description from '@/components/ui/Description/Description';
import { cn } from '@/lib/utils/utils';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import Button from '../../ui/Button/Button';
import Heading from '../../ui/Heading/Heading';
import Paragraph from '../../ui/Paragraph/Paragraph';
import styles from './ResourceBoxFeaturedVertical.module.css';

interface ResourceBoxFeaturedVerticalProps {
	resource: {
		image_url: string;
		type: string;
		title: string;
		slug: string;
		content: string;
	};
}

const ResourceBoxFeaturedVertical: FC<ResourceBoxFeaturedVerticalProps> = ({
	resource,
}) => {
	if (!resource) return null;
	return (
		<div className={cn(styles.box, 'flex flex-col')}>
			<Link prefetch={false} href={`/resources/${resource.slug}`} passHref>
				<div className={styles.image}>
					<Image
						src={
							process.env.NEXT_PUBLIC_DIGITAL_OCEAN_IMAGE_URL +
							resource.image_url
						}
						alt="resource-img"
						width={676}
						height={324}
						className="w-full"
					/>
				</div>
				<div className={styles.content}>
					<Paragraph
						size={'default'}
						variant={'semibold'}
						className="py-4 text-black capitalize"
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
					<div className="block lg:hidden xl:block">
						<Heading
							size={'h4'}
							variant={'semibold'}
							className="py-4 text-black"
						>
							{resource.title}
						</Heading>
						<Description className="text-black" showLess={true}>
							{resource.content}
						</Description>
					</div>
					<div className="hidden lg:block xl:hidden">
						<Heading
							size={'h5'}
							variant={'semibold'}
							className="py-4 text-black"
						>
							{resource.title}
						</Heading>
						<Description className="text-black" showLess={true}>
							{resource.content}
						</Description>
					</div>
					<div className="flex flex-col items-start justify-between gap-3 mt-5 md:items-end md:gap-0 md:flex-row">
						<Button size={'sm'} variant={'whiteGreen'}>
							Read More
						</Button>
						<Paragraph
							size={'small'}
							className="text-grey2"
							variant={'regular'}
						>
							{Math.floor(Math.random() * 10) + 1} min read
						</Paragraph>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default ResourceBoxFeaturedVertical;
