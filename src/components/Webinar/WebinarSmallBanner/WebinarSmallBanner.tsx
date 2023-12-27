import { cn } from '@/lib/utils/utils';
import { FC } from 'react';
import Button from '../../ui/Button/Button';
import Heading from '../../ui/Heading/Heading';
import styles from './WebinarSmallBanner.module.css';

interface WebinarSmallBannerProps {
	title: string;
	buttonText?: string;
}

const WebinarSmallBanner: FC<WebinarSmallBannerProps> = ({
	title,
	buttonText,
}) => {
	return (
		<section className={cn(styles.banner)}>
			<div className="container">
				<div className="grid grid-cols-12 gap-6">
					<Heading
						size={'h4'}
						className="col-span-12 text-white md:col-span-7"
						variant={'medium'}
					>
						{title}
					</Heading>
					<div className="inline-flex items-center justify-end col-span-12 md:col-span-5">
						<Button size={'default'} variant={'green'}>
							{buttonText || 'Get Free Advice'}
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default WebinarSmallBanner;
