'use client';
import Button from '@/components/ui/Button/Button';
import Description from '@/components/ui/Description/Description';
import DownloadPortfolio from '@/components/ui/Dialogs/DownloadPortfolio/DownloadPortfolio';
import FreeDemo from '@/components/ui/Dialogs/FreeDemo/FreeDemo';
import GetPricing from '@/components/ui/Dialogs/GetPricing/GetPricing';
import GetQuote from '@/components/ui/Dialogs/GetQuote/GetQuote';
import Paragraph from '@/components/ui/Paragraph/Paragraph';
import Rating from '@/components/ui/Rating/Rating';
import { calculateRatingStatistics } from '@/lib/utils/ratingstats';
import { cn } from '@/lib/utils/utils';
import Image from 'next/image';
import Link from 'next/link';
import { FC, useState } from 'react';
import styles from './CategoryListItemMobile.module.css';

interface CategoryListItemMobileProps {
	item: {
		id: number;
		slug: string;
		logo: any;
		averageRating: number;
		reviewsCount: number;
		name: string;
		description: string;
		categories?: any;
		reviews?: any;
		youtube_link: string;
	};
	category?: string;
	type: string;
}

const CategoryListItemMobile: FC<CategoryListItemMobileProps> = ({
	item,
	category,
	type,
}) => {
	const { totalReviews, averageRating } = calculateRatingStatistics(
		item.reviews?.data
	);
	const [activeModal, setActiveModal] = useState('');

	const openModal = (modalName: string) => {
		setActiveModal(modalName);
	};

	const closeModal = () => {
		setActiveModal('');
	};
	return (
		<div className={styles.box}>
			{type == 'software' && (
				<>
					<FreeDemo
						open={activeModal === 'demo'}
						onClose={closeModal}
						videoId={item.youtube_link}
					/>
					<GetPricing open={activeModal === 'pricing'} onClose={closeModal} />
				</>
			)}
			{type == 'service' && (
				<>
					{' '}
					<DownloadPortfolio
						open={activeModal === 'portfolio'}
						onClose={closeModal}
					/>
					<GetQuote open={activeModal === 'quote'} onClose={closeModal} />
				</>
			)}
			<div
				className={`${styles.image_box} flex flex-col items-center justify-center col-span-3 gap-3 `}
			>
				<div className="flex items-center justify-center h-16 w-44">
					<Link
						prefetch={false}
						href={`/${category || item.categories?.data[0]?.attributes?.slug}/${
							item.slug
						}`}
					>
						<Image
							src={
								process.env.NEXT_PUBLIC_STRAPI_IMAGE_URL + item.logo?.image_url
							}
							alt={item.name}
							width={220}
							height={90}
						/>
					</Link>
				</div>
			</div>
			<div className="mt-3">
				<Paragraph size={'lg'} variant={'semibold'} className="text-black">
					{item.name}
				</Paragraph>
				<div className="flex items-center gap-3">
					<Rating rating={averageRating} size={25} />
					<p className="text-sm font-bold text-[rgba(16,41,45,0.50)]">
						{totalReviews} Reviews
					</p>
				</div>
				<Description
					className={cn('mt-4 text-black', styles.threeLineEllipsis)}
					showLess={true}
				>
					{item.description}
				</Description>
				<div className="flex items-center justify-center gap-3 mt-8 flex-col">
					<Button
						size={'sm'}
						variant={'black'}
						onClick={() => {
							type === 'service' ? openModal('quote') : openModal('demo');
						}}
					>
						{type === 'service' ? 'Get a Quote' : 'Watch Demo'}
					</Button>
					<Button
						size={'sm'}
						variant={'green'}
						onClick={() => {
							type === 'service'
								? openModal('portfolio')
								: openModal('pricing');
						}}
					>
						{type === 'service' ? 'Download Portfolio' : 'Get Pricing'}
					</Button>
				</div>
			</div>
		</div>
	);
};

export default CategoryListItemMobile;
