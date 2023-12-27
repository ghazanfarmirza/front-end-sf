import { FC } from 'react';
import Header from '../../../components/Header/Header';
import HeroContent from '../HeroContent/HeroContent';
import style from './Hero.module.css';

const Hero: FC = () => {
	return (
		<>
			<Header sticky={true} />
			<section className={style.hero}>
				<HeroContent />
			</section>
		</>
	);
};

export default Hero;
