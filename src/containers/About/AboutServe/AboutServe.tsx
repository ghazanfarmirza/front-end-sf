'use client';
import AboutServeBox from '@/components/About/AboutServeBox/AboutServeBox';
import Heading from '@/components/ui/Heading/Heading';
import { FC } from 'react';
import styles from './AboutServe.module.css';

interface AboutServeProps {
	data: any;
}

const AboutServe: FC<AboutServeProps> = ({ data }: AboutServeProps) => {
	return (
		<section className={styles.wrapper}>
			<div className="container">
				<Heading
					size={'h4'}
					variant={'semibold'}
					className="text-left text-white lg:text-center"
				>
					{data?.title}
				</Heading>
				<div className="flex grid-cols-12 mt-12 lg:grid">
					<div className="flex flex-col grid-cols-2 col-span-10 col-start-2 gap-12 md:grid">
						{data?.about_serve_box.map((serve: any) => (
							<AboutServeBox key={serve.id} data={serve} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutServe;
