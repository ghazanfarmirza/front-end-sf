import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import Header from '@/components/Header/Header';
import Description from '@/components/ui/Description/Description';
import Heading from '@/components/ui/Heading/Heading';
import { privacyPolicyPageQuery } from '@/lib/gql';
import { getDataFromStrapi } from '@/lib/networkCalls/strapiFunctions';

const Page = async () => {
	const response: any = await getDataFromStrapi(privacyPolicyPageQuery);
	const privacyPolicy = response?.privacyPolicy.data?.attributes;
	if (!privacyPolicy) return <div>Missing data or invalid data structure.</div>;
	const { title, paragraph } = privacyPolicy;
	return (
		<div>
			<Header sticky={true} />
			<BreadCrumb item1={{ name: 'Privacy Policy', link: 'privacy-policy' }} />
			<div className="container">
				<Heading
					size={'h2'}
					variant={'bold'}
					className="mt-8 text-black lg:mt-0"
				>
					{title}
				</Heading>
				<div className="page_inner_content">
					<Description>{paragraph}</Description>{' '}
				</div>
			</div>
		</div>
	);
};

export default Page;
