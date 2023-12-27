import Image from 'next/image';
import { FC } from 'react';
import RightArrowLink from '../../ui/Link/RightArrowLink/RightArrowLink';
import Paragraph from '../../ui/Paragraph/Paragraph';
import styles from './CategoryCheckListBox.module.css';

interface CategoryCheckListBoxProps {
	checkList: {
		image_url: string;
		title: string;
		slug: string;
	};
}

const CategoryCheckListBox: FC<CategoryCheckListBoxProps> = ({ checkList }) => {
	return (
		<div className={styles.box}>
			<div className={styles.image}>
				<Image
					className="mx-auto"
					src={
						process.env.NEXT_PUBLIC_DIGITAL_OCEAN_IMAGE_URL +
						checkList.image_url
					}
					alt={checkList.title}
					width={308}
					height={175}
				/>
			</div>
			<Paragraph size={'md'} variant={'medium'} className="mb-4">
				{checkList.title}
			</Paragraph>
			<RightArrowLink link={`/resources/${checkList.slug}`} title="Read more" />
		</div>
	);
};

export default CategoryCheckListBox;
