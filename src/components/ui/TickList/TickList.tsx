import { Check } from 'lucide-react';
import { FC } from 'react';
import styles from './TickList.module.css';

interface TickListProps {
	list: string[];
}

const TickList: FC<TickListProps> = ({ list }) => {
	return (
		<ul className="flex flex-col gap-6">
			{list.map((item, index) => (
				<li key={index} className={styles.list_item}>
					<div className={styles.bullet}>
						<Check size={20} className="text-white" />
					</div>
					<span>{item}</span>
				</li>
			))}
		</ul>
	);
};

export default TickList;
