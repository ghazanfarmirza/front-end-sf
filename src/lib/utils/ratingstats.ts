interface Review {
	attributes: {
		rating: number;
	};
}

interface RatingStatistics {
	ratingCounts: Record<number, number>;
	averageRating: number;
	totalReviews: number;
}

export function calculateRatingStatistics(reviews: Review[]): RatingStatistics {
	const ratingCounts: Record<number, number> = {
		1: 0,
		2: 0,
		3: 0,
		4: 0,
		5: 0,
	};
	if (reviews?.length === 0)
		return { ratingCounts, averageRating: 0, totalReviews: 0 };

	let sumOfRatings = 0;
	let totalReviews = 0;

	if (Array.isArray(reviews) && reviews.length > 0) {
		totalReviews = reviews.length;

		reviews.forEach((review) => {
			const rating = review.attributes?.rating;
			if (rating >= 1 && rating <= 5) {
				ratingCounts[rating]++;
				sumOfRatings += rating;
			}
		});
	}

	const averageRating = +(sumOfRatings / totalReviews).toFixed(1);

	return { ratingCounts, averageRating, totalReviews };
}
