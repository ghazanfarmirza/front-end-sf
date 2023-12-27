import { FC } from 'react';
import styles from './BenefitTestimonial.module.css';

interface BenefitTestimonialProps {
	text: string;
	position: string;
}

const BenefitTestimonial: FC<BenefitTestimonialProps> = ({
	text,
	position,
}) => {
	return (
		<div className={styles.testimonial + ' ' + styles[position]}>
			<p className="font-semibold text-black">“{text}”</p>
		</div>
	);
};

export default BenefitTestimonial;
