import { cn } from '@/lib/utils/utils';
import { FC, useState } from 'react';
import Button from '../ui/Button/Button';
import FreeDemo from '../ui/Dialogs/FreeDemo/FreeDemo';
import GetPricing from '../ui/Dialogs/GetPricing/GetPricing';
import Heading from '../ui/Heading/Heading';
import styles from './HeadingBanner.module.css';

interface HeadingBannerProps {
	resource: {
		name: string;
		image: string;
	};
}

const HeadingBanner: FC<HeadingBannerProps> = ({ resource }) => {
	const [activeModal, setActiveModal] = useState('');

	const openModal = (modalName: string) => {
		setActiveModal(modalName);
	};

	const closeModal = () => {
		setActiveModal('');
	};
	const resourceModal = {
		name: resource.name,
		image: process.env.NEXT_PUBLIC_STRAPI_IMAGE_URL + resource.image,
	};
	return (
		<div
			className={cn(
				styles.banner,
				'flex flex-col gap-6 justify-center md:items-center mt-12'
			)}
		>
			<GetPricing
				open={activeModal === 'pricing'}
				onClose={closeModal}
				vendor={resourceModal}
			/>
			<FreeDemo
				open={activeModal === 'demo'}
				onClose={closeModal}
				videoId={''}
				vendor={resourceModal}
			/>
			<div className="max-w-xl mx-auto">
				<Heading
					size={'h4'}
					variant={'medium'}
					className="text-center text-black"
				>
					Get Features, Pricing, & Review for {resource?.name}
				</Heading>
			</div>
			<div className="flex flex-col items-center justify-center gap-4 md:flex-row">
				<Button size={'sm'} variant={'blue'} onClick={() => openModal('demo')}>
					Watch Demo
				</Button>
				<Button
					size={'sm'}
					variant={'green'}
					onClick={() => openModal('pricing')}
				>
					Get Pricing
				</Button>
			</div>
		</div>
	);
};

export default HeadingBanner;
