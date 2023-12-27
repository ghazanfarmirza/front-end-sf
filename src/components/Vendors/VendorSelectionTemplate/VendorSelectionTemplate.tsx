import { ArrowDownToLine } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import Button from '../../ui/Button/Button';
import Heading from '../../ui/Heading/Heading';
import styles from './VendorSelectionTemplate.module.css';

interface VendorSelectionTemplateProps {
	banner: {
		text: string;
		image: string;
		banner_url: string;
		banner_image: any;
		document: any;
	};
	category: string;
}

const VendorSelectionTemplate: FC<VendorSelectionTemplateProps> = ({
	banner: { text, image, banner_url, banner_image, document },
	category,
}) => {
	const bannerImage =
		banner_image?.data?.attributes.url ||
		process.env.NEXT_PUBLIC_STRAPI_IMAGE_URL + image ||
		'/images/template-card.png';
	const bannerDoc =
		document?.data?.attributes?.url || `/resources/${banner_url}`;
	return (
		<div className={styles.card}>
			<div className={styles.card_inner}>
				<Heading size={'h5'} variant={'medium'} className="text-black">
					{text || category + 'Vendor Selection Template'}
				</Heading>
				<Image
					src={bannerImage}
					alt="card"
					width={160}
					height={200}
					className="my-4 mx-auto"
				/>
				<div className="flex items-center justify-center">
					<Link prefetch={false} href={bannerDoc}>
						<Button size={'default'} variant={'green'}>
							<ArrowDownToLine size={'20'} /> Download
						</Button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default VendorSelectionTemplate;
