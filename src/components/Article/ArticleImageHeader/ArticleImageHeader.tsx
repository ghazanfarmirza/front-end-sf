import { cn } from '@/lib/utils/utils';
import Image from 'next/image';
import { FC } from 'react';
import styles from './ArticleImageHeader.module.css';

interface ArticleImageHeaderProps {}

const ArticleImageHeader: FC<ArticleImageHeaderProps> = () => {
	return (
		<div className={cn(styles.box, 'my-12')}>
			<Image
				src="/images/advancedmd-logo.svg"
				width={340}
				height={48}
				alt="article-header-logo"
			/>
		</div>
	);
};

export default ArticleImageHeader;
