import { cn } from '@/lib/utils/utils';
import { FC } from 'react';
import './Hamburger.css';

interface HamburgerButtonProps {
	open: boolean;
	setOpen: (open: boolean) => void;
}

const HamburgerButton: FC<HamburgerButtonProps> = ({ open, setOpen }) => {
	return (
		<div
			className={cn('btn11', open ? 'open' : '')}
			onClick={() => setOpen(!open)}
		>
			<div className="icon_left"></div>
			<div className="icon_right"></div>
		</div>
	);
};

export default HamburgerButton;
