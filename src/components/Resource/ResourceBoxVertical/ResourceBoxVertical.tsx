import { cn } from '@/lib/utils/utils';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import Button from '../../ui/Button/Button';
import Heading from '../../ui/Heading/Heading';
import Paragraph from '../../ui/Paragraph/Paragraph';
import styles from './ResourceBoxVertical.module.css';

interface ResourceBoxVerticalProps {
	resource: {
		attributes: {
			id: number;
			image_url: string;
			type: string;
			tags: string[];
			title: string;
			date_added: string;
			post_id: number;
			url: string;
			slug: string;
			resource_image: {
				data: {
					attributes: {
						url: string;
					};
				};
			};
		};
	};
}

const ResourceBoxVertical: FC<ResourceBoxVerticalProps> = ({ resource }) => {
	const resourceImage =
		resource.attributes?.resource_image?.data?.attributes.url ||
		'https://softwarefinder.com' + '/' + resource.attributes?.image_url;
	return (
		<div className={cn(styles.box, 'flex flex-col ')}>
			<Link prefetch={false} href={`/resources/${resource.attributes?.slug}`}>
				<div className={styles.image}>
					<Image
						src={resourceImage}
						alt="resource-img"
						width={370}
						height={288}
						className="w-full h-72"
					/>
				</div>
				<div className={styles.content}>
					<div>
						<Paragraph
							size={'default'}
							variant={'semibold'}
							className="py-4 text-black capitalize"
						>
							{resource.attributes?.type}
						</Paragraph>
						<ul className="flex items-center gap-2 ">
							{resource?.attributes?.tags?.map((tag) => (
								<li key={tag} className={styles.tag}>
									{tag}
								</li>
							))}
						</ul>
						<Heading
							size={'h5'}
							variant={'medium'}
							className={'py-4 text-black md:py-6 ' + styles.resourceTitle}
						>
							{resource.attributes?.title}
						</Heading>
					</div>
					<div className="flex flex-col items-start justify-between gap-3 md:items-end md:gap-0 md:flex-row">
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

export default ResourceBoxVertical;
