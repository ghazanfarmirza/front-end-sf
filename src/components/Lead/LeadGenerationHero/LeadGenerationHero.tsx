import Heading from '@/components/ui/Heading/Heading';
import Paragraph from '@/components/ui/Paragraph/Paragraph';
import { FC } from 'react';
import styles from './LeadGenerationHero.module.css';

interface LeadGenerationHeroProps {}

const LeadGenerationHero: FC<LeadGenerationHeroProps> = () => {
	return (
		<section className={styles.hero}>
			<div className="container">
				<Heading
					size={'h1'}
					variant={'bold'}
					className="text-left text-white lg:text-center text-3xl lg:text-4xl"
				>
					Scale Your<span className="text-green"> Lead Generation </span>Efforts
				</Heading>
				<Paragraph
					size={'lg'}
					className="mt-4 text-left text-white lg:text-center"
				>
					Get people talking about your business with software
				</Paragraph>
			</div>
		</section>
	);
};

export default LeadGenerationHero;
