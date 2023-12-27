import { cn } from '@/lib/utils/utils';
import Image from 'next/image';
import { FC } from 'react';
import Button from '../ui/Button/Button';
import Heading from '../ui/Heading/Heading';
import Paragraph from '../ui/Paragraph/Paragraph';
import Progress from '../ui/Progress/Progress';
import Rating from '../ui/Rating/Rating';
import styles from './ClientReviewBoxMobile.module.css';

interface ClientReviewBoxMobileProps {
	data: {
		totalReviews: number;
		averageRating: number;
		ratingCounts: { [key: number]: number };
	};
	setOpen: (open: boolean) => void;
}

const ClientReviewBoxMobile: FC<ClientReviewBoxMobileProps> = ({
	setOpen,
	data: { totalReviews, averageRating, ratingCounts },
}) => {
	return (
		<div className="block mt-12 mb-8 xl:hidden">
			<div
				className={cn(
					styles.box,
					'flex flex-col items-stretch justify-center w-full'
				)}
			>
				<div className="flex flex-col items-stretch justify-center grid-cols-2 text-center md:items-center md:text-left md:grid">
					<div className="flex flex-col items-center justify-center gap-1 px-16 py-8 md:block md:px-0 md:py-0">
						<Paragraph size={'lg'} variant={'medium'} className="text-black">
							Overall Rating
						</Paragraph>
						<Heading
							size={'h3'}
							variant={'semibold'}
							className="mt-2 text-black"
						>
							{averageRating}
						</Heading>
						<Rating rating={4} size={30} />
						<Paragraph className="text-grey">{totalReviews} Reviews</Paragraph>
						<Button
							size={'lg'}
							variant={'green'}
							className="block mt-2 md:hidden"
						>
							Write a Review
						</Button>
					</div>
					<div className="px-20 md:px-0 py-8 md:py-0 border md:border-none border-t-1 border-b-0 border-l-0 border-r-0 border-[#10292d40]">
						<Paragraph
							size={'lg'}
							variant={'medium'}
							className="mb-4 text-center text-black"
						>
							Rating Distribution
						</Paragraph>
						<div className="flex flex-col items-center justify-center md:items-end">
							{Object.keys(ratingCounts).map((rating) => (
								<div key={rating} className="flex items-center gap-2">
									<Paragraph
										size={'lg'}
										variant={'medium'}
										className="text-black w-3 text-center"
									>
										{rating}
									</Paragraph>
									<Image
										src="/images/star.svg"
										alt="star"
										width={20}
										height={20}
									/>
									<Progress
										progress={
											(ratingCounts[Number(rating)] / totalReviews) * 100
										}
										size={'lg'}
									/>
									<Paragraph className="text-black">
										{ratingCounts[Number(rating)]}
									</Paragraph>
								</div>
							))}
						</div>
					</div>
				</div>
				<div className="hidden md:flex items-center justify-between gap-8 mt-5 pt-5 border border-t-1 border-b-0 border-l-0 border-r-0 border-[#10292d40]">
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

export default ClientReviewBoxMobile;
