'use client';
import { FC, useState } from 'react';
import ReactStars from 'react-stars';

interface InputRatingProps {
	onRatingChange: (newValue: any) => void;
}

const InputRating: FC<InputRatingProps> = ({ onRatingChange }) => {
	const [rating, setRating] = useState(0);

	const handleRatingChange = (newRating: number) => {
		setRating(newRating);
		if (onRatingChange) {
			onRatingChange(newRating); // Call the parent's callback with the new value
		}
	};

	return (
		<ReactStars
			count={5}
			size={30}
			color1={'#fff'}
			color2={'#faa40f'}
			className="flex items-center gap-1"
			onChange={handleRatingChange}
			value={rating}
		/>
	);
};

export default InputRating;
