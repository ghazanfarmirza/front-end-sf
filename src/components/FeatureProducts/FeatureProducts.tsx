import { FC } from 'react';
import FeatureProduct from '../FeatureProduct/FeatureProduct';
import PageHeaderTransparent from '../Page/PageHeaderTransparent/PageHeaderTransparent';

interface FeatureProductsProps {
	featureProducts: any[];
}

const FeatureProducts: FC<FeatureProductsProps> = ({ featureProducts }) => {
	return (
		<section>
			<PageHeaderTransparent title="Similar Products" />
			<div className="grid grid-cols-1 gap-6 my-12 md:grid-cols-2 lg:grid-cols-3">
				{featureProducts.map((product) => (
					<FeatureProduct
						key={product.attributes?.slug}
						product={product.attributes}
					/>
				))}
			</div>
		</section>
	);
};

export default FeatureProducts;
