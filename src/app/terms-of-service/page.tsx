import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import Header from '@/components/Header/Header';
import Description from '@/components/ui/Description/Description';
import Heading from '@/components/ui/Heading/Heading';
import { termsAndConditionsPageQuery } from '@/lib/gql';
import { getDataFromStrapi } from '@/lib/networkCalls/strapiFunctions';

const Page = async () => {
	const response: any = await getDataFromStrapi(termsAndConditionsPageQuery);
	const termsOfService = response?.termsOfService?.data?.attributes;
	if (!termsOfService)
		return <div>Missing data or invalid data structure.</div>;
	const { title, paragraph } = termsOfService;
	return (
		<div>
			<Header sticky={true} />
			<BreadCrumb
				item1={{ name: 'Terms of Service', link: 'terms-of-service' }}
			/>
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
