'use client';
import { FooterResources, FooterSoftwares } from '@/lib/types/types';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import FooterList from '../FooterList/FooterList';
import SocialIcons from '../SocialIcons/SocialIcons';
import Heading from '../ui/Heading/Heading';
import Paragraph from '../ui/Paragraph/Paragraph';

interface FooterProps {
	topSoftwares: FooterSoftwares[];
	topResources: FooterResources[];
}

const Footer: FC<FooterProps> = ({ topSoftwares, topResources }) => {
	return (
		<footer className="hidden bg-black lg:block">
			<div className="py-20 footer-inner">
				<div className="container">
					<div className="grid grid-cols-12 gap-12 gap-xl-24">
						{topSoftwares &&
							topSoftwares.map((item) => (
								<div className="col-span-4 xl:col-span-3" key={item.title}>
									<Heading
										size={'h5'}
										variant={'medium'}
										className="text-white"
									>
										{item.title}
									</Heading>
									<FooterList
										list={item.vendors.data.map((vendor) => ({
											title: vendor.attributes?.name,
											slug: vendor.attributes?.slug,
											categories: vendor.attributes?.categories,
										}))}
									/>
								</div>
							))}
						{topResources &&
							topResources.map((item) => (
								<div className="col-span-4 xl:col-span-4" key={item.title}>
									<Heading
										size={'h5'}
										variant={'medium'}
										className="text-white"
									>
										{item.title}
									</Heading>
									<FooterList
										list={item.resources.data.map((resource) => ({
											title: resource.attributes?.title,
											slug: resource.attributes?.slug,
										}))}
									/>
								</div>
							))}

						<div className="col-span-6 mt-6 xl:col-span-3 xl:col-start-10">
							<Image
								src="/images/logo-light.svg"
								alt="logo"
								width={300}
								height={70}
							/>
							<Paragraph
								size={'default'}
								variant={'medium'}
								className="mt-8 text-green"
							>
								Interested in partnering with us for your lead generation
								efforts?
							</Paragraph>
							<Paragraph
								size={'default'}
								variant={'medium'}
								className="mt-2 text-white"
							>
								Call us at <a href="tel:+16613847070">(661) 384-7070</a> or send
								us an email at{' '}
								<a href="mailto:info@softwarefinder.com">
									info@softwarefinder.com
								</a>
							</Paragraph>

							<SocialIcons />
						</div>
					</div>
				</div>
			</div>
			<div className="py-5 border border-t-1 footer-bottom border-t-white">
				<div className="container">
					<div className="flex items-center justify-between">
						<div className="flex items-center gap-8">
							<Paragraph
								size={'small'}
								variant={'regular'}
								className="text-white"
							>
								Software Finder © 2023 All Rights Reserved
							</Paragraph>
							<Paragraph
								size={'small'}
								variant={'regular'}
								className="text-white"
							>
								<Link
									prefetch={false}
									href="/privacy-policy"
									className="text-sm hover:text-green transition-effect"
									target="_blank"
								>
									Privacy Policy
								</Link>{' '}
								|{' '}
								<Link
									prefetch={false}
									href="/terms-of-service"
									className="text-sm hover:text-green transition-effect"
									target="_blank"
								>
									Terms of Service
								</Link>
							</Paragraph>
						</div>
						<div>
							<ul className="flex items-center gap-8 text-white">
								<li className="footer-bottom-list">
									<Link
										prefetch={false}
										href="/contact-us"
										className="text-sm hover:text-green transition-effect"
									>
										Contact Us
									</Link>
								</li>
								<li className="footer-bottom-list">
									<Link
										prefetch={false}
										href="/about-us"
										className="text-sm hover:text-green transition-effect"
									>
										About Us
									</Link>
								</li>
								<li className="footer-bottom-list">
									<Link
										prefetch={false}
										href="/lead-generation"
										className="text-sm hover:text-green transition-effect"
									>
										For Vendors
									</Link>
								</li>
								<li>
									<Link
										prefetch={false}
										href="/sitemap"
										className="text-sm hover:text-green transition-effect"
									>
										Sitemap
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
