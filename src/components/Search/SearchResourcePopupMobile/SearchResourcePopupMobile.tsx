import { cn } from '@/lib/utils/utils';
import { X } from 'lucide-react';
import Link from 'next/link';
import { FC } from 'react';
import styles from './SearchResourcePopupMobile.module.css';

interface SearchResourcePopupMobileProps {
	isOpen: boolean;
	setIsOpen: (isOpen: boolean) => void;
}

const SearchResourcePopupMobile: FC<SearchResourcePopupMobileProps> = ({
	isOpen,
	setIsOpen,
}) => {
	return (
		<div className={cn(styles.search, isOpen ? 'block' : 'hidden')}>
			<input type="text" placeholder="How can we help?" className="w-full" />
			<X
				width={24}
				height={24}
				onClick={() => setIsOpen(false)}
				className="cursor-pointer"
			/>

			<div className="p-7">
				<ul className="flex flex-col gap-4">
					<li>
						<Link
							prefetch={false}
							href="#"
							className="text-[#c1c1c1] font-medium"
						>
							EMR Software
						</Link>
					</li>
					<li>
						<Link
							prefetch={false}
							href="#"
							className="text-[#c1c1c1] font-medium"
						>
							CRM
						</Link>
					</li>
					<li>
						<Link
							prefetch={false}
							href="#"
							className="text-[#c1c1c1] font-medium"
						>
							Project Managing
						</Link>
					</li>
					<li>
						<Link
							prefetch={false}
							href="#"
							className="text-[#c1c1c1] font-medium"
						>
							LMS
						</Link>
					</li>
					<li>
						<Link
							prefetch={false}
							href="#"
							className="text-[#c1c1c1] font-medium"
						>
							Marketing
						</Link>
					</li>
					<li>
						<Link
							prefetch={false}
							href="#"
							className="text-[#c1c1c1] font-medium"
						>
							EHR
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default SearchResourcePopupMobile;
