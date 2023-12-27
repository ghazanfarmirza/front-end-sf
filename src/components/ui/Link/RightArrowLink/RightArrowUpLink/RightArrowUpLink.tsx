import { cn } from '@/lib/utils/utils';
import { ChevronUp, ChevronsUp } from 'lucide-react';
import Link from 'next/link';
import { FC } from 'react';
import styles from '../RightArrowDownLink/RightArrowDownLink.module.css';

interface RightArrowDownLinkProps {
	link?: string;
	title: string;
}

const RightArrowUpLink: FC<RightArrowDownLinkProps> = ({ link, title }) => {
	return (
		<>
			{(link && (
				<Link
					prefetch={false}
					href={link}
					className={cn(styles.link, 'transition-effect')}
				>
					{title}
					<ChevronUp className={styles.single} size={24} />
					<ChevronsUp className={styles.double} size={24} />
				</Link>
			)) || (
				<div className={cn(styles.link, 'transition-effect')}>
					{title}
					<ChevronUp className={styles.single} size={24} />
					<ChevronsUp className={styles.double} size={24} />
				</div>
			)}
		</>
	);
};

export default RightArrowUpLink;
