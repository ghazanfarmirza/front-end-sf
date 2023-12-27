import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import CtaBlue from '@/components/CtaFolder/CtaBlue/CtaBlue';
import Header from '@/components/Header/Header';
import LeadGenerationForm from '@/components/Lead/LeadGenerationForm/LeadGenerationForm';
import LeadGenerationHero from '@/components/Lead/LeadGenerationHero/LeadGenerationHero';
import MetaTags from '@/components/MetaTags/MetaTags';
import Description from '@/components/ui/Description/Description';
import Heading from '@/components/ui/Heading/Heading';
import DoorStepSection from '@/containers/DoorStepSection/DoorStepSection';
import Faq from '@/containers/Faq/Faq';
import LeadDetailsSection from '@/containers/LeadDetailsSection/LeadDetailsSection';
import SuccessStories from '@/containers/SuccessStories/SuccessStories';
import { leadGenerationPageQuery, successStoriesHomePage } from '@/lib/gql';
import { getDataFromStrapi } from '@/lib/networkCalls/strapiFunctions';
import { SuccessStoriesType } from '@/lib/types/types';

const Page: any = async () => {
	const repsonse: any = await getDataFromStrapi(leadGenerationPageQuery);
	const data = repsonse?.leadGeneration?.data?.attributes;
	if (!data) return null;
	const { leadGeneration: roadMap, leadsExamples } = data;
	const response: { home: { data: { attributes: any } } } =
		await getDataFromStrapi(successStoriesHomePage);

	const successStories: Array<SuccessStoriesType> =
		response?.home?.data?.attributes?.success_stories;
	return (
		<>
			<MetaTags />
			<Header sticky={true} />
			<LeadGenerationHero />
			<BreadCrumb
				item1={{ name: 'Lead Generation', link: 'lead-generation' }}
			/>
			{/* For Desktop Screens */}
			<section className="hidden lg:block">
				<div className="container">
					<div className="grid grid-cols-12 gap-12">
						<div className="col-span-8 pr-12">
							<Heading size={'h2'} variant={'bold'} className="text-black">
								Engage With Yours Users
							</Heading>
							<Description className="mt-8 text-black">
								{roadMap.textContent}
							</Description>
						</div>
						<div className="col-span-4">
							<LeadGenerationForm />
						</div>
					</div>
				</div>
			</section>
			{/* For Mobile Screens */}
			<section className="block mt-16 lg:hidden">
				<div className="container">
					<div>
						<Heading size={'h3'} variant={'bold'} className="mb-8 text-black">
							Engage With Yours Users
						</Heading>
						<LeadGenerationForm />
						<Description className="mt-8 text-black">
							{roadMap.textContent}
						</Description>
					</div>
				</div>
			</section>
			<DoorStepSection roadMap={roadMap} />
			<LeadDetailsSection leadsExamples={leadsExamples} />
			<SuccessStories successStories={successStories} />
			<Faq />
			<CtaBlue />
		</>
	);
};

export default Page;
