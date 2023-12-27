import AuthorHeader from '@/components/Author/AuthorHeader/AuthorHeader';
import Header from '@/components/Header/Header';
import AuthorLists from '@/containers/AuthorLists/AuthorLists';
import ResourcesList from '@/containers/Resource/ResourcesList/ResourcesList';
import SocialLists from '@/containers/SocialLists/SocialLists';
import { getAllAuthors } from '@/lib/gql';
import { getDataFromStrapi } from '@/lib/networkCalls/strapiFunctions';

interface pageProps {
	params: {
		author: string;
	};
}

const Page: any = async ({ params }: pageProps) => {
	const { author } = params;
	const response: any = await getDataFromStrapi(getAllAuthors);
	const activeAuthor = response?.authors?.data.find(
		(item: any) => item.attributes?.author_id === author
	);
	//randomly pick 3 authors that is not curent author
	const authors = response?.authors?.data;
	const otherAuthors = authors.filter(
		(item: any) => item.attributes?.author_id !== author
	);
	const randomAuthors = otherAuthors
		.sort(() => Math.random() - Math.random())
		.slice(0, 3);
	if (!activeAuthor) return <p>Author Not Found </p>;
	const authorPage = activeAuthor.attributes;
	const { display_name: name, email } = authorPage;

	return (
		<div>
			<Header sticky={true} />
			<div className="py-16">
				<div className="container">
					<div className="flex flex-col grid-cols-12 gap-20 lg:grid">
						<div className="col-span-12 lg:col-span-8">
							<AuthorHeader name={name} avatar={''} bio={''} jobTitle={''} />
							<ResourcesList />
						</div>
						<div className="hidden lg:block lg:col-span-4">
							<SocialLists name={name} />
							<AuthorLists authors={randomAuthors} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Page;
