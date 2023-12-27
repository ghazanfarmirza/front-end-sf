import UserReviewCard from '@/components/UserReviewCard/UserReviewCard';
import Heading from '@/components/ui/Heading/Heading';
import RightArrowLink from '@/components/ui/Link/RightArrowLink/RightArrowLink';
import { cn } from '@/lib/utils/utils';
import Link from 'next/link';
import { FC } from 'react';
import styles from './UserReviewGrid.module.css';

interface UserReviewGridProps {
	topRatedVendors: {
		title: string;
		image: string;
		link: string;
	}[];
	link: string;
}

const UserReviewGrid: FC<UserReviewGridProps> = ({ topRatedVendors, link }) => {
	return (
		<section className={cn(styles.section, 'hidden lg:block')}>
			<div className="container">
				<Heading size={'h3'} variant={'semibold'} className="text-center">
					Make decisions with real reviews from real users
				</Heading>
				<div className="grid grid-cols-3 gap-16 mt-12">
					{topRatedVendors.map((item: any) => (
						<Link prefetch={false} href={item.link} key={item.title}>
							<UserReviewCard
								key={item.title}
								title={item.title}
								image={process.env.NEXT_PUBLIC_STRAPI_IMAGE_URL + item.image}
							/>
						</Link>
					))}
				</div>
				<div className="flex items-center justify-end mt-12">
					<RightArrowLink link={link} title="See All Reviews" />
				</div>
			</div>
		</section>
	);
};

export default UserReviewGrid;
