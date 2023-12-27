'use client';
import { cn } from '@/lib/utils/utils';
import * as ProgressBar from '@radix-ui/react-progress';
import { FC, useEffect, useState } from 'react';
import styles from './HorizontalPageProgress.module.css';

const HorizontalPageProgress: FC = () => {
	const [scrollProgress, setScrollProgress] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const windowHeight = window.innerHeight;
			const documentHeight = document.documentElement.scrollHeight;
			const scrollTop =
				window.scrollY ||
				window.pageYOffset ||
				document.body.scrollTop ||
				document.documentElement.scrollTop;

			// Calculate the scroll progress based on current scroll position
			const calculatedProgress =
				(scrollTop / (documentHeight - windowHeight)) * 100;
			setScrollProgress(calculatedProgress);
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<ProgressBar.Root
			className={cn(styles.ProgressRoot, 'w-24')}
			value={scrollProgress}
		>
			<ProgressBar.Indicator
				className={styles.ProgressIndicator}
				style={{ transform: `translateX(-${100 - scrollProgress}%)` }}
			/>
		</ProgressBar.Root>
	);
};

export default HorizontalPageProgress;
