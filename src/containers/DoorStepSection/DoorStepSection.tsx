import DoorStepBox from '@/components/DoorStepBox/DoorStepBox';
import DoorStepBoxMobile from '@/components/DoorStepBoxMobile/DoorStepBoxMobile';
import Heading from '@/components/ui/Heading/Heading';
import Image from 'next/image';
import { FC } from 'react';

interface DoorStepSectionProps {
	roadMap: {
		title: string;
		step: {
			heading: string;
			text: string;
		}[];
	};
}

const DoorStepSection: FC<DoorStepSectionProps> = ({
	roadMap: { title, step },
}) => {
	return (
		<section className="py-24">
			<div className="container">
				<Heading
					size={'h3'}
					variant={'semibold'}
					className="text-left text-black lg:text-center"
				>
					{title}
				</Heading>
				{/* For Desktop */}
				<div className="hidden grid-cols-12 mt-12 lg:grid ">
					<div className="grid grid-cols-12 col-span-10 col-start-2">
						<div className="flex flex-col justify-around col-span-3">
							<DoorStepBox title={step[0].heading} desc={step[0].text} />
							<DoorStepBox
								className="mt-8"
								title={step[1].heading}
								desc={step[1].text}
							/>
						</div>
						<div className="col-span-6 mt-8">
							<Image
								src="/images/leadgen-lines.svg"
								width={430}
								height={620}
								alt="lines"
								className="mx-auto"
							/>
						</div>
						<div className="flex flex-col col-span-3 align-items-end">
							<DoorStepBox
								className="mt-6"
								title={step[2].heading}
								desc={step[2].text}
							/>
							<DoorStepBox
								className="py-20 xl:py-28"
								title={step[3].heading}
								desc={step[3].text}
							/>
							<DoorStepBox
								className="mt-12"
								title={step[4].heading}
								desc={step[4].text}
							/>
						</div>
					</div>
				</div>
				{/* For Mobile */}
				<div className="grid grid-cols-1 gap-10 mt-12 lg:hidden md:grid-cols-2">
					{step.map((item, index) => (
						<DoorStepBoxMobile
							key={index}
							boxNumber={index + 1}
							title={item.heading}
							desc={item.text}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default DoorStepSection;
