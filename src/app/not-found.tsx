import Header from '@/components/Header/Header';
import Button from '@/components/ui/Button/Button';
import Heading from '@/components/ui/Heading/Heading';
import Paragraph from '@/components/ui/Paragraph/Paragraph';
import { errorPageQuery } from '@/lib/gql';
import { getDataFromStrapi } from '@/lib/networkCalls/strapiFunctions';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const NotFound: any = async () => {
	const response: any = await getDataFromStrapi(errorPageQuery);
	const attributes = response?.errorPage?.data?.attributes;
	if (!attributes) {
		return <div>Missing data or invalid data structure.</div>;
	}
	const { left_section, right_section, bottom_section } = attributes;
	return (
		<>
			<Header sticky={true} />
			<div className="block pt-6 lg:hidden">
				<div className="container">
					<Link
						prefetch={false}
						href="/"
						className="flex items-start gap-2 font-semibold lg:items-center lg:hidden link-text text-green"
					>
						<ArrowLeft size={20} />
						Back to Home
					</Link>
				</div>
			</div>
			<section className="section">
				<div className="container">
					<div className="flex flex-col items-center grid-cols-12 gap-12 lg:gap-24 lg:grid">
						<div className="lg:col-span-7">
							<Heading size="h2" variant={'bold'} className="text-black">
								{left_section?.title}
							</Heading>
							<Paragraph
								size="default"
								variant={'regular'}
								className="py-4 text-light-color"
							>
								{left_section?.description}
							</Paragraph>
							<Image
								src={left_section?.image?.data?.attributes?.url}
								width={630}
								height={420}
								alt="notfound"
							/>
						</div>
						<div className="lg:col-span-5">
							<Heading size={'h4'} variant={'semibold'} className="text-green">
								{right_section[0]?.title}
							</Heading>
							<Paragraph
								size={'default'}
								variant={'regular'}
								className="py-4 text-black lg:py-8"
							>
								{right_section[0]?.description}
							</Paragraph>
							<Button variant={'green'} size={'default'}>
								{right_section[0]?.first_button.title}
							</Button>
							<Paragraph
								size={'default'}
								variant={'regular'}
								className="hidden py-6 text-black lg:block"
							>
								{right_section[0]?.bottom_description}
							</Paragraph>
							<Link
								prefetch={false}
								href={right_section[0]?.back_button.url}
								className="items-center hidden gap-2 font-semibold lg:flex link-text text-green"
							>
								<ArrowLeft size={20} />
								{right_section[0]?.back_button.title}
							</Link>
						</div>
					</div>
					<div className="mt-12 lg:mt-24">
						<div className="underline_heading">
							<Heading size={'h5'} variant={'medium'} className="text-black">
								{bottom_section?.title}
							</Heading>
						</div>
						<div className="grid grid-cols-1 gap-6 mt-8 lg:gap-12 md:grid-cols-2 lg:grid-cols-3">
							<div className="text-left md:text-center">
								<Paragraph size={'default'} variant={'regular'}>
									{bottom_section?.paragraphs[0].text}
								</Paragraph>
							</div>
							<div className="text-left md:text-center">
								<Paragraph size={'default'} variant={'regular'}>
									{bottom_section?.paragraphs[1].text}
								</Paragraph>
							</div>
							<div className="text-left md:text-center">
								<Paragraph size={'default'} variant={'regular'}>
									{bottom_section?.paragraphs[2].text}
								</Paragraph>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default NotFound;
