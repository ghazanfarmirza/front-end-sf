'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC, useState } from 'react';
import phone from '../../../public/images/phone_call.svg';
import phoneCall from '../../../public/images/phone_call_hover.svg';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import NavBar from '../NavBar/NavBar';
import Searchbar from '../Search/SearchBarTransparent/SearchBarTransparent';
import SearchMobile from '../Search/SearchMobile/SearchMobile';
import SearchPopupMobile from '../Search/SearchPopupMobile/SearchPopupMobile';
import SearchResourcePopupMobile from '../Search/SearchResourcePopupMobile/SearchResourcePopupMobile';
import HamburgerButton from '../ui/HamburgerButton/HamburgerButton';
import Paragraph from '../ui/Paragraph/Paragraph';
import style from './Header.module.css';
interface HeaderProps {
	sticky: boolean;
	vendors?: any;
	subCategories?: any;
}

const HeaderLayout: FC<HeaderProps> = ({ sticky }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [navOpen, setIsNavOpen] = useState(false);
	const pathname = usePathname();

	return (
		<>
			<header className={sticky ? style.header_sticky : style.header}>
				<div className="container">
					<div className="flex items-center justify-between">
						<div className="flex items-center gap-8 header__left">
							<div className={style.header__left_logo}>
								<Link prefetch={false} href="/" className="block link-focus">
									<Image
										src={'/images/logo-light.svg'}
										alt="logo"
										width={195}
										height={70}
									/>
								</Link>
							</div>
							<div className="hidden header__left_search-bar xl:block">
								<Searchbar />
							</div>
						</div>
						<div className="items-center hidden gap-12 header__right lg:flex">
							<div className="header__right_menu">
								<NavBar />
							</div>
							<div className={style.phone_btn}>
								<Link
									prefetch={false}
									href="tel:(661)-384-7070"
									className="block link-focus"
								>
									<Image src={phone} className={style.phone} alt="icon-phone" />
									<Image
										src={phoneCall}
										className={style.phone_call}
										alt="icon-phone-call"
									/>
									<div className={style.tooltip}>
										<Paragraph>(661)-384-7070</Paragraph>
									</div>
								</Link>
							</div>
						</div>
						<div className="flex items-center gap-3 lg:hidden">
							<SearchMobile setIsNavOpen={setIsNavOpen} />
							<HamburgerButton open={isOpen} setOpen={setIsOpen} />
							<HamburgerMenu open={isOpen} />
						</div>
					</div>
				</div>
			</header>
			{pathname === '/resources' ? (
				<SearchResourcePopupMobile isOpen={navOpen} setIsOpen={setIsNavOpen} />
			) : (
				<SearchPopupMobile isOpen={navOpen} setIsOpen={setIsNavOpen} />
			)}
		</>
	);
};

export default HeaderLayout;
