import Benefit from '@/components/Benefits/Benefit/Benefit';
import Heading from '@/components/ui/Heading/Heading';
import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './BenefitsPoints.module.css';
interface BenefitsPointsProps {
	benefitPoints: any;
}

const BenefitsPoints: FC<BenefitsPointsProps> = ({ benefitPoints }) => {
	return (
		<div className={styles.benefit__wrapper}>
			<Heading
				size={'h2'}
				variant={'medium'}
				className="max-w-screen-xl pt-32 mx-auto mt-8 text-center capitalize text-dark-blue"
			>
				Then, we Have Everything you Need to make the right Decision in{' '}
				<span className={styles.leaf}>one place</span>
			</Heading>
			<div className="grid grid-cols-4 gap-8">
				{benefitPoints.map((benefit: any) => (
					<Benefit
						key={uuidv4()}
						icon={benefit.icon?.data?.attributes?.url}
						title={benefit.title}
						text={benefit.text}
					/>
				))}
			</div>
		</div>
	);
};

export default BenefitsPoints;
