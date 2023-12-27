import { cn } from '@/lib/utils/utils';
import { ChevronDown, ChevronsDown } from 'lucide-react';
import Link from 'next/link';
import { FC } from 'react';
import styles from './RightArrowDownLink.module.css';

interface RightArrowDownLinkProps {
	link?: string;
	title: string;
}

const RightArrowDownLink: FC<RightArrowDownLinkProps> = ({ link, title }) => {
	return (
		<>
			{(link && (
				<Link
					prefetch={false}
					href={link}
					className={cn(styles.link, 'transition-effect')}
				>
					{title}
					<ChevronDown className={styles.single} size={24} />
					<ChevronsDown className={styles.double} size={24} />
				</Link>
			)) || (
				<div className={cn(styles.link, 'transition-effect')}>
					{title}
					<ChevronDown className={styles.single} size={24} />
					<ChevronsDown className={styles.double} size={24} />
				</div>
			)}
		</>
	);
};

export default RightArrowDownLink;
