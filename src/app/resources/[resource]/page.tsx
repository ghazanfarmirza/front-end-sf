import Article from '@/app/article-page/page';
import Comparison from '@/app/comparison/page';
import Whitepaper from '@/app/whitepaper/page';
import { getResourceBySlug } from '@/lib/gql';
import { getDataFromStrapi } from '@/lib/networkCalls/strapiFunctions';

interface PageProps {
	params: { resource: string };
}

const Page: any = async ({ params: { resource } }: PageProps) => {
	const response: any = await getDataFromStrapi(getResourceBySlug(resource));
	const articleInfo = response?.resources.data[0]?.attributes;
	if (!articleInfo) return null;
	const type = articleInfo.type;

	switch (type) {
		case 'article':
			return <Article resource={articleInfo} />;
		case 'whitepaper':
			return <Whitepaper resource={articleInfo} />;
		case 'comparison':
			return <Comparison resource={articleInfo} />;
		default:
			return <Article resource={articleInfo} />;
	}
};

export default Page;
