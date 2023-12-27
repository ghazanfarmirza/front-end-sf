'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';
import Button from '../../ui/Button/Button';
import Heading from '../../ui/Heading/Heading';
import AlternativeGridBox from '../AlternativeGridBox/AlternativeGridBox';

interface AlternativeGridProps {
	title: string;
	button: boolean;
	alternatives?: any;
	type?: string;
}

const AlternativeGrid: FC<AlternativeGridProps> = ({
	title,
	button,
	alternatives,
	type = 'software',
}) => {
	const path = usePathname().split('/');
	const category = path[1];
	const vendor = path[2];
	return (
		<section className={`hidden lg:block ${type == 'service' && 'mb-20'}`}>
			<div className="container">
				<Heading
					size={'h3'}
					variant={'semibold'}
					className="text-center text-black"
				>
					{title}
				</Heading>
				<div className="grid grid-cols-3 gap-8 mt-12 xl:gap-16">
					{alternatives?.map((item: any) => (
						<AlternativeGridBox
							key={item.attributes?.slug}
							title={item.attributes?.name}
							desc={item.attributes?.description}
							rating={item.attributes?.alternativeReviews?.data}
							image={
								process.env.NEXT_PUBLIC_STRAPI_IMAGE_URL +
								item.attributes?.logo.image_url
							}
							link={`/${
								item?.attributes?.categories?.data[0].attributes.slug ||
								category
							}/${item.attributes?.slug}${
								type == 'software' && '/alternatives'
							}`}
						/>
					))}
				</div>
				{type == 'software' && button && (
					<div className="flex items-center justify-center mt-12">
						<Link prefetch={false} href={`/${category}/${vendor}/alternatives`}>
							<Button size={'lg'} variant={'green'}>
								All Alternatives
							</Button>
						</Link>
					</div>
				)}
			</div>
		</section>
	);
};

export default AlternativeGrid;
