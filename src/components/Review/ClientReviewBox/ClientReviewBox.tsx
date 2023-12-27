import Button from '@/components/ui/Button/Button';
import Heading from '@/components/ui/Heading/Heading';
import Paragraph from '@/components/ui/Paragraph/Paragraph';
import Progress from '@/components/ui/Progress/Progress';
import Rating from '@/components/ui/Rating/Rating';
import { cn } from '@/lib/utils/utils';
import Image from 'next/image';
import { FC } from 'react';
import styles from './ClientReviewBox.module.css';

interface ClientReviewBoxProps {
	data: {
		totalReviews: number;
		averageRating: number;
		ratingCounts: { [key: number]: number };
	};

	setOpen: (open: boolean) => void;
}

const ClientReviewBox: FC<ClientReviewBoxProps> = ({
	data: { totalReviews, averageRating, ratingCounts },
	setOpen,
}) => {
	return (
		<div className="hidden mt-12 mb-8 xl:block">
			<div className={cn(styles.box, 'flex items-center justify-evenly')}>
				<div className="flex flex-col items-center justify-center gap-3">
					<Paragraph size={'lg'} variant={'medium'} className="text-black">
						Overall Rating
					</Paragraph>
					<Heading size={'h3'} variant={'semibold'} className="text-black">
						{averageRating}
					</Heading>
					<Rating rating={4} size={30} />
					<Paragraph className="text-grey">{totalReviews} Reviews</Paragraph>
				</div>
				<div className={cn(styles.border, ' px-16')}>
					<Paragraph size={'lg'} variant={'medium'} className="mb-4 text-black">
						Rating Distribution
					</Paragraph>
					<div className="flex flex-col">
						{Object.entries(ratingCounts).map(([rating, count]) => (
							<div className="flex items-center gap-2" key={rating}>
								<Paragraph className="text-black w-3 text-center">
									{rating}
								</Paragraph>
								<Image
									src={'/images/star.svg'}
									alt="star"
									width={20}
									height={20}
								/>
								<Progress size={'lg'} progress={(count / totalReviews) * 100} />
								<Paragraph className="text-black">({count})</Paragraph>
							</div>
						))}
					</div>
				</div>
				<div className="flex flex-col items-center justify-center gap-8">
					<Paragraph size={'lg'} variant={'medium'} className="text-black">
						Share your experience
					</Paragraph>
					<Button size={'lg'} variant={'green'} onClick={() => setOpen(true)}>
						Write a Review
					</Button>
				</div>
			</div>
		</div>
	);
};

export default ClientReviewBox;
