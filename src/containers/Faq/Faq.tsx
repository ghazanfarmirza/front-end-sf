import FaqBox from '@/components/FaqBox/FaqBox';
import Heading from '@/components/ui/Heading/Heading';
import { faqsHomePage } from '@/lib/gql';
import { getDataFromStrapi } from '@/lib/networkCalls/strapiFunctions';

type Faqtype = {
	attributes: {
		question: string;
		answer: string;
		faq_id: number;
		status: boolean;
	};
}[];
interface FaqProps {
	faq: Faqtype;
}

const Faq: any = async (props: FaqProps) => {
	let faq = props?.faq;
	if (!faq) {
		const res: any = await getDataFromStrapi(faqsHomePage);
		faq = res?.home?.data.attributes?.faqs.data;
		if (!faq) return <div>Missing data or invalid data structure.</div>;
	}
	return (
		<section className="mt-4 mb-16 md:mb-24 lg:mb-32">
			<div className="container">
				<Heading
					size={'h2'}
					variant={'semibold'}
					className="mb-12 text-left lg:text-center text-dark-blue"
				>
					Frequently Asked Questions
				</Heading>
				<div className="max-w-screen-1060x">
					{faq?.map(
						(faq) =>
							faq.attributes?.status && (
								<FaqBox
									question={faq.attributes?.question}
									answer={faq.attributes?.answer.replace(/(<([^>]+)>)/gi, '')}
									key={faq.attributes?.faq_id}
									id={faq.attributes?.faq_id}
								/>
							)
					)}
				</div>
			</div>
		</section>
	);
};

export default Faq;
