import { FC } from 'react';
import Heading from '../../ui/Heading/Heading';
import Paragraph from '../../ui/Paragraph/Paragraph';
import styles from './RecommendationTestimonialBox.module.css';

interface RecommendationTestimonialBoxProps {
	testimonial: {
		id: number;
		title: string;
		desc: string;
		author: string;
	};
}

const RecommendationTestimonialBox: FC<RecommendationTestimonialBoxProps> = ({
	testimonial,
}) => {
	return (
		<div className={styles.box}>
			<Heading
				size={'h3'}
				variant={'semibold'}
				className={'text-white ' + styles.comma}
			>
				{testimonial.title}
			</Heading>
			{/* Desktop Screen */}
			<Paragraph
				size={'lg'}
				variant={'regular'}
				className="hidden py-6 text-white lg:block lg:py-12"
			>
				{testimonial.desc}
			</Paragraph>
			{/* Mobile Screen */}
			<Paragraph
				size={'default'}
				variant={'regular'}
				className="block py-6  text-white lg:hidden lg:py-12"
			>
				{testimonial.desc}
			</Paragraph>
			{/* Desktop Screens */}
			<Paragraph
				size={'lg'}
				variant={'regular'}
				className="hidden text-right text-white lg:block"
			>
				- {testimonial.author}
			</Paragraph>
			{/* Mobile Screen */}
			<Paragraph
				size={'default'}
				variant={'regular'}
				className="block text-right text-white lg:hidden"
			>
				- {testimonial.author}
			</Paragraph>
		</div>
	);
};

export default RecommendationTestimonialBox;
