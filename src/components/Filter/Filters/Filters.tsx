import { filters } from '@/lib/settings/settings';
import Image from 'next/image';
import { FC } from 'react';
import Paragraph from '../../ui/Paragraph/Paragraph';
import FilterBox from '../FilterBox/FilterBox';
import styles from './Filters.module.css';

interface FiltersProps {}

const Filters: FC<FiltersProps> = () => {
	return (
		<div className={styles.filter + ' vendor-sideBar filter-sideBar'}>
			<div className={styles.filter_header}>
				<Image src="/images/filter.svg" alt="filter" width={20} height={20} />
				<Paragraph className="text-dark-blue" variant={'medium'}>
					Filters
				</Paragraph>
			</div>
			<div className={styles.filter_body}>
				<ul>
					{filters.map((filter, index) => (
						<li key={index} className={styles.filter_list}>
							<FilterBox data={filter} />
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Filters;
