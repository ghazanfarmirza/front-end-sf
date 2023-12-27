import Cta from '@/components/CtaFolder/Cta/Cta';
import { FC } from 'react';

interface CtaContainerProps {}

const CtaContainer: FC<CtaContainerProps> = () => {
	return (
		<section className="py-14 bg-light-green">
			<div className="container">
				<Cta />
			</div>
		</section>
	);
};

export default CtaContainer;
