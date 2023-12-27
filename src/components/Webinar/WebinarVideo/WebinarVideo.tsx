'use client';
import { cn } from '@/lib/utils/utils';
import dynamic from 'next/dynamic';
import { FC } from 'react';
import styles from './WebinarVideo.module.css';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

interface WebinarVideoProps {
	videoId: string;
}

const WebinarVideo: FC<WebinarVideoProps> = ({ videoId = 'rV0YTfzBox8' }) => {
	return (
		<section className={styles.wrapper}>
			<div className="container">
				<div className={cn(styles.video, 'grid grid-cols-12')}>
					<div className="col-span-12 lg:col-span-8 lg:col-start-3">
						<ReactPlayer
							url={`https://www.youtube.com/watch?v=${videoId}`}
							width={'100%'}
							height={550}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default WebinarVideo;
