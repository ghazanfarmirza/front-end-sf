import MetaTags from '@/components/MetaTags/MetaTags';
import ScrollTop from '@/components/ScrollTop/ScrollTop';
import {
	successStoriesHomePage,
	vendorProgramHomePage,
	vendorsHomePage,
} from '@/lib/gql';
import { getDataFromStrapi } from '@/lib/networkCalls/strapiFunctions';
import dynamic from 'next/dynamic';
import Head from 'next/head';

// Define a simple loading component
// const Loading = () => <p>Loading...</p>;

// Dynamically import components
const Benefits = dynamic(
	() => import('@/containers/Benefit/Benefits/Benefits')
	// { loading: Loading }
);
const Categories = dynamic(
	() => import('@/containers/Category/Categories/Categories')
);
const PopularCategories = dynamic(
	() => import('@/containers/Category/PopularCategories/PopularCategories')
);
const ProductCategories = dynamic(
	() => import('@/containers/Category/ProductCategories/ProductCategories')
);
const CtaContainer = dynamic(
	() => import('@/containers/CtaContainer/CtaContainer')
);
const Faq = dynamic(() => import('@/containers/Faq/Faq'));
const Hero = dynamic(() => import('@/containers/HeroSection/Hero/Hero'));
const SuccessStories = dynamic(
	() => import('@/containers/SuccessStories/SuccessStories')
);
const VendorProgram = dynamic(
	() => import('@/containers/Vendor/VendorProgram/VendorProgram')
);
const Vendors = dynamic(() => import('@/containers/Vendor/Vendors/Vendors'));
const Whitepapers = dynamic(
	() => import('@/containers/Whitepapers/Whitepapers')
);

export default async function Home() {
	const [response, vendorsResponse, vendorProgramResponse] = await Promise.all([
		getDataFromStrapi(successStoriesHomePage),
		getDataFromStrapi(vendorsHomePage),
		getDataFromStrapi(vendorProgramHomePage),
	]);

	const successStories = response?.home?.data?.attributes?.success_stories;
	const vendors = vendorsResponse?.home?.data?.attributes?.vendors?.vendors;
	const vendorsProgramBoxes =
		vendorProgramResponse?.home?.data?.attributes?.vendor_program.vendor_box;

	return (
		<>
			<Head>
				<meta
					name="verify-v1"
					content="sblaOIMcOPgqHUUYz1jwiLCEl-TIeiOW2w4Z6kvAdNE"
				/>
				<meta
					name="google-site-verification"
					content="sblaOIMcOPgqHUUYz1jwiLCEl-TIeiOW2w4Z6kvAdNE"
				/>
				<meta name="robots" content="noindex,nofollow" />
				<meta name="googlebot" content="noarchive" />
			</Head>
			<MetaTags />
			<ScrollTop />
			<Hero />
			<Vendors vendors={vendors} />
			<Benefits />
			<Categories />
			<PopularCategories />
			<CtaContainer />
			<Whitepapers />
			<SuccessStories successStories={successStories} />
			<VendorProgram vendorsProgramBoxes={vendorsProgramBoxes} />
			<ProductCategories />
			<Faq />
		</>
	);
}
