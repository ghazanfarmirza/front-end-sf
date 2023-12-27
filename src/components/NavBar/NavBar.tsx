import Link from 'next/link';
import { FC } from 'react';
import { navLinks } from '../../lib/settings/settings';
import styles from './NavBar.module.css';

interface NavBarProps {}

const NavBar: FC<NavBarProps> = () => {
	return (
		<nav>
			<ul className="flex items-center gap-6">
				{navLinks.map((navLink) => (
					<li
						key={navLink.name}
						className="overflow-hidden text-sm font-regular"
					>
						<Link prefetch={false} href={navLink.link} className={styles.link}>
							{navLink.name}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default NavBar;
