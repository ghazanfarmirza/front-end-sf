import { cn } from '@/lib/utils/utils';
import Image from 'next/image';
import { FC } from 'react';
import Button from '../ui/Button/Button';
import Heading from '../ui/Heading/Heading';
import Paragraph from '../ui/Paragraph/Paragraph';
import Progress from '../ui/Progress/Progress';
import Rating from '../ui/Rating/Rating';
import styles from './VendorReviewHeaderMobile.module.css';

interface VendorReviewHeaderMobileProps {
	data: {
		totalReviews: number;
		averageRating: number | string;
		ratingCounts: { [key: number]: number };
	};
	setOpen: (open: boolean) => void;
}

const VendorReviewHeaderMobile: FC<VendorReviewHeaderMobileProps> = ({
	setOpen,
	data: { totalReviews, averageRating, ratingCounts },
}) => {
	return (
		<section className="block mt-12 lg:mt-0 lg:hidden">
			<div className="container">
				<div className={cn(styles.box, 'flex flex-col gap-8')}>
					<div className="flex flex-col items-center justify-center gap-3 md:justify-between md:flex-row">
						<div className="text-center md:text-left">
							<Paragraph size={'lg'} variant={'medium'} className="text-black">
								Overall Rating
							</Paragraph>
							<Heading size={'h3'} variant={'semibold'} className="text-black">
								{averageRating}
							</Heading>
							<Rating rating={4} size={30} />
							<Paragraph className="text-grey">
								{totalReviews} Reviews
							</Paragraph>
						</div>
						<Button size={'lg'} variant={'green'} onClick={() => setOpen(true)}>
							Write a Review
						</Button>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 pt-6 gap-4 border border-t-1 border-[#B3B8B9] border-r-0 border-l-0 border-b-0">
						<div>
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
						<div className="pt-6 md:pt-0 border md:border-none border-t-1 border-[#B3B8B9] border-r-0 border-l-0 border-b-0">
							<Paragraph
								size={'lg'}
								variant={'medium'}
								className="mb-4 text-black"
							>
								Satisfaction Score
							</Paragraph>
							<div className="flex flex-col gap-2">
								<div className="flex items-center justify-between gap-5">
									<Paragraph
										className="text-black text-small"
										variant={'medium'}
									>
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
									<Paragraph
										className="text-black text-small"
										variant={'medium'}
									>
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
									<Paragraph
										className="text-black text-small"
										variant={'medium'}
									>
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
									<Paragraph
										className="text-black text-small"
										variant={'medium'}
									>
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
				</div>
			</div>
		</section>
	);
};

export default VendorReviewHeaderMobile;
