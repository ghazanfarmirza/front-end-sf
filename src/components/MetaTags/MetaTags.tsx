'use client';
import { usePathname } from 'next/navigation';
import { FC } from 'react';

interface MetaTagsProps {
	seo?: { metaTitle: string; metaDescription: string; keywords: string };
}

const MetaTags: FC<MetaTagsProps> = ({ seo }) => {
	const canoncialUrl = process.env.NEXT_PUBLIC_SITE_URL + usePathname();
	const { metaTitle = '', metaDescription = '', keywords = '' } = seo ?? {};

	return (
		<>
			{
				// eslint-disable-next-line @next/next/no-head-element
				<head>
					<title>{metaTitle}</title>
					<meta name="title" content={metaTitle} />
					<meta name="description" content={metaDescription} />
					<meta name="keywords" content={keywords} />
					<link rel="canonical" href={canoncialUrl} />
				</head>
			}
		</>
	);
};

export default MetaTags;
