'use client';
import { cn } from '@/lib/utils/utils';
import * as Slider from '@radix-ui/react-slider';
import { FC, useState } from 'react';
import Paragraph from '../../Paragraph/Paragraph';
import styles from './InputProgress.module.css';

interface InputProgressProps {
	title: string;
	value: any;
	onValueChange: (newValue: any) => void;
}

const InputProgress: FC<InputProgressProps> = ({
	title,
	value,
	onValueChange,
}) => {
	const [sliderValue, setSliderValue] = useState<any>([10]); // Initialize the slider value with a default

	const handleSliderChange = (newValue: any) => {
		if (onValueChange) {
			onValueChange(newValue); // Call the parent's callback with the new value
		}
	};

	return (
		<div className="flex flex-col w-full gap-2 mb-4">
			<Paragraph className="text-white" variant={'medium'}>
				{title}
			</Paragraph>
			<div className="flex items-center gap-5">
				<Slider.Root
					className={cn(styles.SliderRoot, 'flex-1')}
					defaultValue={[value]}
					max={10}
					step={1}
					onValueChange={handleSliderChange}
				>
					<Slider.Track className={styles.SliderTrack}>
						<Slider.Range className={styles.SliderRange} />
					</Slider.Track>
					<Slider.Thumb className={styles.SliderThumb} aria-label="Volume" />
				</Slider.Root>
				<p className="font-semibold text-white text-xsmall">{value}</p>
			</div>
		</div>
	);
};

export default InputProgress;
