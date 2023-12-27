import Paragraph from '@/components/ui/Paragraph/Paragraph';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './VendorRecommendationSoftware.module.css';
interface VendorRecommendationSoftwareProps {
	recommendedSoftwares: any;
	category: string;
}

const VendorRecommendationSoftware: FC<VendorRecommendationSoftwareProps> = ({
	recommendedSoftwares,
}) => {
	if (!recommendedSoftwares) return null;
	return (
		<section className="mt-24">
			<Paragraph size="lg" variant="bold" className="mb-6">
				Top Recommendation Software
			</Paragraph>
			<div className="grid grid-cols-2 gap-3">
				{recommendedSoftwares.map((item: any) => (
					<div className={styles.box} key={uuidv4()}>
						<Link
							prefetch={false}
							href={`/${item?.attributes?.categories?.data[0]?.attributes.slug}/${item.attributes?.slug}`}
						>
							<Image
								src={
									process.env.NEXT_PUBLIC_STRAPI_IMAGE_URL +
									item.attributes?.logo?.image_url
								}
								alt={item.attributes?.name}
								width={105}
								height={40}
							/>
						</Link>
					</div>
				))}
			</div>
		</section>
	);
};

export default VendorRecommendationSoftware;
