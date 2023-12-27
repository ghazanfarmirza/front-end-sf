import CategoryTabs from '@/components/Categorys/CategoryTabs/CategoryTabs';
import CategoryTabsMobile from '@/components/Categorys/CategoryTabsMobile/CategoryTabsMobile';
import Heading from '@/components/ui/Heading/Heading';
import {
	popularCategoriesHomePage,
	popularCategoriesTopVendors,
} from '@/lib/gql';
import { getDataFromStrapi } from '@/lib/networkCalls/strapiFunctions';

const PopularCategories: any = async () => {
	const response = await getDataFromStrapi(popularCategoriesHomePage);
	const popularCategoriesHome =
		response?.home?.data?.attributes?.Popular_Categories;

	if (!popularCategoriesHome) {
		return <div></div>;
	}

	const { title1, title2, title3, description, categories } =
		popularCategoriesHome;

	const categorySlugs = categories.data.map(
		(item: any) => item.attributes?.slug
	);
	const vendorResponse = await getDataFromStrapi(
		popularCategoriesTopVendors(categorySlugs)
	);
	const categoriesWithVendors = vendorResponse?.categories;

	return (
		<section className="section">
			<div className="container">
				<Heading
					size={'h2'}
					variant={'medium'}
					className="max-w-screen-lg mx-auto text-left lg:text-center text-dark-blue"
				>
					{title1}
					<span className="font-bold text-green"> {title2} </span>
					{title3}
				</Heading>
				<Heading
					size={'h5'}
					variant={'regular'}
					className="max-w-6xl mx-auto mt-2 mb-8 md:mb-16 text-left lg:text-center text-dark-blue"
				>
					{description}{' '}
				</Heading>
				{/* For Desktop Screen */}
				<div className="hidden lg:block">
					<CategoryTabs categories={categoriesWithVendors} />
				</div>

				{/* For Mobile Screens */}
				<div className="block lg:hidden">
					<CategoryTabsMobile categories={categoriesWithVendors} />
				</div>
			</div>
		</section>
	);
};

export default PopularCategories;
