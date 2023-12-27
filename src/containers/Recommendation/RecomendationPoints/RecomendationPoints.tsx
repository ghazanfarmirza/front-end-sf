import NumberBox from '@/components/NumberBox/NumberBox';
import Heading from '@/components/ui/Heading/Heading';
import { cn } from '@/lib/utils/utils';
import { FC } from 'react';
import styles from './RecomendationPoints.module.css';

interface RecomendationPointsProps {}

const RecomendationPoints: FC<RecomendationPointsProps> = () => {
	return (
		<section className="mt-5">
			<div className="container">
				<Heading
					size={'h3'}
					variant={'semibold'}
					className="text-left lg:text-center text-dark-blue"
				>
					Get the Right Software with Every Search
				</Heading>
				<Heading
					size={'h5'}
					variant={'regular'}
					className="mt-8 text-left text-black lg:text-center"
				>
					We promise 3 months’ worth of painstaking research condensed into a
					quick call and a few clicks! Try us…we’re not kidding.
				</Heading>
				<div
					className={cn(
						styles.number_wrapper,
						'flex flex-col px-8 md:px-0 items-center md:items-stretch lg:block'
					)}
				>
					<div className="flex items-center justify-start">
						<NumberBox
							data={{
								number: 1,
								title: 'Divulge',
								desc: 'Tell us about yourself, your needs, and your business.',
							}}
						/>
					</div>
					<div className="flex items-center justify-center mt-20 lg:mt-0">
						<NumberBox
							data={{
								number: 2,
								title: 'Consult',
								desc: 'Listen as our experienced consultant presents a carefully curated list of the best software apps suited to your workflow. ',
							}}
						/>
					</div>
					<div className="flex items-center justify-end mt-40 lg:mt-0">
						<NumberBox
							data={{
								number: 3,
								title: 'Consider',
								desc: 'Listen as our experienced consultant presents a carefully curated list of the best software apps suited to your workflow. ',
							}}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default RecomendationPoints;
