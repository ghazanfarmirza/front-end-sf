'use client';
import ClientReviewBoxMobile from '@/components/ClientReviewBoxMobile/ClientReviewBoxMobile';
import ClientReviewBox from '@/components/Review/ClientReviewBox/ClientReviewBox';
import ReviewForm from '@/components/ui/Dialogs/ReviewForm/ReviewForm';
import Heading from '@/components/ui/Heading/Heading';
import RightArrowDownLink from '@/components/ui/Link/RightArrowLink/RightArrowDownLink/RightArrowDownLink';
import { calculateRatingStatistics } from '@/lib/utils/ratingstats';
import { usePathname } from 'next/navigation';
import { FC, useState } from 'react';
import VendorReviewLists from '../VendorReviewLists/VendorReviewLists';
import VendorReviewListsMobile from '../VendorReviewListsMobile/VendorReviewListsMobile';

interface VendorReviewsSectionProps {
	list: {
		id: number;
		attributes: {
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
	}[];
	vendor: {
		id: number;
		name: string;
		logo: { image_url: string; title: string };
	};
	totalReviews: number;
}

const VendorReviewsSection: FC<VendorReviewsSectionProps> = ({
	list: reviews,
	vendor,
	totalReviews,
}) => {
	const path = usePathname().split('/');
	const { ratingCounts, averageRating } = calculateRatingStatistics(reviews);
	const [open, setOpen] = useState(false);
	return (
		<>
			<section>
				<Heading
					size={'h2'}
					variant={'semibold'}
					className="text-left text-black lg:text-center mt-10"
				>
					{vendor.name} Reviews
				</Heading>
				<ClientReviewBox
					setOpen={setOpen}
					data={{ totalReviews, averageRating, ratingCounts }}
				/>
				<ClientReviewBoxMobile
					setOpen={setOpen}
					data={{ totalReviews, averageRating, ratingCounts }}
				/>
				<VendorReviewLists list={reviews.slice(0, 10)} />
				<VendorReviewListsMobile list={reviews.slice(0, 10)} />
				<div className="flex justify-center mb-16">
					<RightArrowDownLink
						link={`/${path[1]}/${path[2]}/reviews`}
						title={`View All ${totalReviews} Reviews`}
					/>
				</div>
			</section>
			<ReviewForm open={open} onClose={() => setOpen(false)} vendor={vendor} />
		</>
	);
};

export default VendorReviewsSection;
