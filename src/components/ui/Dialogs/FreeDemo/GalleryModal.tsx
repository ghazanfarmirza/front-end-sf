'use client';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import Image from 'next/image';
import { FC, useCallback, useEffect, useRef, useState } from 'react';
import SwiperCore, { Navigation } from 'swiper';

import { ArrowLeftCircle, ArrowRightCircle } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Paragraph from '../../Paragraph/Paragraph';
import styles from './FreeDemo.module.css';

SwiperCore.use([Navigation]);

interface FreeDemoProps {
	open: boolean;
	onClose: () => void;
	galleryImages: any;
	selectedImage: any;
}

const GalleryModal: FC<FreeDemoProps> = ({
	open,
	onClose,
	galleryImages,
	selectedImage: currentImage,
}) => {
	const navigationPrevModalRef = useRef<HTMLButtonElement | null>(null);
	const navigationNextModalRef = useRef<HTMLButtonElement | null>(null);
	const swiperRef = useRef<SwiperCore | null>(null);
	const [isClient, setIsClient] = useState(false);
	// eslint-disable-next-line no-unused-vars
	const [selectedImage, setSelectedImage] = useState(currentImage);

	useEffect(() => {
		setIsClient(true);
	}, []);
	const [swiper, setSwiper] = useState<any>(null);

	const getCurrentImageIndex = useCallback(() => {
		return galleryImages.findIndex(
			(image: any) => image.image_url === currentImage.image_url
		);
	}, [galleryImages, currentImage]);
	useEffect(() => {
		if (swiperRef.current) {
			swiperRef.current.navigation?.init();
			swiperRef.current.navigation?.update();
		}
	}, [navigationPrevModalRef, navigationNextModalRef, isClient]);

	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	useEffect(() => {
		setCurrentImageIndex(getCurrentImageIndex());
		setSelectedImage(currentImage);
		if (swiper) {
			const index = getCurrentImageIndex();
			swiper.realIndex = index;
			swiper.activeIndex = index;
			swiper.navigation?.update();
			swiper.update();
		}
	}, [currentImage, swiper, getCurrentImageIndex]);
	const title =
		galleryImages[currentImageIndex]?.title == 'NULL'
			? ''
			: galleryImages[currentImageIndex]?.title;

	return (
		<Dialog.Root open={open}>
			{isClient && (
				<Dialog.Portal>
					<Dialog.Overlay className={styles.DialogOverlay} />
					<Dialog.Content className={styles.DialogContentGallery}>
						<div className="flex items-center justify-center gap-4 bg-white py-3 px-4">
							<Paragraph
								className="text-dark-blue"
								size={'lg'}
								variant={'medium'}
							>
								{title}
							</Paragraph>
							<div>
								<Dialog.Close asChild>
									<button
										className={styles.IconButtonGallery}
										aria-label="Close"
										onClick={onClose}
									>
										<Cross2Icon />
									</button>
								</Dialog.Close>
							</div>
						</div>
						<div className="flex items-center justify-between gap-4 bg-white px-9 h-full">
							<button
								ref={navigationPrevModalRef}
								className={`${
									(currentImageIndex == 0 && 'text-grey') || 'text-black'
								}`}
							>
								<ArrowLeftCircle size={30} />
							</button>

							<Swiper
								onSwiper={setSwiper}
								slidesPerView={1}
								navigation={{
									prevEl: navigationPrevModalRef.current,
									nextEl: navigationNextModalRef.current,
								}}
								onSlideChange={(swiper) => {
									const index = swiper.realIndex;
									setCurrentImageIndex(index);
								}}
							>
								{galleryImages.map((image: any) => (
									<SwiperSlide key={image.image_url}>
										<Image
											src={
												process.env.NEXT_PUBLIC_STRAPI_IMAGE_URL +
												image.image_url
											}
											blurDataURL={'/images/leaf.svg'}
											alt={title}
											width={500}
											height={94}
											className="m-auto w-auto mt-5"
											title={title}
										/>
									</SwiperSlide>
								))}
							</Swiper>

							<button
								ref={navigationNextModalRef}
								className={`${
									(currentImageIndex == galleryImages.length - 1 &&
										'text-grey') ||
									'text-black'
								}`}
							>
								<ArrowRightCircle size={30} />
							</button>
						</div>
					</Dialog.Content>
				</Dialog.Portal>
			)}
		</Dialog.Root>
	);
};

export default GalleryModal;
