import SearchBarFill from '@/components/Search/SearchBarFill/SearchBarFill';
import { heroContentHomePage } from '@/lib/gql';
import { getDataFromStrapi } from '@/lib/networkCalls/strapiFunctions';
import Image from 'next/image';
import heroImage from '../../../../public/images/hero-image.svg';
import Button from '../../../components/ui/Button/Button';
import Heading from '../../../components/ui/Heading/Heading';
import Paragraph from '../../../components/ui/Paragraph/Paragraph';
import styles from './HeroContent.module.css';

const HeroContent: any = async () => {
	const heroResponse: any = await getDataFromStrapi(heroContentHomePage);

	const hero = heroResponse?.home?.data?.attributes?.hero;
	if (!hero) {
		return null;
	}

	const { heading, paragraph, heading_image, hero_image } = hero;

	return (
		<div className={styles.hero_inner}>
			<div className="container">
				<div className="grid grid-cols-1 gap-12 lg:grid-cols-12 gap-xl-24">
					<div className="lg:col-span-7">
						<div className="main-heading">
							<Heading
								size={'h1'}
								className="main-heading"
								style={{ lineHeight: '84px' }}
							>
								{heading}
							</Heading>
							<Image
								src={heading_image?.data?.attributes?.url || '/'}
								width={112}
								height={42}
								alt="sun"
								className="hidden lg:block"
							/>
						</div>
						<div className="max-w-xl">
							<Paragraph size={'lg'} variant={'light'} className="mt-8 mb-6">
								{paragraph} —{' '}
								<span className="font-semibold">all in one place.</span>
							</Paragraph>
							<SearchBarFill />
							<Button variant={'green'} size={'lg'} className="mt-8">
								Or Get Free Recommendation
							</Button>
						</div>
					</div>
					<div className="hidden lg:col-span-5 lg:block">
						<Image
							src={
								hero_image?.data
									? hero_image?.data?.attributes?.url || '/'
									: heroImage
							}
							alt="hero-image"
							priority
							className="ml-auto"
							width={533}
							height={570}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroContent;
