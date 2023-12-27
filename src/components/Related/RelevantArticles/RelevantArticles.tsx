import Link from 'next/link';
import { FC } from 'react';
import Paragraph from '../../ui/Paragraph/Paragraph';

interface RelevantArticlesProps {
	lists: {
		attributes: {
			slug: string;
			title: string;
		};
	}[];
}

const RelevantArticles: FC<RelevantArticlesProps> = ({ lists }) => {
	if (!lists.length) return null;
	return (
		<section className="mt-12">
			<Paragraph size={'lg'} variant={'bold'} className="text-black">
				Relevant Articles
			</Paragraph>
			<ul className="flex flex-col gap-4 mt-4">
				{lists?.map((list) => (
					<li key={list?.attributes?.slug}>
						<Link
							prefetch={false}
							href={`/resources/${list?.attributes?.slug}`}
						>
							<Paragraph
								size={'small'}
								variant={'medium'}
								className="text-green hover:underline hover:font-semibold"
							>
								{list?.attributes?.title}
							</Paragraph>
						</Link>
					</li>
				))}
			</ul>
		</section>
	);
};

export default RelevantArticles;
