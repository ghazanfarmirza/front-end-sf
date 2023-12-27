import Heading from '@/components/ui/Heading/Heading';
import RightArrowLink from '@/components/ui/Link/RightArrowLink/RightArrowLink';
import TickList from '@/components/ui/TickList/TickList';
import { cn } from '@/lib/utils/utils';
import Image from 'next/image';
import { FC } from 'react';
import styles from './FreeTrailGrid.module.css';

interface FreeTrailGridProps {}

const FreeTrailGrid: FC<FreeTrailGridProps> = () => {
	return (
		<section className={styles.wrapper}>
			<div className="container">
				<Heading
					size={'h3'}
					variant={'semibold'}
					className="text-left lg:text-center text-dark-blue"
				>
					Get a Free Trial
				</Heading>
				<div className="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:gap-16 lg:mt-12 lg:grid-cols-4">
					<div className={cn(styles.grid_box, 'flex flex-col')}>
						<Image
							className={styles.image}
							src="/images/advancedmd-logo.svg"
							alt="icon"
							width={170}
							height={35}
						/>
						<div className="mt-8 mb-6 lg:mb-10 lg:mt-14">
							<TickList list={['14 day free trial', 'From $10/user/month']} />
						</div>
						<RightArrowLink link="#" title="Try Free Now" />
					</div>
					<div className={cn(styles.grid_box, 'flex flex-col')}>
						<Image
							src="/images/advancedmd-logo.svg"
							alt="icon"
							width={170}
							height={35}
							className={styles.image}
						/>
						<div className="mt-8 mb-6 lg:mb-10 lg:mt-14">
							<TickList list={['14 day free trial', 'From $8/user/month']} />
						</div>
						<RightArrowLink link="#" title="Try Free Now" />
					</div>
					<div className={cn(styles.grid_box, 'flex flex-col')}>
						<Image
							src="/images/advancedmd-logo.svg"
							alt="icon"
							width={170}
							height={35}
							className={styles.image}
						/>
						<div className="mt-8 mb-6 lg:mb-10 lg:mt-14">
							<TickList list={['30 day free trial', 'From $9/user/month']} />
						</div>
						<RightArrowLink link="#" title="Try Free Now" />
					</div>
					<div className={cn(styles.grid_box, 'flex flex-col')}>
						<Image
							src="/images/advancedmd-logo.svg"
							alt="icon"
							width={170}
							height={35}
							className={styles.image}
						/>
						<div className="mt-8 mb-6 lg:mb-10 lg:mt-14">
							<TickList list={['30 day free trial', 'From $24/user/month']} />
						</div>
						<RightArrowLink link="#" title="Try Free Now" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default FreeTrailGrid;
