import Heading from '@/components/ui/Heading/Heading';
import Paragraph from '@/components/ui/Paragraph/Paragraph';
import Progress from '@/components/ui/Progress/Progress';
import Rating from '@/components/ui/Rating/Rating';
import { cn } from '@/lib/utils/utils';
import { FC, useState } from 'react';
import styles from './VendorReviewListItem.module.css';

interface VendorReviewListItemProps {
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

const VendorReviewListItem: FC<VendorReviewListItemProps> = ({ item }) => {
	const [isPopupVisible, setPopupVisible] = useState(false);

	// Function to toggle the info popup visibility
	const togglePopup = () => {
		setPopupVisible(!isPopupVisible);
	};
	return (
		<div className={cn(styles.box, 'grid grid-cols-12 gap-12')}>
			<div
				className={
					cn(styles.border, 'col-span-4 pr-4') +
					' flex flex-col justify-between'
				}
			>
				<div>
					<div className="flex items-start justify-between">
						<div className="flex flex-col gap-1">
							<Heading size={'h6'} variant={'bold'} className="text-black">
								{item.author}
							</Heading>
							<Paragraph
								size={'small'}
								variant={'regular'}
								className="text-grey"
							>
								{item.industry || item.company}
							</Paragraph>
						</div>
						<div onClick={togglePopup}>
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
							{isPopupVisible && (
								<div className={styles.info}>
									<p>{item.team_size}</p>
									<p>{item.time_used}</p>
								</div>
							)}
						</div>
					</div>
					<div className="flex flex-col grid-cols-2 mt-4 xl:grid gap-x-12 gap-y-6">
						<div>
							<Paragraph className="text-black text-small" variant={'medium'}>
								Ease of use
							</Paragraph>
							<div className="flex items-center gap-2">
								<Progress
									size="sm"
									progress={(item?.ease_of_use / 10) * 100 || 0}
								/>
								<Paragraph className="text-black text-small" variant={'medium'}>
									{item.ease_of_use || 0}
								</Paragraph>
							</div>
						</div>
						<div>
							<Paragraph className="text-black text-small" variant={'medium'}>
								Value for money
							</Paragraph>
							<div className="flex items-center gap-2">
								<Progress
									size="sm"
									progress={(item?.value_for_money / 10) * 100 || 0}
								/>
								<Paragraph className="text-black text-small" variant={'medium'}>
									{item.value_for_money || 0}
								</Paragraph>
							</div>
						</div>
						<div>
							<Paragraph className="text-black text-small" variant={'medium'}>
								Customer Support
							</Paragraph>
							<div className="flex items-center gap-2">
								<Progress
									size="sm"
									progress={(item?.customer_support / 10) * 100 || 0}
								/>
								<Paragraph className="text-black text-small" variant={'medium'}>
									{item.customer_support || 0}
								</Paragraph>
							</div>
						</div>
						<div>
							<Paragraph className="text-black text-small" variant={'medium'}>
								Functionality
							</Paragraph>
							<div className="flex items-center gap-2">
								<Progress
									size="sm"
									progress={(item?.functionality / 10) * 100 || 0}
								/>
								<Paragraph className="text-black text-small" variant={'medium'}>
									{item.functionality || 0}
								</Paragraph>
							</div>
						</div>
					</div>
				</div>
				<Paragraph className="mt-12 text-grey" size={'small'}>
					Reviewed on{' '}
					{new Date(item.added_on).toLocaleDateString('en-US', {
						day: '2-digit',
						month: 'short',
						year: 'numeric',
					})}
				</Paragraph>
			</div>
			<div className="col-span-8">
				<Heading
					variant={'medium'}
					className={'mb-4 text-black text-lg ' + styles.comma}
				>
					{item.title}
				</Heading>
				<Rating rating={item.rating} size={24} />
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

export default VendorReviewListItem;
