import Button from '@/components/ui/Button/Button';
import Heading from '@/components/ui/Heading/Heading';
import { cn } from '@/lib/utils/utils';
import { ArrowDownToLine } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import styles from './VendorSideBarBanner.module.css';

interface VendorSideBarBannerProps {
	banner: {
		text: string;
		image: string;
		banner_url: string;
		banner_image: any;
		document: any;
	};
	category: string;
}

const VendorSideBarBanner: FC<VendorSideBarBannerProps> = ({
	banner: { text, image, banner_url, banner_image, document },
	category,
}) => {
	const bannerImage =
		banner_image?.data?.attributes.url ||
		process.env.NEXT_PUBLIC_STRAPI_IMAGE_URL + image ||
		'/images/laptop.png';
	const bannerDoc =
		document?.data?.attributes?.url || `/resources/${banner_url}`;
	return (
		<div className={cn(styles.card)}>
			<div className={styles.card_inner}>
				<Heading size={'h5'} variant={'medium'} className="text-white">
					{text || category + 'Vendor Pricing List 2023'}
				</Heading>
				<Image
					src={bannerImage}
					alt="card"
					width={260}
					height={180}
					className="my-4 mx-auto"
				/>
				<div className="flex items-center justify-center">
					<Link prefetch={false} href={`${bannerDoc}`}>
						<Button size={'default'} variant={'green'}>
							<ArrowDownToLine size={'20'} /> Download
						</Button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default VendorSideBarBanner;
