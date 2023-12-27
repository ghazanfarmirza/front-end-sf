import WhitepaperLists from '@/components/Whitepapers/WhitepaperLists/WhitepaperLists';
import Button from '@/components/ui/Button/Button';
import Heading from '@/components/ui/Heading/Heading';
import Link from 'next/link';
import { FC } from 'react';
import WhitePapersMobile from '../WhitePapersMobile/WhitePapersMobile';

interface WhitepapersProps {}

const Whitepapers: FC<WhitepapersProps> = () => {
	return (
		<section className="section">
			<div className="container">
				<Heading
					size={'h2'}
					variant={'medium'}
					className="max-w-screen-lg mx-auto text-left lg:text-center text-dark-blue"
				>
					Speed up your selection with our
					<span className="font-bold text-green"> Whitepapers</span> and
					<span className="font-bold text-green"> Checklists</span>
				</Heading>
				<div className="hidden lg:block">
					<WhitepaperLists />
				</div>
				<div className="block lg:hidden">
					<WhitePapersMobile />
				</div>
				<div className="flex justify-center mt-12">
					<Link prefetch={false} href="/resources">
						<Button variant={'green'} size={'lg'}>
							View All Resources
						</Button>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Whitepapers;
