import Paragraph from '@/components/ui/Paragraph/Paragraph';
import { Check, X } from 'lucide-react';
import { FC } from 'react';
import styles from './VendorSpecifcationListItem.module.css';

interface VendorSpecificationListItemProps {
	item: {
		id: string;
		title: string;
		status: boolean;
	};
}

const VendorSpecificationListItem: FC<VendorSpecificationListItemProps> = ({
	item,
}) => {
	return (
		<div className={styles.item}>
			<Paragraph>{item.title}</Paragraph>

			<div className={styles.tick}>
				{(item.status && <Check size={20} className="text-white" />) || (
					<X size={20} className="text-white" />
				)}
			</div>
		</div>
	);
};

export default VendorSpecificationListItem;
