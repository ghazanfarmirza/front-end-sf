'use client';
import Button from '@/components/ui/Button/Button';
import ComparePricing from '@/components/ui/Dialogs/ComparePricing/ComparePricing';
import DownloadPortfolio from '@/components/ui/Dialogs/DownloadPortfolio/DownloadPortfolio';
import FreeDemo from '@/components/ui/Dialogs/FreeDemo/FreeDemo';
import GetPricing from '@/components/ui/Dialogs/GetPricing/GetPricing';
import GetQuote from '@/components/ui/Dialogs/GetQuote/GetQuote';
import Paragraph from '@/components/ui/Paragraph/Paragraph';
import Rating from '@/components/ui/Rating/Rating';
import { cn } from '@/lib/utils/utils';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC, useState } from 'react';
import VendorTabList from '../VendorTabList/VendorTabList';
import styles from './VendorHeader.module.css';

interface VendorHeaderProps {
	name: string;
	logo: { image_url: string; title: string; image: any };
	rating: number;
	onClick?: () => void;
	totalReviews: number;
	tabNames: string[];
	youtubeUrl: string;
	type?: string;
}

const VendorHeader: FC<VendorHeaderProps> = ({
	name = '',
	logo = {
		image_url: '',
		title: '',
		image: { data: { attributes: { url: '' } } },
	},
	rating = 0,
	totalReviews = 0,
	tabNames = [],
	youtubeUrl = '',
	type = 'software',
}) => {
	let path = usePathname();
	const pathArray = path.split('/');
	name =
		pathArray[3] == 'reviews'
			? name + ' Reviews'
			: pathArray[3] == 'alternatives'
			? `Top 10 ${name} Alternatives`
			: name;

	//remove third index from path if exists
	if (pathArray[3]) pathArray.splice(3, 1);
	path = pathArray.join('/');
	const softwareSectionData = [
		{ id: 1, name: 'Overview', link: `${path}/#overview` },
		{ id: 2, name: 'Features', link: `${path}/#features` },
		{ id: 3, name: 'Pros and Cons', link: `${path}/#pros-cons` },
		{ id: 4, name: 'Pricing', link: `${path}/#pricing` },
		{ id: 5, name: 'Reviews', link: `${path}/reviews` },
		{ id: 6, name: 'FAQs', link: `${path}/#faqs` },
		{ id: 7, name: 'Alternatives', link: `${path}/alternatives` },
	];
	const serviceSectionData = [
		{ id: 1, name: 'Overview', link: `${path}/#overview` },
		{ id: 4, name: 'Alternatives', link: `${path}#alternatives` },
		{ id: 5, name: 'Reviews', link: `${path}/reviews` },
		{ id: 6, name: 'FAQs', link: `${path}/#faqs` },
		{ id: 8, name: 'Resources', link: `${path}#resources` },
	];
	const sectionData =
		type == 'software' ? softwareSectionData : serviceSectionData;

	const tabList = sectionData
		.filter((section) => tabNames?.includes(section.name.toLowerCase()))
		.map((section) => ({
			id: section.id,
			name: section.name,
			link: section.link,
		}));
	const [activeModal, setActiveModal] = useState('');

	const openModal = (modalName: string) => {
		setActiveModal(modalName);
	};

	const closeModal = () => {
		setActiveModal('');
	};
	const vendorLogo =
		logo.image?.data?.attributes?.url ||
		process.env.NEXT_PUBLIC_STRAPI_IMAGE_URL + logo.image_url;
	const vendor = { name: name, image: vendorLogo };
	return (
		<>
			{type == 'software' && (
				<>
					<GetPricing
						open={activeModal === 'pricing'}
						onClose={closeModal}
						vendor={vendor}
					/>
					<FreeDemo
						open={activeModal === 'demo'}
						onClose={closeModal}
						videoId={youtubeUrl}
						vendor={vendor}
					/>
					<ComparePricing
						open={activeModal === 'compare'}
						onClose={closeModal}
						vendor={vendor}
					/>
				</>
			)}
			{type == 'service' && (
				<>
					<GetQuote
						open={activeModal === 'quote'}
						onClose={closeModal}
						vendor={vendor}
					/>
					<DownloadPortfolio
						open={activeModal === 'portfolio'}
						onClose={closeModal}
						vendor={vendor}
					/>
				</>
			)}

			<section className={cn(styles.header, 'hidden lg:block')}>
				<div className="container">
					<div className="grid items-center grid-cols-2">
						<div>
							<h1 className="font-semibold text-xl lg:text-2xl">{name}</h1>
							<div className="items-center hidden gap-2 mt-4 md:flex">
								{type == 'software' && (
									<>
										<Button
											size={'sm'}
											variant={'black'}
											onClick={() => openModal('demo')}
										>
											Watch Demo
										</Button>
										<Button
											size={'sm'}
											variant={'green'}
											onClick={() => openModal('pricing')}
										>
											Get Pricing
										</Button>
										<Button
											size={'sm'}
											variant={'whiteGreen'}
											onClick={() => openModal('compare')}
										>
											Compare Pricing
										</Button>
									</>
								)}

								{type == 'service' && (
									<>
										<Button
											size={'sm'}
											variant={'black'}
											onClick={() => openModal('quote')}
										>
											Get a Quote
										</Button>
										<Button
											size={'sm'}
											variant={'green'}
											onClick={() => openModal('portfolio')}
										>
											Download Portfolio
										</Button>
									</>
								)}
							</div>
						</div>
						<div className="flex flex-col items-center justify-center gap-4 justify-self-end">
							<Image src={vendorLogo} alt="logo" width={220} height={32} />
							<div>
								<Link prefetch={false} href={`${path}/reviews`}>
									<Rating rating={rating} size={25} />
									<Paragraph
										size={'small'}
										variant={'bold'}
										style={{ color: 'rgba(16,41,45,0.50' }}
										className="text-center"
									>
										{totalReviews} Reviews
									</Paragraph>
								</Link>
							</div>
						</div>
					</div>
					<VendorTabList list={tabList} />
				</div>
			</section>
		</>
	);
};

export default VendorHeader;
