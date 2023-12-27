import { cn } from '@/lib/utils/utils';
import { FC } from 'react';
import SubHeader from '../../SubHeader/SubHeader';
import Heading from '../../ui/Heading/Heading';
import Paragraph from '../../ui/Paragraph/Paragraph';
import styles from './PageFillHeader.module.css';

interface PageFillHeaderProps {
	title: string;
	desc?: string;
	greenTitle?: string;
	subHeader?: {
		title: string;
		link: string;
	};
}

const PageFillHeader: FC<PageFillHeaderProps> = ({
	title,
	desc,
	subHeader,
	greenTitle,
}) => {
	return (
		<>
			{!subHeader ? (
				<div className="py-8 lg:py-14 bg-dark-blue">
					<div className="container">
						<div className="flex items-center gap-3">
							<Heading
								size={'h1'}
								variant={'semibold'}
								className="text-white text-4xl"
							>
								{title} <span className="text-green">{greenTitle}</span>
							</Heading>
						</div>
						{desc && (
							<Paragraph
								size={'lg'}
								variant={'regular'}
								className="mt-4 text-white"
							>
								{desc}
							</Paragraph>
						)}
					</div>
				</div>
			) : (
				<>
					<div className="pt-10 lg:pt-14 pb-28 bg-dark-blue">
						<div className="container">
							<Heading
								size={'h1'}
								variant={'semibold'}
								className="text-white text-4xl"
							>
								{title}
							</Heading>
							{desc && (
								<Paragraph
									size={'lg'}
									variant={'regular'}
									className="mt-4 text-white"
								>
									{desc}
								</Paragraph>
							)}
						</div>
					</div>
					<div className={cn(styles.subHeader, 'relative -mt-14')}>
						<div className="container">
							<SubHeader
								title={subHeader.title}
								subCategory={title}
								link={subHeader.link}
							/>
						</div>
					</div>
				</>
			)}
		</>
	);
};

export default PageFillHeader;
