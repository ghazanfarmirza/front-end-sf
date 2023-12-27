// 'use client'
import ContentHeader from '@/components/Contact/ContentHeader/ContentHeader';
import CtaBlue from '@/components/CtaFolder/CtaBlue/CtaBlue';
import Header from '@/components/Header/Header';
import MetaTags from '@/components/MetaTags/MetaTags';
import AboutCommit from '@/containers/About/AboutCommit/AboutCommit';
import AboutContact from '@/containers/About/AboutContact/AboutContact';
import AboutInfo from '@/containers/About/AboutInfo/AboutInfo';
import AboutServe from '@/containers/About/AboutServe/AboutServe';
import { aboutPageQuery } from '@/lib/gql';
import { getDataFromStrapi } from '@/lib/networkCalls/strapiFunctions';

const Page: any = async () => {
	const response: any = await getDataFromStrapi(aboutPageQuery);

	const attributes = response?.aboutUs?.data?.attributes;
	if (!attributes) return <div>Missing data or invalid data structure.</div>;
	const {
		content_header,
		about_info,
		about_commit,
		about_serve,
		about_contact,
	} = attributes;

	return (
		<>
			<MetaTags />
			<Header sticky={true} />
			<ContentHeader
				title={content_header?.title}
				text={content_header?.text}
			/>
			<AboutInfo data={about_info} />
			<AboutCommit data={about_commit} />
			<AboutServe data={about_serve} />
			<AboutContact data={about_contact} />
			<CtaBlue />
		</>
	);
};

export default Page;
