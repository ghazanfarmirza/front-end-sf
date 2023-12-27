'use client';
import { calculateRatingStatistics } from '@/lib/utils/ratingstats';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import Button from '../ui/Button/Button';
import Paragraph from '../ui/Paragraph/Paragraph';
import Rating from '../ui/Rating/Rating';
import styles from './FeatureProduct.module.css';

interface FeatureProductProps {
	product: {
		slug: string;
		logo: { image_url: string };
		reviews: { data: { attributes: { rating: number } }[] };
		feature: { feature_name: string; feature_description: string }[];
		prices: { price: string }[];
		categories: { data: { attributes: { slug: string } }[] };
	};
}

const FeatureProduct: FC<FeatureProductProps> = ({ product }) => {
	const { averageRating } = calculateRatingStatistics(product.reviews.data);
	return (
		<div className={styles.product}>
			<div className={styles.product_thumb}>
				<Link
					prefetch={false}
					href={`/${product.categories.data[0]?.attributes?.slug}/${product.slug}`}
					passHref
				>
					<Image
						src={
							process.env.NEXT_PUBLIC_STRAPI_IMAGE_URL + product.logo.image_url
						}
						alt="product"
						width={235}
						height={80}
					/>
				</Link>
			</div>
			<div>
				<Paragraph size={'default'} variant={'bold'} className="text-green">
					Review
				</Paragraph>
				<div className="flex items-center gap-4">
					<Rating rating={averageRating || 4} size={24} />
					<Paragraph
						size={'default'}
						variant={'medium'}
						className="text-black mt-1"
					>
						{averageRating || 4} out of 5
					</Paragraph>
				</div>
			</div>
			<div className="py-6">
				<Paragraph size={'default'} variant={'bold'} className="text-green">
					Price
				</Paragraph>
				<Paragraph size={'default'} variant={'medium'} className="text-black">
					{product.prices[0]?.price}
				</Paragraph>
			</div>
			<div>
				<Paragraph size={'default'} variant={'bold'} className="text-green">
					Features
				</Paragraph>
				<ul className="mt-2 sf-list" style={{ alignItems: 'flex-start' }}>
					{product.feature.map((item) => (
						<li key={item.feature_name}>{item.feature_name}</li>
					))}
				</ul>
			</div>
			<Link
				prefetch={false}
				href={`/${product.categories.data[0]?.attributes?.slug}/${product.slug}`}
				passHref
				className="w-full"
			>
				<Button
					variant={'green'}
					size={'default'}
					className="justify-center w-full gap-0 mt-6"
					style={{ width: '100%', justifyContent: 'center' }}
				>
					Learn More
				</Button>
			</Link>
		</div>
	);
};

export default FeatureProduct;
