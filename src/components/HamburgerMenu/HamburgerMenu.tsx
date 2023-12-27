import { cn } from '@/lib/utils/utils';
import Link from 'next/link';
import { FC } from 'react';
import Button from '../ui/Button/Button';
import Paragraph from '../ui/Paragraph/Paragraph';
import './HamburgerMenu.css';

interface HamburgerMenuProps {
	open: boolean;
}

const HamburgerMenu: FC<HamburgerMenuProps> = ({ open }) => {
	return (
		<div className={cn('menu', open ? 'menu-open' : '')}>
			<div className="w-full px-16">
				<ul className="flex flex-col items-center justify-center gap-12">
					<li>
						<Paragraph size={'lg'} variant={'regular'}>
							<a href="/categories" className="text-white font-regular">
								Software Categories
							</a>
						</Paragraph>
					</li>
					<li>
						<Paragraph size={'lg'} variant={'regular'}>
							<a href="/resources" className="text-white font-regular">
								Resources
							</a>
						</Paragraph>
					</li>
					<li>
						<Paragraph size={'lg'} variant={'regular'}>
							<a href="/lead-generation" className="text-white font-regular">
								For Vendors
							</a>
						</Paragraph>
					</li>
				</ul>
				<div className="flex flex-col items-center justify-center gap-6 mt-24">
					<Link prefetch={false} href="tel:+16613847070" className="w-full">
						<Button
							size={'lg'}
							variant={'green'}
							className="flex justify-center w-full max-w-sm mx-auto"
						>
							Call Us
						</Button>
					</Link>
					<Paragraph size={'lg'} variant={'medium'} className=" text-green">
						<a href="tel:+16613847070">Get help - it's free</a>
					</Paragraph>
				</div>
			</div>
		</div>
	);
};

export default HamburgerMenu;
