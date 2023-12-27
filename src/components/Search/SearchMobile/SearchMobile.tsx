import Image from 'next/image';
import { FC } from 'react';

interface SearchMobileProps {
	setIsNavOpen: (isOpen: boolean) => void;
}

const SearchMobile: FC<SearchMobileProps> = ({ setIsNavOpen }) => {
	return (
		<div onClick={() => setIsNavOpen(true)} className="cursor-pointer">
			<Image
				src="/images/icon-search.svg"
				width={32}
				height={32}
				alt="icon-search"
			/>
		</div>
	);
};

export default SearchMobile;
