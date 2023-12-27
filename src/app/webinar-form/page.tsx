import Header from '@/components/Header/Header';
import MetaTags from '@/components/MetaTags/MetaTags';
import WebinarBanner from '@/components/Webinar/WebinarBanner/WebinarBanner';
import WebinarDescriptionSection from '@/components/Webinar/WebinarDescriptionSection/WebinarDescriptionSection';
import WebinarFormSection from '@/components/Webinar/WebinarFormSection/WebinarFormSection';
import WebinarSmallBanner from '@/components/Webinar/WebinarSmallBanner/WebinarSmallBanner';
import { onDemandWebinar } from '@/lib/gql';
import { getDataFromStrapi } from '@/lib/networkCalls/strapiFunctions';

const page: any = async () => {
	const response = await getDataFromStrapi(onDemandWebinar);
	const onDemandWebinarData =
		response.onDemandWebinar.data.attributes.on_demand_fields;
	const {
		heading_form_page,
		heading_green_form_page,
		form_heading_1,
		form_heading_2,
		hero_image,
		description_text,
		description_heading,
		description_heading_green,
		description_heading2,
		formPageVideoId,
		banner_text,
		banner_button_text,
	} = onDemandWebinarData;

	return (
		<>
			<MetaTags />
			<Header sticky={true} />
			<WebinarFormSection
				formData={{
					heading_form_page,
					heading_green_form_page,
					form_heading_1,
					form_heading_2,
					hero_image,
				}}
			/>
			<WebinarDescriptionSection
				data={{
					description_heading,
					description_heading_green,
					description_heading2,
					description_text,
				}}
			/>
			<WebinarBanner videoId={formPageVideoId} />
			<WebinarSmallBanner title={banner_text} buttonText={banner_button_text} />
		</>
	);
};

export default page;
