'use client';
import { cn } from '@/lib/utils/utils';
import * as ProgressBar from '@radix-ui/react-progress';
import { FC } from 'react';
import styles from './PageProgress.module.css';

interface PageProgressProps {
	progress: number;
}

const PageProgress: FC<PageProgressProps> = ({ progress }) => {
	return (
		<ProgressBar.Root
			className={cn(styles.ProgressRoot, 'w-24')}
			value={progress}
		>
			<ProgressBar.Indicator
				className={styles.ProgressIndicator}
				style={{ transform: `translateX(-${100 - progress}%)` }}
			/>
		</ProgressBar.Root>
	);
};

export default PageProgress;
