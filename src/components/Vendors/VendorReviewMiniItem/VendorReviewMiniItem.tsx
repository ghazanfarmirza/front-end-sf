import Heading from '@/components/ui/Heading/Heading';
import Paragraph from '@/components/ui/Paragraph/Paragraph';
import Progress from '@/components/ui/Progress/Progress';
import Rating from '@/components/ui/Rating/Rating';
import { cn } from '@/lib/utils/utils';
import { FC } from 'react';
import styles from './VendorReviewMiniItem.module.css';

interface VendorReviewMiniItemProps {
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

const VendorReviewMiniItem: FC<VendorReviewMiniItemProps> = ({ item }) => {
	return (
		<div className={cn(styles.box, 'flex flex-col')}>
			<div className="flex flex-col grid-cols-12 gap-10 mb-8 md:grid">
				<div className="col-span-12 md:col-span-9">
					<Heading
						variant={'medium'}
						className={
							'hidden lg:block mb-2 md:mb-4 text-black text-lg ' + styles.comma
						}
					>
						{item.title}
					</Heading>
					<Heading
						variant={'medium'}
						className={'block lg:hidden mb-2 md:mb-4 text-black text-lg'}
					>
						{item.title}
					</Heading>
					<Rating rating={item.rating} size={23} />
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
				<div className="col-span-12 md:col-span-3 justify-self-start md:justify-self-end">
					<div className="flex flex-row justify-between gap-2 md:flex-col md:gap-0">
						<Paragraph className="text-black text-small" variant={'medium'}>
							Ease of use
						</Paragraph>
						<div className="flex items-center gap-2">
							<Progress
								size="md"
								progress={(item.ease_of_use / 10) * 100 || 0}
							/>
							<Paragraph className="text-black text-small" variant={'medium'}>
								{item.ease_of_use}
							</Paragraph>
						</div>
					</div>
					<div className="flex flex-row justify-between gap-2 md:flex-col md:gap-0">
						<Paragraph className="text-black text-small" variant={'medium'}>
							Value for money
						</Paragraph>
						<div className="flex items-center gap-2">
							<Progress
								size="md"
								progress={(item.value_for_money / 10) * 100 || 0}
							/>
							<Paragraph className="text-black text-small" variant={'medium'}>
								{item.value_for_money}
							</Paragraph>
						</div>
					</div>
					<div className="flex flex-row justify-between gap-2 md:flex-col md:gap-0">
						<Paragraph className="text-black text-small" variant={'medium'}>
							Customer Support
						</Paragraph>
						<div className="flex items-center gap-2">
							<Progress
								size="md"
								progress={(item.customer_support / 10) * 100 || 0}
							/>
							<Paragraph className="text-black text-small" variant={'medium'}>
								{item.customer_support}
							</Paragraph>
						</div>
					</div>
					<div className="flex flex-row justify-between gap-2 md:flex-col md:gap-0">
						<Paragraph className="text-black text-small" variant={'medium'}>
							Functionality
						</Paragraph>
						<div className="flex items-center gap-2">
							<Progress
								size="md"
								progress={(item.functionality / 10) * 100 || 0}
							/>
							<Paragraph className="text-black text-small" variant={'medium'}>
								{item.functionality}
							</Paragraph>
						</div>
					</div>
				</div>
			</div>
			<div className={cn(styles.border, 'pt-4')}>
				<div className="flex flex-col gap-1">
					<Heading size={'h6'} variant={'bold'} className="text-black">
						{item.author}
					</Heading>
					<Paragraph size={'small'} variant={'regular'} className="text-grey">
						{item.industry || item.company}, {item.team_size} employees
					</Paragraph>
					<Paragraph size={'small'} variant={'regular'} className="text-grey">
						{item.time_used}
					</Paragraph>
				</div>

				<div className="flex items-start md:justify-end">
					<Paragraph className="text-grey" size={'small'}>
						{new Date(item.added_on).toLocaleDateString('en-US', {
							day: '2-digit',
							month: 'short',
							year: 'numeric',
						})}
					</Paragraph>
				</div>
			</div>
		</div>
	);
};

export default VendorReviewMiniItem;
