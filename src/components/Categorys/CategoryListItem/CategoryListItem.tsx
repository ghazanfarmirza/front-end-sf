'use client';
import Description from '@/components/ui/Description/Description';
import DownloadPortfolio from '@/components/ui/Dialogs/DownloadPortfolio/DownloadPortfolio';
import FreeDemo from '@/components/ui/Dialogs/FreeDemo/FreeDemo';
import GetPricing from '@/components/ui/Dialogs/GetPricing/GetPricing';
import GetQuote from '@/components/ui/Dialogs/GetQuote/GetQuote';
import { calculateRatingStatistics } from '@/lib/utils/ratingstats';
import Image from 'next/image';
import Link from 'next/link';
import { FC, useState } from 'react';
import Button from '../../ui/Button/Button';
import RightArrowLink from '../../ui/Link/RightArrowLink/RightArrowLink';
import Paragraph from '../../ui/Paragraph/Paragraph';
import Rating from '../../ui/Rating/Rating';
import styles from './CategoryListItem.module.css';

interface CategoryListItemProps {
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

const CategoryListItem: FC<CategoryListItemProps> = ({
	item,
	category,
	type,
}) => {
	const [activeModal, setActiveModal] = useState('');

	const openModal = (modalName: string) => {
		setActiveModal(modalName);
	};

	const closeModal = () => {
		setActiveModal('');
	};
	const { totalReviews, averageRating } = calculateRatingStatistics(
		item?.reviews.data
	);
	const vendorLogo =
		process.env.NEXT_PUBLIC_STRAPI_IMAGE_URL + item.logo?.image_url;
	const vendor = { name: item.name, image: vendorLogo };
	return (
		<div className={`${styles.box} grid grid-cols-12 py-7 pl-4 pr-14 gap-8`}>
			{type == 'software' && (
				<>
					<FreeDemo
						open={activeModal === 'demo'}
						onClose={closeModal}
						videoId={item.youtube_link}
						vendor={vendor}
					/>
					<GetPricing
						open={activeModal === 'pricing'}
						onClose={closeModal}
						vendor={vendor}
					/>
				</>
			)}
			{type == 'service' && (
				<>
					{' '}
					<DownloadPortfolio
						open={activeModal === 'portfolio'}
						onClose={closeModal}
						vendor={vendor}
					/>
					<GetQuote
						open={activeModal === 'quote'}
						onClose={closeModal}
						vendor={vendor}
					/>
				</>
			)}
			<div
				className={`${styles.image_box} flex flex-col items-center justify-center col-span-3 gap-3 `}
			>
				<div className="flex items-center justify-center h-16 w-44">
					<Link
						prefetch={false}
						href={`/${category || item.categories.data[0]?.attributes?.slug}/${
							item.slug
						}`}
						passHref
					>
						<div className={styles.img}>
							<Image
								src={vendorLogo}
								alt={item.name || 'vendor'}
								width={148}
								height={58}
							/>
						</div>
					</Link>
				</div>
				<Rating rating={averageRating} size={25} />
				<p className="text-sm font-medium text-light-grey">
					{totalReviews} Reviews
				</p>
			</div>
			<div className="col-span-9">
				<Link
					prefetch={false}
					href={`/${category || item.categories.data[0]?.attributes?.slug}/${
						item.slug
					}`}
					passHref
				>
					<Paragraph size={'lg'} variant={'semibold'} className="text-black">
						{item.name}
					</Paragraph>
				</Link>
				<Description className="mt-4 text-black" showLess={true}>
					{item.description}
				</Description>
				<div className="flex items-center justify-between mt-8">
					<div className="flex items-center gap-2 ">
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
					<RightArrowLink
						title={type == 'software' ? 'View Product' : 'View Company'}
						link={`/${category || item.categories.data[0]?.attributes?.slug}/${
							item.slug
						}`}
					/>
				</div>
			</div>
		</div>
	);
};

export default CategoryListItem;
