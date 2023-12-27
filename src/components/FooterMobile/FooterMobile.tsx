import { FooterResources, FooterSoftwares } from '@/lib/types/types';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import FooterMobileNavCollapse from '../FooterMobileCollapse/FooterMobileCollapse';
import FooterMobileNav from '../FooterMobileNav/FooterMobileNav';
import SocialIcons from '../SocialIcons/SocialIcons';
import Paragraph from '../ui/Paragraph/Paragraph';

interface FooterMobileProps {
	topSoftwares: FooterSoftwares[];
	topResources: FooterResources[];
}

const FooterMobile: FC<FooterMobileProps> = ({
	topResources,
	topSoftwares,
}) => {
	return (
		<footer className="block py-6 bg-black lg:hidden">
			<div className="container">
				<Image
					src="/images/logo-light.svg"
					alt="logo"
					className="mt-5"
					width={200}
					height={70}
				/>
				<div className="mt-6">
					{topSoftwares &&
						topSoftwares.map((item) => (
							<FooterMobileNavCollapse
								key={item.vendors.data[0].attributes?.slug}
								id={item.vendors.data[0].attributes?.slug}
								question={item.title}
								answer={item.vendors.data}
							/>
						))}
					{topResources &&
						topResources.map((item) => (
							<FooterMobileNavCollapse
								key={item.resources.data[0].attributes?.slug}
								id={item.resources.data[0].attributes?.slug}
								question={item.title}
								answer={item.resources.data}
							/>
						))}
				</div>

				<FooterMobileNav />
				<SocialIcons />
				<div className="pt-5 mt-5 border border-b-0 border-l-0 border-r-0 border-t-1 footer-bottom border-t-white ">
					<div className="flex flex-col gap-3">
						<div className="flex items-center gap-8">
							<Paragraph
								size={'small'}
								variant={'semibold'}
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
							<Paragraph
								size={'small'}
								variant={'regular'}
								className="text-white"
							>
								Software Finder © 2023 All Rights Reserved
							</Paragraph>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default FooterMobile;
