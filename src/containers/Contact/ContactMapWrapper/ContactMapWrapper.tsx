'use client';
import ContactListBox from '@/components/Contact/ContactListBox/ContactListBox';
import Image from 'next/image';
import { FC } from 'react';
import styles from './ContactMapWrapper.module.css';

interface ContactMapWrapperProps {
	contactList: any;
}

const ContactMapWrapper: FC<ContactMapWrapperProps> = ({ contactList }) => {
	return (
		<section className={styles.wrapper}>
			<div className="flex flex-col grid-cols-12 gap-10 md:gap-20 lg:grid">
				<div className="lg:col-span-9">
					<Image src="/images/map.jpg" alt="map" width={800} height={550} />
				</div>
				<div className="lg:col-span-3">
					<ul>
						{contactList.map((list: any, index: number) => (
							<ContactListBox key={index} list={list} />
						))}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default ContactMapWrapper;
