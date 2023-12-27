import { cn } from '@/lib/utils/utils';
import Image from 'next/image';
import { FC } from 'react';
import Button from '../../ui/Button/Button';
import Heading from '../../ui/Heading/Heading';
import styles from './ArticleImageBanner.module.css';

interface ArticleImageBannerProps {
	type: 'dark-green' | 'green' | 'yellow';
	icon: string;
	title: string;
	span: string;
	btnText: string;
}

const ArticleImageBanner: FC<ArticleImageBannerProps> = ({
	type,
	icon,
	title,
	span,
	btnText,
}) => {
	switch (type) {
		case 'dark-green':
			return (
				<div
					className={cn(styles.box, 'flex flex-col md:grid grid-cols-12 gap-6')}
					style={{
						background: `url('/images/article-bg-dark-green.png'),#00424b`,
						backgroundSize: 'cover',
						backgroundPosition: 'center',
						backgroundRepeat: 'no-repeat',
					}}
				>
					<div className="flex items-center justify-center gap-4 md:justify-start md:col-span-9">
						<div>
							<Image src={icon} alt="document" width={40} height={40} />
						</div>
						<div>
							<Heading
								size={'h4'}
								variant={'medium'}
								className="text-center text-white md:text-left"
							>
								<span className="text-green">{span} </span>
								{title}
							</Heading>
						</div>
					</div>
					<div className="flex items-center justify-end md:col-span-3">
						<Button size={'sm'} variant={'green'}>
							{btnText}
						</Button>
					</div>
				</div>
			);
		case 'green':
			return (
				<div
					className={cn(styles.box, 'flex flex-col md:grid grid-cols-12 gap-6')}
					style={{
						background: `url('/images/article-bg-green.png'),#EBF5EB`,
						backgroundSize: 'cover',
						backgroundPosition: 'center',
						backgroundRepeat: 'no-repeat',
					}}
				>
					<div className="flex items-center justify-center col-span-9 gap-4 md:justify-start">
						<div>
							<Image src={icon} alt="document" width={40} height={40} />
						</div>
						<div>
							<Heading size={'h4'} variant={'medium'} className="text-black">
								<span className="text-green">{span} </span>
								{title}
							</Heading>
						</div>
					</div>
					<div className="flex items-center justify-end col-span-3">
						<Button size={'sm'} variant={'green'}>
							{btnText}
						</Button>
					</div>
				</div>
			);
		case 'yellow':
			return (
				<div
					className={cn(styles.box, 'flex flex-col md:grid grid-cols-12 gap-4')}
					style={{
						background: `url('/images/article-bg-yellow.svg'),#FBF7EF`,
						backgroundSize: 'cover',
						backgroundPosition: 'center',
						backgroundRepeat: 'no-repeat',
					}}
				>
					<div className="flex flex-col items-center justify-center col-span-8 gap-6 md:flex-row md:justify-start">
						<div>
							<Image src={icon} alt="document" width={45} height={45} />
						</div>
						<div>
							<Heading
								size={'h5'}
								variant={'medium'}
								className="text-center text-black md:text-left"
							>
								<span className="text-green">{span} </span>
								{title}
							</Heading>
						</div>
					</div>
					<div className="flex items-center justify-end col-span-4">
						<Button size={'sm'} variant={'black'}>
							{btnText}
						</Button>
					</div>
				</div>
			);
		default:
			return <></>;
	}
};

export default ArticleImageBanner;
