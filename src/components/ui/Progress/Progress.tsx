'use client';
import { cn } from '@/lib/utils/utils';
import * as ProgressBar from '@radix-ui/react-progress';
import { FC } from 'react';
import styles from './Progress.module.css';

interface ProgressProps {
	progress: number;
	size: 'sm' | 'md' | 'lg';
}

const Progress: FC<ProgressProps> = ({ progress, size }) => {
	switch (size) {
		case 'sm':
			return (
				<ProgressBar.Root
					className={cn(styles.ProgressRoot, 'w-24')}
					value={progress}
				>
					<ProgressBar.Indicator
						className={styles.ProgressIndicator}
						style={{
							transform: `translateX(${progress}%)`,
						}}
					/>
				</ProgressBar.Root>
			);
		case 'lg':
			return (
				<ProgressBar.Root
					className={cn(styles.ProgressRoot, 'w-52')}
					value={progress}
				>
					<ProgressBar.Indicator
						className={styles.ProgressIndicator}
						style={{
							transform: `translateX(${progress}%)`,
						}}
					/>
				</ProgressBar.Root>
			);
		case 'md':
			return (
				<ProgressBar.Root
					className={cn(styles.ProgressRoot, 'w-32')}
					value={progress}
				>
					<ProgressBar.Indicator
						className={styles.ProgressIndicator}
						style={{
							transform: `translateX(${progress}%)`,
						}}
					/>
				</ProgressBar.Root>
			);
		default:
			return <></>;
	}
};

export default Progress;
