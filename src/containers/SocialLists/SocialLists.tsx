import UnderlineHeading from '@/components/UnderlineHeading/UnderlineHeading';
import Image from 'next/image';
import { FC } from 'react';

interface SocialListsProps {
	name: string;
}

const SocialLists: FC<SocialListsProps> = ({ name }) => {
	return (
		<section className="mt-16">
			<UnderlineHeading title={'Connect with ' + name} />
			<ul className="flex items-center justify-start gap-4 mt-4">
				<li>
					<a href="#">
						<Image
							src="/images/linkedin.png"
							alt="linkedin"
							width={50}
							height={50}
						/>
					</a>
				</li>
				<li>
					<a href="#">
						<Image
							src="/images/twitter.png"
							alt="linkedin"
							width={50}
							height={50}
						/>
					</a>
				</li>
			</ul>
		</section>
	);
};

export default SocialLists;
