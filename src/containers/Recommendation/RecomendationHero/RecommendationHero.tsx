import RecommendationForm from '@/components/Forms/RecommendationForm/RecommendationForm';
import Heading from '@/components/ui/Heading/Heading';
import { FC } from 'react';
import styles from './RecomendationHero.module.css';

interface RecommendationHeroProps {}

const RecommendationHero: FC<RecommendationHeroProps> = () => {
	return (
		<section className={styles.hero}>
			<div className="container">
				<div className="max-w-screen-lg mx-auto">
					<Heading
						size={'h2'}
						variant={'medium'}
						className="text-left text-white lg:text-center"
					>
						Get Your Free Software Recommendation By Experts Now
					</Heading>

					<RecommendationForm />
				</div>
			</div>
		</section>
	);
};

export default RecommendationHero;
