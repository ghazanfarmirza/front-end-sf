import Description from '@/components/ui/Description/Description';
import Heading from '@/components/ui/Heading/Heading';
import Image from 'next/image';
import { FC } from 'react';
import styles from './AboutInfo.module.css';

interface AboutInfoProps {
	data: any;
}

const AboutInfo: FC<AboutInfoProps> = ({ data }: AboutInfoProps) => {
	const { paragraph, title, image } = data;
	return (
		<section className="py-16 lg:py-20">
			<div className="container">
				<div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-14">
					<div className={styles.image}>
						<Image
							src={image?.data[0]?.attributes?.url}
							alt="about"
							width={500}
							height={400}
						/>
					</div>
					<div className="">
						<Heading size={'h3'} variant={'semibold'} className="text-black">
							{title}
						</Heading>
						<Description className="py-8 text-black">{paragraph}</Description>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutInfo;
