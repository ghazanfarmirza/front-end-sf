import Heading from '@/components/ui/Heading/Heading';
import Paragraph from '@/components/ui/Paragraph/Paragraph';
import Progress from '@/components/ui/Progress/Progress';
import Rating from '@/components/ui/Rating/Rating';
import { FC, useState } from 'react';
import styles from './VendorReviewListItemMobile.module.css';

interface VendorReviewListItemMobileProps {
	item: {
		author: string;
		team_size: string;
		industry: string;
		time_used: string;
		company: string;
		rating: number;
		value_for_money: number;
		customer_support: number;
		ease_of_use: number;
		functionality: number;
		title: string;
		pros_text: string;
		cons_text: string;
		added_on: string;
	};
}

const VendorReviewListItemMobile: FC<VendorReviewListItemMobileProps> = ({
	item,
}) => {
	const [isPopupVisible, setPopupVisible] = useState(false);

	// Function to toggle the popup visibility
	const togglePopup = () => {
		setPopupVisible(!isPopupVisible);
	};
	return (
		<div className={styles.box}>
			<div>
				<Paragraph className="mb-2 text-grey" size={'small'}>
					{new Date(item.added_on).toLocaleDateString('en-US', {
						day: '2-digit',
						month: 'short',
						year: 'numeric',
					})}
				</Paragraph>
				<Paragraph size={'lg'} variant={'medium'} className="mb-4 text-black">
					{item.title}
				</Paragraph>
				<Rating rating={item.rating} size={22} />
				<div className="flex items-end justify-between mt-3">
					<div className="flex flex-col gap-1">
						<Heading size={'h6'} variant={'bold'} className="text-black ">
							{item.author}
						</Heading>
						<Paragraph
							variant={'regular'}
							className="text-[#10292d80] text-small"
						>
							{item.industry || item.company}
						</Paragraph>
					</div>
					<div onClick={togglePopup}>
						{isPopupVisible && (
							<div className={styles.info}>
								<p>{item.team_size}</p>
								<p>{item.time_used}</p>
							</div>
						)}
						<div className="flex justify-end">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
							>
								<path
									d="M13 9H11V7H13M13 17H11V11H13M12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C5.85752 19.9997 6.95991 20.7362 8.17317 21.2388C9.38642 21.7413 10.6868 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2Z"
									fill="#10292D"
								/>
							</svg>
						</div>
					</div>
				</div>
				<div className="flex flex-col gap-2 py-6 my-6 border border-l-0 border-r-0 border-[#b3b8b9] border-b-1 border-t-1">
					<div className="flex items-center justify-between ">
						<Paragraph className="text-black text-small" variant={'medium'}>
							Ease of use
						</Paragraph>
						<div className="flex items-center gap-2">
							<Progress
								size="sm"
								progress={(item?.ease_of_use / 10) * 100 || 0}
							/>
							<Paragraph className="text-black text-small" variant={'medium'}>
								{item?.ease_of_use || 0}
							</Paragraph>
						</div>
					</div>
					<div className="flex items-center justify-between">
						<Paragraph className="text-black text-small" variant={'medium'}>
							Value for money
						</Paragraph>
						<div className="flex items-center gap-2">
							<Progress
								size="sm"
								progress={(item?.value_for_money / 10) * 100 || 0}
							/>
							<Paragraph className="text-black text-small" variant={'medium'}>
								{item?.value_for_money || 0}
							</Paragraph>
						</div>
					</div>
					<div className="flex items-center justify-between">
						<Paragraph className="text-black text-small" variant={'medium'}>
							Customer Support
						</Paragraph>
						<div className="flex items-center gap-2">
							<Progress
								size="sm"
								progress={(item?.customer_support / 10) * 100 || 0}
							/>
							<Paragraph className="text-black text-small" variant={'medium'}>
								{item?.customer_support || 0}
							</Paragraph>
						</div>
					</div>
					<div className="flex items-center justify-between">
						<Paragraph className="text-black text-small" variant={'medium'}>
							Functionality
						</Paragraph>
						<div className="flex items-center gap-2">
							<Progress
								size="sm"
								progress={(item?.functionality / 10) * 100 || 0}
							/>
							<Paragraph className="text-black text-small" variant={'medium'}>
								{item?.functionality || 0}
							</Paragraph>
						</div>
					</div>
				</div>
			</div>
			<div className="col-span-8">
				<Heading size={'h6'} variant={'bold'} className="py-4 text-black">
					Pros
				</Heading>
				<Paragraph
					size={'small'}
					variant={'regular'}
					style={{ color: 'rgba(16,41,45,0.50' }}
				>
					{item.pros_text}
				</Paragraph>
				<Heading size={'h6'} variant={'bold'} className="py-4 text-black">
					Cons
				</Heading>
				<Paragraph
					size={'small'}
					variant={'regular'}
					style={{ color: 'rgba(16,41,45,0.50' }}
				>
					{item.cons_text}
				</Paragraph>
			</div>
		</div>
	);
};

export default VendorReviewListItemMobile;
