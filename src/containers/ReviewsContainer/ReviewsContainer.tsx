'use client';
import Filters from '@/components/Filter/Filters/Filters';
import FiltersMobile from '@/components/FiltersMobile/FiltersMobile';
import SortBox from '@/components/SortBox/SortBox';
import VendorReviewHeaderMobile from '@/components/VendorReviewHeaderMobile/VendorReviewHeaderMobile';
import VendorReviewHeader from '@/components/Vendors/VendorReviewHeader/VendorReviewHeader';
import VendorReviewsSectionMini from '@/components/Vendors/VendorReviewsSectionMini/VendorReviewsSectionMini';
import ReviewForm from '@/components/ui/Dialogs/ReviewForm/ReviewForm';
import RightArrowDownLink from '@/components/ui/Link/RightArrowLink/RightArrowDownLink/RightArrowDownLink';
import { useState } from 'react';

interface pageProps {
	allReviews: any;
	reviewsInfo: any;
	vendorInfo: any;
}

const ReviewsContainer = ({
	allReviews,
	vendorInfo,
	reviewsInfo,
}: pageProps) => {
	const [open, setOpen] = useState(false);
	const [reviews, setReviews] = useState<any>(allReviews.slice(0, 50));

	const { ratingCounts, averageRating, totalReviews } = reviewsInfo;

	const handleLoadMore = () => {
		setReviews(allReviews); // Change the limit to 1000 to load all reviews
	};

	return (
		<>
			{/* For Desktop  */}
			<div className="h-12"></div>
			<VendorReviewHeader
				setOpen={setOpen}
				data={{ totalReviews, averageRating, ratingCounts }}
			/>

			{/* For Mobile */}
			<VendorReviewHeaderMobile
				setOpen={setOpen}
				data={{ totalReviews, averageRating, ratingCounts }}
			/>
			{/* For Desktop */}
			<section className="hidden my-24 lg:block">
				<div className="container">
					<div className="grid grid-cols-12 gap-8">
						<div className="col-span-3">
							<Filters />
						</div>
						<div className="col-span-9">
							<SortBox />
							{reviews.length > 0 && (
								<VendorReviewsSectionMini list={reviews} />
							)}
							<div className="flex items-center justify-center mt-12">
								{reviews.length > 50 || (
									<button onClick={handleLoadMore}>
										<RightArrowDownLink title="Load more Reviews" />
									</button>
								)}
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* For Mobile */}
			<section className="block my-16 lg:hidden ">
				<div className="container">
					<FiltersMobile />
					{reviews.length > 0 && <VendorReviewsSectionMini list={reviews} />}
					<div className="flex items-center justify-center mt-6 md:mt-12">
						{reviews.length > 50 || (
							<button onClick={handleLoadMore}>
								<RightArrowDownLink title="Load more Products" />
							</button>
						)}
					</div>
				</div>
			</section>
			<ReviewForm
				open={open}
				onClose={() => setOpen(false)}
				vendor={vendorInfo}
			/>
		</>
	);
};

export default ReviewsContainer;
