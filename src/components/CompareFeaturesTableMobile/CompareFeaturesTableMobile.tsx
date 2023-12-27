import { cn } from '@/lib/utils/utils';
import { Check, X } from 'lucide-react';
import Image from 'next/image';
import { FC } from 'react';
import Heading from '../ui/Heading/Heading';
import Paragraph from '../ui/Paragraph/Paragraph';
import styles from './CompareFeaturesTableMobile.module.css';

interface CompareFeaturesTableMobileProps {
	featureProperties: any[];
	vendorsfeatures: any[];
}
const CompareFeaturesTableMobile: FC<CompareFeaturesTableMobileProps> = ({
	featureProperties,
	vendorsfeatures,
}) => {
	return (
		<>
			{/* For Tablets and Small Laptops */}
			<section className={'hidden md:block lg:hidden'}>
				<div className="container">
					<Heading
						size={'h3'}
						variant={'semibold'}
						className="text-center text-black"
					>
						Compare Features
					</Heading>
					<table className={cn(styles.table, 'mt-12')}>
						<thead>
							<tr className="grid items-center justify-center grid-cols-4 gap-8 pb-6 lg:grid-cols-6">
								<th>
									<Heading size={'h5'} variant={'bold'} className="text-black">
										Feature List
									</Heading>
								</th>
								{vendorsfeatures.slice(0, 3)?.map((item: any) => (
									<th
										className="flex flex-col gap-3"
										key={item?.attributes.slug}
									>
										<div className={styles.img_box}>
											<Image
												src={
													process.env.NEXT_PUBLIC_STRAPI_IMAGE_URL +
													item?.attributes?.logo?.image_url
												}
												alt="table-img"
												width={98}
												height={50}
											/>
										</div>
										<Paragraph variant={'semibold'} className="text-black">
											{item?.attributes?.name}
										</Paragraph>
									</th>
								))}

								{vendorsfeatures.slice(0, 2)?.map((item: any) => (
									<th
										className="flex-col gap-3 hidden lg:flex"
										key={item?.attributes.slug}
									>
										<div className={styles.img_box}>
											<Image
												src={
													process.env.NEXT_PUBLIC_STRAPI_IMAGE_URL +
													item?.attributes?.logo?.image_url
												}
												alt="table-img"
												width={98}
												height={50}
											/>
										</div>
										<Paragraph variant={'semibold'} className="text-black">
											{item?.attributes?.name}
										</Paragraph>
									</th>
								))}
							</tr>
						</thead>
						<tbody>
							{featureProperties?.map((item: any, index: number) => (
								<tr
									className={cn(
										index % 2 === 0 ? styles.row_transparent : styles.row_fill,
										'items-center justify-center grid grid-cols-4 lg:grid-cols-6 gap-8'
									)}
									key={index}
								>
									<td className="flex items-center justify-center">
										<Paragraph
											variant={'medium'}
											className="text-black text-center"
										>
											{item.title}
										</Paragraph>
									</td>
									{vendorsfeatures.slice(0, 3)?.map((feature: any) => {
										const status =
											feature.attributes.specifications[index].status;
										return (
											<td
												className="flex items-center justify-center"
												key={feature.id}
											>
												{status ? (
													<div className={styles.tick}>
														<Check size={24} />
													</div>
												) : (
													<div className={styles.false}>
														<X size={24} />
													</div>
												)}
											</td>
										);
									})}

									{vendorsfeatures.slice(0, 2)?.map((feature: any) => {
										const status =
											feature.attributes.specifications[index].status;
										return (
											<td
												className="items-center justify-center hidden lg:flex"
												key={feature.id}
											>
												{status ? (
													<div className={styles.tick}>
														<Check size={24} />
													</div>
												) : (
													<div className={styles.false}>
														<X size={24} />
													</div>
												)}
											</td>
										);
									})}
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</section>
			{/* For Mobile Screens */}
			<section className={'block md:hidden'}>
				<div className="container">
					<Heading
						size={'h3'}
						variant={'semibold'}
						className="text-center text-black"
					>
						Compare Features
					</Heading>
					<table className={cn(styles.table, 'mt-12')}>
						<thead>
							<tr className="grid items-center justify-center grid-cols-2 gap-8 pb-6">
								{vendorsfeatures.slice(0, 2)?.map((item: any) => (
									<th
										className="flex flex-col gap-3"
										key={item?.attributes.slug}
									>
										<div className={styles.img_box}>
											<Image
												src={
													process.env.NEXT_PUBLIC_STRAPI_IMAGE_URL +
													item?.attributes?.logo?.image_url
												}
												alt="table-img"
												width={98}
												height={50}
											/>
										</div>
										<Paragraph variant={'semibold'} className="text-black">
											{item?.attributes?.name}
										</Paragraph>
									</th>
								))}
							</tr>
						</thead>
						<tbody>
							{featureProperties?.map((feature: any, index: number) => (
								<tr
									className={cn(
										index % 2 === 0 ? styles.row_transparent : styles.row_fill,
										'items-center justify-center grid grid-cols-3 gap-8'
									)}
									key={index}
								>
									<td className="flex items-center justify-center">
										{vendorsfeatures[0].attributes.specifications[index]
											.status ? (
											<div className={styles.tick}>
												<Check size={24} />
											</div>
										) : (
											<div className={styles.false}>
												<X size={24} />
											</div>
										)}
									</td>
									<td className="flex items-center justify-center">
										<Paragraph
											variant={'medium'}
											className="text-black text-center"
										>
											{feature.title}
										</Paragraph>
									</td>
									<td className="flex items-center justify-center">
										{vendorsfeatures[1].attributes.specifications[index]
											.status ? (
											<div className={styles.tick}>
												<Check size={24} />
											</div>
										) : (
											<div className={styles.false}>
												<X size={24} />
											</div>
										)}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</section>
		</>
	);
};

export default CompareFeaturesTableMobile;
