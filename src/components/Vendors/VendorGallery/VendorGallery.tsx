'use client';
import Image from 'next/image';
import { FC, useEffect, useRef, useState } from 'react';
import SwiperCore, { Navigation } from 'swiper';

import FreeDemo from '@/components/ui/Dialogs/FreeDemo/FreeDemo';
import GalleryModal from '@/components/ui/Dialogs/FreeDemo/GalleryModal';
import { ArrowLeftCircle, ArrowRightCircle } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './VendorGallery.module.css';

SwiperCore.use([Navigation]);

interface VendorGalleryProps {
	images: any;
	youtube_link: string;
	vendor: {
		name: string;
		image: string;
	};
}

const VendorGallery: FC<VendorGalleryProps> = ({
	images,
	youtube_link,
	vendor,
}) => {
	const galleryImages = images;
	const navigationPrevRef = useRef<HTMLButtonElement | null>(null);
	const navigationNextRef = useRef<HTMLButtonElement | null>(null);
	const swiperRef = useRef<SwiperCore | null>(null);
	const [open, setOpen] = useState(false);
	const [galleryOpen, setGalleryOpen] = useState(false);
	const [selectedImage, setSelectedImage] = useState(images[0]);
	const [client, setClient] = useState(false);
	useEffect(() => {
		setClient(true);
	}, []);

	useEffect(() => {
		if (swiperRef.current) {
			swiperRef.current.navigation.init();
			swiperRef.current.navigation.update();
		}
	}, [navigationPrevRef, navigationNextRef, client]);

	return (
		<>
			<GalleryModal
				open={galleryOpen}
				onClose={() => setGalleryOpen(false)}
				galleryImages={galleryImages}
				selectedImage={selectedImage}
			/>
			<section>
				<div className={styles.gallery_thumb}>
					<div className={styles.image_container} onClick={() => setOpen(true)}>
						<Image
							src={
								process.env.NEXT_PUBLIC_STRAPI_IMAGE_URL + images[0].image_url
							}
							alt={images[0].title}
							width={480}
							height={280}
							className="mx-auto cursor-pointer"
						/>
						<div className={styles.icon_overlay}>
							<Image
								src="/images/video-icon.png"
								alt="play"
								width={50}
								height={50}
								className="cursor-pointer"
							/>
						</div>
					</div>
				</div>
				<div className={styles.gallery_list}>
					<Swiper
						onSwiper={(swiper) => (swiperRef.current = swiper)}
						spaceBetween={18}
						slidesPerView={3.5}
						navigation={{
							prevEl: navigationPrevRef.current,
							nextEl: navigationNextRef.current,
						}}
						className={styles.gallery_slider}
					>
						{galleryImages.map((image: any) => (
							<SwiperSlide
								key={image.image_url}
								onClick={() => {
									setGalleryOpen(true);
									setSelectedImage(image);
								}}
							>
								<Image
									src={
										process.env.NEXT_PUBLIC_STRAPI_IMAGE_URL + image.image_url
									}
									alt={image.title || 'image'}
									width={167}
									height={94}
								/>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
				<div className="flex items-center justify-center gap-3 mt-4">
					<button ref={navigationPrevRef}>
						<ArrowLeftCircle size={30} />
					</button>
					<button ref={navigationNextRef}>
						<ArrowRightCircle size={30} />
					</button>
				</div>
			</section>
			<FreeDemo
				open={open}
				onClose={() => setOpen(false)}
				videoId={youtube_link}
				vendor={vendor}
			/>
		</>
	);
};

export default VendorGallery;
