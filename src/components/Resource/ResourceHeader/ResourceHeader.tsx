import { FC } from 'react';
import Heading from '../../ui/Heading/Heading';
import Paragraph from '../../ui/Paragraph/Paragraph';

const ResourceHeader: FC = () => {
	return (
		<section className="bg-dark-blue py-9">
			<div className="container">
				<div className="flex flex-col mx-auto text-left lg:max-w-xl lg:text-center">
					<Heading
						size={'h1'}
						variant={'medium'}
						className="text-left text-white lg:text-center text-2xl g:text-3xl"
					>
						Resource Center
					</Heading>
					<Paragraph
						size={'lg'}
						variant={'regular'}
						className="py-3 text-left text-white lg:py-5 lg:text-center"
					>
						Free Whitepapers, Webinar & Blogs
					</Paragraph>
					{/* <div className="hidden lg:block">
						<SearchBarFill resources={resources} />
					</div>

					<ul className="items-center justify-between hidden gap-3 lg:flex ">
						<li className="font-medium text-green text-small">EMR Software</li>
						<li className="font-medium text-green text-small">
							Medical Software
						</li>
						<li className="font-medium text-green text-small">CRM</li>
						<li className="font-medium text-green text-small">
							Project Managing
						</li>
						<li className="font-medium text-green text-small">LMS</li>
						<li className="font-medium text-green text-small">EHR</li>
						<li className="font-medium text-green text-small">Marketing</li>
					</ul> */}
				</div>
			</div>
		</section>
	);
};

export default ResourceHeader;
