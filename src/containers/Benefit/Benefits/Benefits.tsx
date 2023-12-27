import Heading from '@/components/ui/Heading/Heading';
import { benefitsHomePage } from '@/lib/gql';
import { getDataFromStrapi } from '@/lib/networkCalls/strapiFunctions';
import BenefitTestimonials from '../BenefitTestimonials/BenefitTestimonials';
import BenefitsPoints from '../BenefitsPoints/BenefitsPoints';

const Benefits: any = async () => {
	const response: any = await getDataFromStrapi(benefitsHomePage);
	const benefits: any = response?.home?.data?.attributes?.benefits;
	if (!benefits) {
		return <div>Missing data or invalid data structure.</div>;
	}
	const { testimonials, benefit_points } = benefits;

	return (
		<section className="hidden section lg:block">
			<div className="container">
				<Heading
					size={'h2'}
					variant={'medium'}
					className="text-center text-dark-blue"
				>
					If This Is
					<span className="font-bold text-green"> You</span>
				</Heading>
				<BenefitTestimonials testimonials={testimonials} />
				<BenefitsPoints benefitPoints={benefit_points} />
			</div>
		</section>
	);
};

export default Benefits;
