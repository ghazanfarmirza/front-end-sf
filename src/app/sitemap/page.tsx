import Header from '@/components/Header/Header';
import SearchBarSquare from '@/components/Search/SearchBarSquare/SearchBarSquare';
import SitemapLists from '@/components/SitemapLists/SitemapLists';
import Heading from '@/components/ui/Heading/Heading';
import Paragraph from '@/components/ui/Paragraph/Paragraph';
import { getAllCategories, getAllVendorsSlugs } from '@/lib/gql';
import { getDataFromStrapi } from '@/lib/networkCalls/strapiFunctions';

const Page = async () => {
	const categoriesResponse: any = await getDataFromStrapi(getAllCategories);

	const allCategories = categoriesResponse?.categories?.data;
	const vendorsResponse = await getDataFromStrapi(getAllVendorsSlugs);
	const vendors = vendorsResponse?.vendors.data;
	if (!vendors) return <div>Missing data or invalid data structure.</div>;
	return (
		<>
			<Header sticky={true} />
			<div className="py-24">
				<div className="container">
					<Heading size={'h3'} variant={'bold'} className="text-black">
						Sitemap
					</Heading>
					<Paragraph className="mt-1 mb-6 text-black">1749 Pages</Paragraph>
					<div className="max-w-lg">
						<SearchBarSquare placeholder="Search Software Category,Alternative Vendor" />
					</div>
					<SitemapLists
						color={'bg-light-blue'}
						type={'category'}
						categories={allCategories}
					/>
					<SitemapLists
						color={'bg-light-green'}
						type={'alternatives'}
						alternatives={vendors}
					/>
					<SitemapLists
						color={'bg-light-white'}
						type={'vendors'}
						vendors={vendors}
					/>
				</div>
			</div>
		</>
	);
};

export default Page;
