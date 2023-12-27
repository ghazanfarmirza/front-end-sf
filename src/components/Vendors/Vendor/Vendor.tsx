import Image from 'next/image';
import { FC } from 'react';
import styles from './Vendor.module.css';

interface VendorProps {
	src: string;
	alt: string;
	width: number;
	height: number;
}

const Vendor: FC<VendorProps> = ({ src, alt, width, height }) => {
	return (
		<div className={styles.vendor}>
			<Image
				src={src}
				alt={alt}
				width={width}
				height={height}
				className="cursor-pointer transition-effect"
				placeholder="blur"
				blurDataURL={src}
			/>
		</div>
	);
};

export default Vendor;
