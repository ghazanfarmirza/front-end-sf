import Button from '@/components/ui/Button/Button';
import Heading from '@/components/ui/Heading/Heading';
import Paragraph from '@/components/ui/Paragraph/Paragraph';
import Progress from '@/components/ui/Progress/Progress';
import Rating from '@/components/ui/Rating/Rating';
import { cn } from '@/lib/utils/utils';
import Image from 'next/image';
import { FC } from 'react';
import styles from './VendorReviewHeader.module.css';

interface VendorReviewHeaderProps {
	data: {
		totalReviews: number;
		averageRating: number | string;
		ratingCounts: { [key: number]: number };
	};
	setOpen: (open: boolean) => void;
}

const VendorReviewHeader: FC<VendorReviewHeaderProps> = ({
	setOpen,
	data: { totalReviews, averageRating, ratingCounts },
}) => {
	return (
		<section className="hidden lg:block">
			<div className="container">
				<div className={cn(styles.box, 'flex items-start justify-evenly')}>
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
						<Paragraph
							size={'lg'}
							variant={'medium'}
							className="mb-4 text-black"
						>
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
									<Progress
										size={'lg'}
										progress={(count / totalReviews) * 100}
									/>
									<Paragraph className="text-black">
										({count && count})
									</Paragraph>
								</div>
							))}
						</div>
					</div>
					<div>
						<Paragraph
							size={'lg'}
							variant={'medium'}
							className="mb-4 text-black"
						>
							Satisfaction Score
						</Paragraph>
						<div className="flex flex-col gap-3">
							<div className="flex items-center justify-between gap-5">
								<Paragraph className="text-black text-small" variant={'medium'}>
									Ease of use
								</Paragraph>
								<div className="flex items-center gap-2">
									<Progress size="sm" progress={90} />
									<Paragraph
										className="text-black text-small"
										variant={'medium'}
									>
										8
									</Paragraph>
								</div>
							</div>
							<div className="flex items-center justify-between gap-5">
								<Paragraph className="text-black text-small" variant={'medium'}>
									Value for money
								</Paragraph>
								<div className="flex items-center gap-2">
									<Progress size="sm" progress={56} />
									<Paragraph
										className="text-black text-small"
										variant={'medium'}
									>
										8
									</Paragraph>
								</div>
							</div>
							<div className="flex items-center justify-between gap-5">
								<Paragraph className="text-black text-small" variant={'medium'}>
									Customer Support
								</Paragraph>
								<div className="flex items-center gap-2">
									<Progress size="sm" progress={62} />
									<Paragraph
										className="text-black text-small"
										variant={'medium'}
									>
										8
									</Paragraph>
								</div>
							</div>
							<div className="flex items-center justify-between gap-5">
								<Paragraph className="text-black text-small" variant={'medium'}>
									Functionality
								</Paragraph>
								<div className="flex items-center gap-2">
									<Progress size="sm" progress={42} />
									<Paragraph
										className="text-black text-small"
										variant={'medium'}
									>
										8
									</Paragraph>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="flex items-center justify-center mt-8">
					<Button size={'lg'} variant={'green'} onClick={() => setOpen(true)}>
						Write a Review
					</Button>
				</div>
			</div>
		</section>
	);
};

export default VendorReviewHeader;
