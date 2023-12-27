'use client';
import GetPricing from '@/components/ui/Dialogs/GetPricing/GetPricing';
import Heading from '@/components/ui/Heading/Heading';
import Paragraph from '@/components/ui/Paragraph/Paragraph';
import { cn } from '@/lib/utils/utils';
import { Check } from 'lucide-react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FC, useState } from 'react';
import styles from './VendorPriceBox.module.css';

interface VendorPriceBoxProps {
	name: string;
	type: string;
	price: string;
	list: string[];
	enableViewPrice?: boolean;
	// eslint-disable-next-line no-unused-vars
	setEnableViewPrice?: (value: boolean) => void;
}

const VendorPriceBox: FC<VendorPriceBoxProps> = ({
	name,
	type,
	price,
	list,
	enableViewPrice,
	setEnableViewPrice,
}) => {
	const [openModal, setOpenModal] = useState(false);
	const vendor = usePathname().split('/')[2];
	let LSpricingEnabledVendors = localStorage.getItem('pricingEnabledVendors');
	LSpricingEnabledVendors = LSpricingEnabledVendors
		? JSON.parse(LSpricingEnabledVendors)
		: [];
	if (LSpricingEnabledVendors?.includes(vendor)) {
		setEnableViewPrice && setEnableViewPrice(true);
	}
	return (
		<div className={styles.price}>
			<GetPricing
				open={openModal}
				onClose={() => setOpenModal(false)}
				enableViewPrice={enableViewPrice}
				setEnableViewPrice={setEnableViewPrice}
			/>
			<div className={styles.price_header}>
				<Heading
					size={'h4'}
					variant={'semibold'}
					className="capitalize text-green"
				>
					{name}
				</Heading>
				<Paragraph className="text-white capitalize">{type}</Paragraph>
			</div>
			<div className={styles.price_body}>
				<div className={styles.price_section}>
					{(enableViewPrice && (
						<Heading size={'h6'} variant={'regular'} className="text-green">
							{price}
						</Heading>
					)) || (
						<div
							className={cn(styles.price_hidden, 'cursor-pointer')}
							onClick={() => setOpenModal(true)}
						>
							<Image
								src="/images/eye.svg"
								width={24}
								height={24}
								alt="eye"
								className={styles.eyeIcon}
							/>
							<Image
								src="/images/eye-open.svg"
								width={24}
								height={24}
								alt="eye"
								className={styles.eyeOpenIcon}
							/>
							<Paragraph variant={'bold'} className="text-black">
								View Price
							</Paragraph>
						</div>
					)}
				</div>
				<div className={styles.price_desc}>
					<Paragraph
						className="mb-4 text-black"
						size={'lg'}
						variant={'semibold'}
					>
						What's Included
					</Paragraph>
					<ul className="flex flex-col gap-4">
						{list.map((item) => (
							<li key={item} className="flex items-center gap-2">
								<Check size={24} className="text-green" />
								<Paragraph size={'small'} className="text-black">
									{item}
								</Paragraph>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default VendorPriceBox;
