'use client';
import AboutCommitBox from '@/components/About/AboutCommitBox/AboutCommitBox';
import Heading from '@/components/ui/Heading/Heading';
import Paragraph from '@/components/ui/Paragraph/Paragraph';
import { FC } from 'react';
import SwiperCore, { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
SwiperCore.use([Pagination]);

interface AboutCommitProps {
	data: any;
}

const AboutCommit: FC<AboutCommitProps> = ({ data }: AboutCommitProps) => {
	return (
		<>
			<style jsx global>
				{`
					.about_commit_mobile .swiper-pagination-bullet {
						width: 12px;
						height: 12px;
					}
					.about_commit_mobile {
						padding-bottom: 54px;
					}
					.about_commit_mobile .swiper-pagination-bullet {
						width: 16px;
						height: 16px;
						background: #a5a5a5;
						opacity: 1;
					}
					.about_commit_mobile .swiper-pagination-bullet-active {
						opacity: 1;
						background: #10292d;
					}

					.about_commit_mobile .swiper-pagination-bullet {
						width: 12px;
						height: 12px;
					}
				`}
			</style>
			<section>
				<div className="container">
					<Heading
						className="text-left text-black lg:text-center"
						size={'h3'}
						variant={'semibold'}
					>
						{data?.title}
					</Heading>
					<Paragraph className="max-w-3xl mx-auto mt-4 text-left text-black lg:text-center">
						{data?.paragrpah}
					</Paragraph>
					<div className="items-start hidden grid-cols-3 gap-24 lg:grid mt-14">
						{data.about_commit_box.map((commit: any, index: number) => (
							<AboutCommitBox key={index} data={commit} />
						))}
					</div>
					<div className="block mt-16 lg:hidden">
						<Swiper
							pagination={{ clickable: true }}
							spaceBetween={30}
							className={'about_commit_mobile'}
							slidesPerView={1}
							breakpoints={{
								767: {
									slidesPerView: 2,
								},
							}}
						>
							{data.about_commit_box.map((commit: any, index: number) => (
								<SwiperSlide key={index}>
									<AboutCommitBox data={commit} />
								</SwiperSlide>
							))}
						</Swiper>
					</div>
				</div>
			</section>
		</>
	);
};

export default AboutCommit;
