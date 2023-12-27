import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import Cta from '@/components/CtaFolder/Cta/Cta';
import Header from '@/components/Header/Header';
import MetaTags from '@/components/MetaTags/MetaTags';
import ResourceHeader from '@/components/Resource/ResourceHeader/ResourceHeader';
import ScrollTop from '@/components/ScrollTop/ScrollTop';
import ResourceFeatureTabs from '@/containers/Resource/ResourceFeatureTabs/ResourceFeatureTabs';
import { getAllCategoriesTopResources, getAllResources } from '@/lib/gql';
import { getDataFromStrapi } from '@/lib/networkCalls/strapiFunctions';

const page: any = async () => {
	const allCategoriesResponse: any = await getDataFromStrapi(
		getAllCategoriesTopResources
	);

	const allCategories = allCategoriesResponse?.categories?.data;
	if (!allCategories) return null;

	const response = await getDataFromStrapi(getAllResources);
	const resources = response?.resources?.data;
	if (!resources) return null;

	return (
		<>
			<MetaTags />
			<ScrollTop />
			<Header sticky={true} />
			<ResourceHeader />
			<BreadCrumb item1={{ name: 'Resource Center', link: 'resources' }} />
			<div className="py-16">
				<div className="container">
					<ResourceFeatureTabs
						allCategories={allCategories}
						allResources={resources}
					/>
					<Cta heading1="Looking for a Software?" />
				</div>
			</div>
		</>
	);
};

export default page;
