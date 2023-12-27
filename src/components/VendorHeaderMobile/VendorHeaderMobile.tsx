'use client';
import { cn } from '@/lib/utils/utils';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FC, useState } from 'react';
import VendorTabList from '../Vendors/VendorTabList/VendorTabList';
import Button from '../ui/Button/Button';
import ComparePricing from '../ui/Dialogs/ComparePricing/ComparePricing';
import DownloadPortfolio from '../ui/Dialogs/DownloadPortfolio/DownloadPortfolio';
import FreeDemo from '../ui/Dialogs/FreeDemo/FreeDemo';
import GetPricing from '../ui/Dialogs/GetPricing/GetPricing';
import GetQuote from '../ui/Dialogs/GetQuote/GetQuote';
import Heading from '../ui/Heading/Heading';
import Paragraph from '../ui/Paragraph/Paragraph';
import Rating from '../ui/Rating/Rating';
import styles from './VendorHeaderMobile.module.css';

interface VendorHeaderMobileProps {
	name?: string;
	logo: { image_url: string; title: string; image: any };
	rating?: number;
	onClick?: () => void;
	totalReviews?: number;
	tabNames?: string[];
	youtubeUrl?: string;
	type?: string;
}

const VendorHeaderMobile: FC<VendorHeaderMobileProps> = ({
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
		<section className={cn(styles.header, 'block lg:hidden')}>
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

			<div className="container">
				<div className="flex flex-col items-start justify-start gap-4 py-6">
					<Image src={vendorLogo} alt="logo" width={220} height={32} />
					<Heading size="h4" variant={'semibold'}>
						{name}
					</Heading>
					<div className="flex items-center gap-8">
						<Rating rating={rating} size={25} />
						<Paragraph
							size={'small'}
							variant={'semibold'}
							className="text-[#c1c1c1]"
						>
							{totalReviews} Reviews
						</Paragraph>
					</div>
				</div>
				<VendorTabList list={tabList} />
			</div>
			<div className={styles.fixed_header}>
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
		</section>
	);
};

export default VendorHeaderMobile;
