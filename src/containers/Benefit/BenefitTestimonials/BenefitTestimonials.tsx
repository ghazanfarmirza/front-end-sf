import BenefitTestimonial from '@/components/Benefits/BenefitTestimonial/BenefitTestimonial';
import { FC } from 'react';

interface BenefitTestimonialsProps {
	testimonials: any[];
}

const BenefitTestimonials: FC<BenefitTestimonialsProps> = ({
	testimonials,
}) => {
	return (
		<div className="flex items-start gap-8 mt-8 justify-evenly">
			{testimonials.map((testimonial: any) => (
				<BenefitTestimonial
					key={testimonial.id}
					text={testimonial.text}
					position={testimonial.position}
				/>
			))}
		</div>
	);
};

export default BenefitTestimonials;
