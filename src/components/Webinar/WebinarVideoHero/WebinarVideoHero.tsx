'use client';
import { cn } from '@/lib/utils/utils';
import { FC } from 'react';
import Heading from '../../ui/Heading/Heading';
import styles from './WebinarVideoHero.module.css';

interface WebinarVideoHeroProps {
	heading: string;
	heading_green: string;
}

const WebinarVideoHero: FC<WebinarVideoHeroProps> = ({
	heading,
	heading_green,
}) => {
	return (
		<section className={styles.hero}>
			<div className="container">
				<Heading
					size={'h1'}
					variant={'semibold'}
					className={cn(
						styles.heading,
						'mx-auto text-left lg:text-center text-white text-2xl lg:text-3xl'
					)}
				>
					{heading}
					<br />
					<span className="font-bold text-green">{heading_green}</span>
				</Heading>
			</div>
		</section>
	);
};

export default WebinarVideoHero;
