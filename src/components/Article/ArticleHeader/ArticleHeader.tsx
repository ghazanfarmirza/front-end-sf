import Image from 'next/image';
import { FC } from 'react';
import Heading from '../../ui/Heading/Heading';
import Paragraph from '../../ui/Paragraph/Paragraph';

interface ArticleHeaderProps {
	articleName: string;
}

const ArticleHeader: FC<ArticleHeaderProps> = ({ articleName }) => {
	return (
		<section className="mt-8 lg:mt-0">
			<div className="container">
				<div className="lg:max-w-screen-md">
					<Heading
						size={'h1'}
						variant={'semibold'}
						className="text-black text-3xl lg:text-4xl"
					>
						{articleName}
					</Heading>
					<div className="flex items-center gap-4 mt-3 lg:mt-8">
						<Image
							src="/images/articleimg.jpg"
							width={24}
							height={24}
							alt="article-header-image"
						/>
						<Paragraph size={'small'} variant={'regular'} className="text-grey">
							By Renee Adkins - <span>August 14,2023</span> -{' '}
							<span>8 min Read</span>
						</Paragraph>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ArticleHeader;
