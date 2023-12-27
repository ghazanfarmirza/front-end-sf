import { cn } from '@/lib/utils/utils';
import Image from 'next/image';
import { FC } from 'react';
import RightArrowLink from '../../ui/Link/RightArrowLink/RightArrowLink';
import Paragraph from '../../ui/Paragraph/Paragraph';
import styles from './CategoryCompareBox.module.css';

interface CategoryCompareBoxProps {
	compareList: {
		vendor1_name: string;
		vendor1_logo: { data: { attributes: { url: string } } };
		vendor2_name: string;
		vendor2_logo: { data: { attributes: { url: string } } };
		text: string;
		url: string;
	};
}

const CategoryCompareBox: FC<CategoryCompareBoxProps> = ({
	compareList: {
		vendor1_name,
		vendor1_logo,
		vendor2_name,
		vendor2_logo,
		text,
		url,
	},
}) => {
	return (
		<div className={styles.box}>
			<div className={cn(styles.header, 'grid grid-cols-2')}>
				<div className={cn(styles.header_item, styles.border)}>
					<div className={styles.header_item_image}>
						<Image
							src={vendor1_logo.data?.attributes?.url}
							alt=""
							width={124}
							height={35}
						/>
					</div>
					{vendor1_name}
				</div>
				<div className={styles.header_item}>
					<div className={styles.header_item_image}>
						<Image
							src={vendor2_logo.data?.attributes?.url}
							alt=""
							width={124}
							height={35}
						/>
					</div>
					{vendor2_name}
				</div>
			</div>
			<div className={styles.body}>
				<Paragraph size={'md'} variant={'medium'} className="mb-4">
					{text}
				</Paragraph>
				<RightArrowLink title="Learn more" link={`${url}`} />
			</div>
		</div>
	);
};

export default CategoryCompareBox;
