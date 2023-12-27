import Description from '@/components/ui/Description/Description';
import Image from 'next/image';
import { FC } from 'react';
import styles from './AboutContactBox.module.css';

interface AboutContactBoxProps {
	icon: any;
	text: string;
}

const AboutContactBox: FC<AboutContactBoxProps> = ({ icon, text }) => {
	return (
		<div className={styles.contact_box}>
			<div className={styles.image}>
				<Image src={icon} alt="about-icon" width={28} height={28} />
			</div>
			<div className={styles.box}>
				<Description className="text-black font-semibold">{text}</Description>
			</div>
		</div>
	);
};

export default AboutContactBox;
