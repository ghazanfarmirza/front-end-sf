'use client';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import ReactPlayer from 'react-player';
import Heading from '../ui/Heading/Heading';

export type ThankYouType = 'demo' | 'pricing' | 'quote' | 'portfolio';

const ThankYouContent: any = () => {
	const searchParams = useSearchParams();

	const type = searchParams.get('type');
	const videoId = searchParams.get('videoId');
	const vendor = searchParams.get('vendor');
	const name = searchParams.get('name');
	//if name is not null navigate back
	if (name) {
		window.history.back();
	}
	switch (type) {
		case 'demo':
			return (
				<section>
					<div className="container">
						<Heading size={'h2'} variant={'bold'}>
							We've Received Your Request
						</Heading>
						<div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2 lg:mt-14">
							<div>
								<ReactPlayer
									url={`https://www.youtube.com/watch?v=${videoId}`}
									width={'100%'}
								/>
							</div>
							<div>
								<Heading size={'h5'} variant={'regular'} className="text-black">
									Our consultants will get in touch with you shortly with the
									information you’ve requested. Meanwhile, please feel free to
									look over some of our free resources specially developed for
									software buyers like you.
								</Heading>
								<div className="separater"></div>
								<Heading size={'h5'} variant={'regular'} className="text-black">
									If you’re in a hurry to get in touch, call us at{' '}
									<a href="tel:(661) 384-7070" className="text-green underline">
										(661) 384-7070.
									</a>
								</Heading>
							</div>
						</div>
					</div>
				</section>
			);
		case 'pricing':
			return (
				<section>
					<div className="container">
						<div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-12">
							<div className="lg:col-span-8">
								<Heading size={'h2'} variant={'bold'}>
									We've Received Your Request
								</Heading>
								<Heading
									size={'h5'}
									variant={'regular'}
									className="mt-6 text-black"
								>
									Our consultants will get in touch with you shortly with the
									information you’ve requested. Meanwhile, please feel free to
									look over some of our free resources specially developed for
									software buyers like you.
								</Heading>
								<div className="separater"></div>
								<Heading size={'h5'} variant={'regular'} className="text-black">
									If you’re in a hurry to get in touch, call us at{' '}
									<a href="tel:(661) 384-7070" className="text-green underline">
										(661) 384-7070.
									</a>
								</Heading>
							</div>
							<div className="lg:col-span-4">
								<Image
									src="/images/resource1.svg"
									alt=""
									width={'432'}
									height={'440'}
									className="mx-auto"
								/>
							</div>
						</div>
					</div>
				</section>
			);
		case 'quote':
			return (
				<section>
					<div className="container">
						<div className="flex flex-col items-start justify-center text-center lg:items-center">
							<Image
								src="/images/mail-icon.png"
								alt="icon"
								width={'120'}
								height={'120'}
								className="mx-auto"
							/>
							<Heading
								size={'h2'}
								variant={'bold'}
								className="mt-4 text-left lg:text-center"
							>
								We’ve Received Your Request!
							</Heading>
							<Heading
								size={'h5'}
								variant={'regular'}
								className="mt-6 text-left text-black lg:text-center"
							>
								Our consultants will get in touch with you shortly with the
								information you’ve requested. Meanwhile, please feel free to
								look over some of our free resources specially developed for
								software buyers like you.
							</Heading>
							<div className="separater"></div>
							<Heading size={'h5'} variant={'regular'} className="text-black">
								If you’re in a hurry to get in touch, call us at{' '}
								<a href="tel:(661) 384-7070" className="text-green underline">
									(661) 384-7070.
								</a>
							</Heading>
						</div>
					</div>
				</section>
			);
		case 'portfolio':
			return (
				<section>
					<div className="container">
						<div className="flex flex-col items-start justify-center text-center lg:items-center">
							<Image
								src="/images/thumb.png"
								alt="icon"
								width={'120'}
								height={'120'}
								className="mx-auto"
							/>
							<Heading
								size={'h2'}
								variant={'bold'}
								className="mt-4 text-left lg:text-center"
							>
								Thank you for taking an interest in {vendor}!
							</Heading>
							<Heading
								size={'h5'}
								variant={'regular'}
								className="mt-6 text-left text-black lg:text-center"
							>
								We’ll get in touch with you with the{' '}
								<a href="#" className="text-green">
									portfolio
								</a>{' '}
								you requested soon. Meanwhile, feel free to check out our free
								resources specifically designed for software buyers like you.
							</Heading>
							<div className="separater"></div>
							<Heading size={'h5'} variant={'regular'} className="text-black">
								If you’re in a hurry to get in touch, call us at{' '}
								<a href="tel:(661) 384-7070" className="text-green underline">
									(661) 384-7070.
								</a>
							</Heading>
						</div>
					</div>
				</section>
			);
	}
};

export default ThankYouContent;
