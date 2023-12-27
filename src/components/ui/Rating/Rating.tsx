'use client';
import { FC } from 'react';
import ReactStars from 'react-stars';

interface RatingProps {
	rating: number;
	size?: number;
}

const Rating: FC<RatingProps> = ({ rating, size }) => {
	return (
		<ReactStars
			count={5}
			value={rating}
			edit={false}
			size={size ?? 19}
			color1={'#c8c8c8'}
			color2={'#faa40f'}
			className="flex items-center gap-1"
		/>
	);
};

export default Rating;
