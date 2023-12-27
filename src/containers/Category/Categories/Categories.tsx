import Category from '@/components/Categorys/Category/Category';
import Button from '@/components/ui/Button/Button';
import Heading from '@/components/ui/Heading/Heading';
import { categoriesHomePage } from '@/lib/gql';
import { getDataFromStrapi } from '@/lib/networkCalls/strapiFunctions';
import Link from 'next/link';

const Categories: any = async () => {
	const response: any = await getDataFromStrapi(categoriesHomePage);
	const categoriesHome = response?.home.data?.attributes?.categories;
	if (!categoriesHome) {
		return <div>Missing data or invalid data structure.</div>;
	}
	const { heading, heading_leaf, description, button, categories } =
		categoriesHome;
	return (
		<section className="mt-8 mb-8 md:mb-16 md:mt-14 lg:mt-0">
			<div className="container">
				<Heading
					size={'h2'}
					variant={'medium'}
					className="text-left lg:text-center text-dark-blue"
				>
					{heading}{' '}
					<span className="font-bold text-green"> {heading_leaf}</span>
				</Heading>
				<Heading
					size={'h5'}
					variant={'regular'}
					className="max-w-4xl mx-auto mt-4 text-left lg:text-center text-dark-blue"
				>
					{description}
				</Heading>
				{/* For mobile */}
				<div className="grid grid-cols-1 gap-3 my-8 md:my-16 lg:hidden">
					{categories?.data.slice(0, 5).map((category: any) => (
						<Category
							key={category?.attributes?.name}
							icon={category?.attributes?.icon?.data?.attributes?.url}
							title={category?.attributes?.name}
							href={`/${category?.attributes?.slug}`}
						/>
					))}
				</div>

				{/* For larger screens */}
				<div className="hidden gap-3 my-16 lg:grid lg:grid-cols-3">
					{categories?.data.map((category: any) => (
						<Category
							key={category?.attributes?.name}
							icon={category?.attributes?.icon?.data?.attributes?.url}
							title={category?.attributes?.name}
							href={`/${category?.attributes?.slug}`}
						/>
					))}
				</div>
				<div className="flex justify-center">
					<Button size={'lg'} variant={'green'}>
						<Link prefetch={false} href={'/' + button.url}>
							{button.title}
						</Link>
					</Button>
				</div>
			</div>
		</section>
	);
};

export default Categories;
