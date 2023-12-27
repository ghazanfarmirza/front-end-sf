'use client';
import { cn } from '@/lib/utils/utils';
import { FC } from 'react';
// import ReactPlayer from 'react-player';
import dynamic from 'next/dynamic';
import Heading from '../../ui/Heading/Heading';
import styles from './WebinarBanner.module.css';
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

interface WebinarBannerProps {
	videoId: string;
}

const WebinarBanner: FC<WebinarBannerProps> = ({ videoId = 'rV0YTfzBox8' }) => {
	return (
		<section className={styles.banner}>
			<div className="container">
				<div className="grid items-center grid-cols-12 gap-8 lg:gap-0">
					<div
						className={cn(
							styles.video,
							'order-2 lg:order-1 col-span-12 lg:col-span-5 lg:col-start-2'
						)}
					>
						<ReactPlayer
							url={`https://www.youtube.com/watch?v=${videoId}`}
							width={'100%'}
						/>
					</div>
					<div
						className={cn(
							styles.arrow,
							'order-1 lg:order-2 col-span-12 lg:col-span-4 lg:col-start-9'
						)}
					>
						<Heading
							size={'h3'}
							variant={'semibold'}
							className="text-left text-black lg:text-center"
						>
							What to expect from this
							<span className="text-green"> review</span>
						</Heading>
					</div>
				</div>
			</div>
		</section>
	);
};

export default WebinarBanner;
