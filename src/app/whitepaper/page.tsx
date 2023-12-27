import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import DownloadWhitePaper from '@/components/DownloadWhitePaper/DownloadWhitePaper';
import Header from '@/components/Header/Header';
import MetaTags from '@/components/MetaTags/MetaTags';
import Description from '@/components/ui/Description/Description';

interface whitePaperProps {
	resource: {
		title: string;
		content: string;
		type: string;
		status: string;
		date_added: string;
		image_url: string;
		categories: string;
		post_id: string;
		slug: string;
		seo: any;
		resource_hero: any;
	};
}

const Whitepaper = ({ resource }: whitePaperProps) => {
	if (!resource) {
		return null;
	}
	const imageUrl =
		resource.resource_hero?.data?.attributes.url ||
		`https://softwarefinder.com/${resource.image_url}`;
	return (
		<>
			<MetaTags seo={resource.seo} />
			<Header sticky={true} />
			<section
				className="bg-whitepaper"
				style={{
					backgroundImage: `url(${imageUrl})`, // Use backgroundImage
				}}
			></section>

			<BreadCrumb
				item1={{ name: 'Resource Center', link: 'resources' }}
				item2={resource.title}
			/>
			<div className="py-12">
				<div className="container">
					<div className="flex flex-col grid-cols-12 gap-12 lg:grid">
						<div className="col-span-12 lg:col-span-8">
							<Description className="mt-6 text-black">
								{resource.content}
							</Description>
						</div>
						<div className="col-span-12 lg:col-span-4">
							<DownloadWhitePaper title={resource.title} />
						</div>
					</div>
					{/* <HeadingBanner resource={{ name: resource.title, image: imageUrl }} /> */}
				</div>
			</div>
		</>
	);
};

export default Whitepaper;
