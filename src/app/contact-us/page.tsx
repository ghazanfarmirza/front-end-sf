import ContactHeader from '@/components/Contact/ContactHeader/ContactHeader';
import CtaBlue from '@/components/CtaFolder/CtaBlue/CtaBlue';
import Header from '@/components/Header/Header';
import MetaTags from '@/components/MetaTags/MetaTags';
import ContactBoxWrapper from '@/containers/Contact/ContactBoxWrapper/ContactBoxWrapper';
import ContactMapWrapper from '@/containers/Contact/ContactMapWrapper/ContactMapWrapper';
import { contactPageQuery } from '@/lib/gql';
import { getDataFromStrapi } from '@/lib/networkCalls/strapiFunctions';

const Page: any = async () => {
	const response: any = await getDataFromStrapi(contactPageQuery);
	const attributes = response?.contactUs?.data?.attributes;
	if (!attributes) return <div>Missing data or invalid data structure.</div>;
	const {
		['ContactHeader']: contact_header,
		contact_box,
		contact_list,
		// office_location,
	} = attributes;
	return (
		<>
			<MetaTags />
			<Header sticky={true} />
			<ContactHeader data={contact_header} />
			<section>
				<div className="container">
					<div className="grid items-center justify-center grid-cols-12">
						<div className="col-span-1"></div>
						<div className="col-span-12 md:col-span-10">
							<ContactBoxWrapper data={contact_box} />
							<ContactMapWrapper contactList={contact_list} />
						</div>
						<div className="col-span-1"></div>
					</div>
				</div>
			</section>
			<CtaBlue />
		</>
	);
};

export default Page;
