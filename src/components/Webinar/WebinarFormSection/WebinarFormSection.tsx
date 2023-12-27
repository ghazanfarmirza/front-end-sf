'use client';
import { FC } from 'react';
import WebinarForm from '../WebinarForm/WebinarForm';
import styles from './WebinarFormSection.module.css';

interface WebinarFormSectionProps {
	formData: {
		heading_form_page: string;
		heading_green_form_page: string;
		form_heading_1: string;
		form_heading_2: string;
		hero_image: { data: [{ attributes: { url: string } }] };
	};
}

const WebinarFormSection: FC<WebinarFormSectionProps> = ({ formData }) => {
	const imageUrl = formData.hero_image.data[0].attributes.url;
	return (
		<section
			className={styles.section}
			style={{
				backgroundImage: `url(${imageUrl})`, // Use backgroundImage
			}}
		>
			<div className="container">
				<div className="grid grid-cols-12">
					<div className="col-span-12 lg:col-end-8">
						<WebinarForm {...formData} />
					</div>
				</div>
			</div>
		</section>
	);
};

export default WebinarFormSection;
