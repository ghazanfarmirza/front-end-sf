import { cn } from '@/lib/utils/utils';
import Link from 'next/link';
import { FC } from 'react';
import styles from './FooterMobileNav.module.css';

interface FooterMobileNavProps {}

const FooterMobileNav: FC<FooterMobileNavProps> = () => {
	return (
		<ul className={cn(styles.list, 'flex items-center gap-8 pt-8 pb-4')}>
			<li>
				<Link
					prefetch={false}
					href="/contact-us"
					className="font-medium text-white text-small hover:text-green transition-effect"
				>
					Contact Us
				</Link>
			</li>
			<li>
				<Link
					prefetch={false}
					href="/about-us"
					className="font-medium text-white text-small hover:text-green transition-effect"
				>
					About Us
				</Link>
			</li>
			<li>
				<Link
					prefetch={false}
					href="/lead-generation"
					className="font-medium text-white text-small hover:text-green transition-effect"
				>
					For Vendor
				</Link>
			</li>
			<li>
				<Link
					prefetch={false}
					href="/sitemap"
					className="font-medium text-white text-small hover:text-green transition-effect"
				>
					Sitemap
				</Link>
			</li>
		</ul>
	);
};

export default FooterMobileNav;
