import AccordionProduct from '@/components/AccordionProduct/AccordionProduct';
import Heading from '@/components/ui/Heading/Heading';
import { getAllCategories } from '@/lib/gql';
import { getDataFromStrapi } from '@/lib/networkCalls/strapiFunctions';

const ProductCategories: any = async () => {
	const response: any = await getDataFromStrapi(getAllCategories);

	const productCategories = response?.categories?.data;
	if (!productCategories) return <div></div>;
	return (
		<section className="mb-20 md:mb-32">
			<div className="container">
				<Heading size={'h2'} variant={'medium'} className="mb-12 text-center">
					Browse All{' '}
					<span className="font-bold text-green">Product Categories</span>
				</Heading>
				<div className="grid grid-cols-12 gap-4">
					{productCategories?.map((category: any) => (
						<div className="col-span-12 md:col-span-6" key={category.id}>
							<AccordionProduct
								id={category.id}
								lists={category.attributes?.sub_categories.data}
								category={category.attributes}
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ProductCategories;
