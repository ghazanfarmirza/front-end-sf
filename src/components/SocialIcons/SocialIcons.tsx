import Facebook from '@/svg/Facebook';
import Linkedin from '@/svg/Linkedin';
import Twitter from '@/svg/Twitter';
import Youtube from '@/svg/Youtube';
import { FC } from 'react';

interface SocialIconsProps {}

const SocialIcons: FC<SocialIconsProps> = () => {
	return (
		<div>
			<ul className={'social_icons'}>
				<li>
					<a
						href="https://www.facebook.com/softwarefinderUS"
						target="_blank"
						rel="noreferrer"
						className="w-8 h-8 rounded transition-effect"
					>
						<Facebook className="facebook" />
					</a>
				</li>
				<li>
					<a
						href="https://www.linkedin.com/company/softwarefinder-us"
						className="w-8 h-8 rounded transition-effect"
						target="_blank"
						rel="noreferrer"
					>
						<Linkedin className="linkedin" />
					</a>
				</li>
				<li>
					<a
						href="https://twitter.com/softwarefinder2"
						className="w-8 h-8 rounded transition-effect"
						target="_blank"
						rel="noreferrer"
					>
						<Twitter className="twitter" />
					</a>
				</li>
				<li>
					<a
						href="https://www.youtube.com/@softwarefinder"
						className="w-8 h-8 rounded transition-effect"
						target="_blank"
						rel="noreferrer"
					>
						<Youtube className="youtube" />
					</a>
				</li>
			</ul>
		</div>
	);
};

export default SocialIcons;
