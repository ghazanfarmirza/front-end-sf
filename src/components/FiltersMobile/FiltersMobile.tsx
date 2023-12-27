'use client';
import { filters } from '@/lib/settings/settings';
import { cn } from '@/lib/utils/utils';
import { X } from 'lucide-react';
import Image from 'next/image';
import { FC, useState } from 'react';
import FilterPopupMobile from '../Filter/FilterPopupMobile/FilterPopupMobile';
import Paragraph from '../ui/Paragraph/Paragraph';
import styles from './FilterMobile.module.css';

interface FiltersMobileProps {}

const FiltersMobile: FC<FiltersMobileProps> = () => {
	const [open, setOpen] = useState(false);
	return (
		<>
			<div className={styles.filter_header} onClick={() => setOpen(true)}>
				<Image src="/images/filter.svg" alt="filter" width={20} height={20} />
				<Paragraph className="text-dark-blue" variant={'semibold'}>
					Filters
				</Paragraph>
			</div>
			<ul className={cn(styles.filter_mobile_popup, open ? 'block' : 'hidden')}>
				{filters.map((filter, index) => (
					<li key={index} className={styles.filter_list}>
						<FilterPopupMobile data={filter} />
					</li>
				))}
				<X size={32} className={styles.cross} onClick={() => setOpen(false)} />
			</ul>
		</>
	);
};

export default FiltersMobile;
