import { cn } from '@/lib/utils/utils';
import { Check, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import Heading from '../ui/Heading/Heading';
import Paragraph from '../ui/Paragraph/Paragraph';
import styles from './CompareFeaturesTable.module.css';

interface CompareFeaturesTableProps {
	featureProperties: any[];
	vendorsfeatures: any[];
}

const CompareFeaturesTable: FC<CompareFeaturesTableProps> = ({
	featureProperties,
	vendorsfeatures,
}: CompareFeaturesTableProps) => {
	return (
		<section className={'hidden lg:block'}>
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
						<tr className="grid items-baseline justify-center grid-cols-6 gap-8 pb-6">
							<th className="flex items-center justify-center">
								<Heading size={'h5'} variant={'bold'} className="text-black">
									Feature List
								</Heading>
							</th>
							{vendorsfeatures.map((item: any) => (
								<Link
									key={item?.attributes.slug}
									href={`/${item?.attributes?.categories?.data[0]?.attributes.slug}/${item?.attributes.slug}`}
								>
									<th className="flex flex-col gap-3">
										<div className={styles.img_box}>
											<Image
												src={
													item.attributes?.data?.image?.url ||
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
								</Link>
							))}
						</tr>
					</thead>
					<tbody>
						{featureProperties?.map((item: any, index: number) => (
							<>
								<tr
									className={cn(
										index % 2 === 0 ? styles.row_transparent : styles.row_fill,
										'items-center justify-center grid grid-cols-6 gap-8'
									)}
								>
									<td className="flex items-center justify-center" key={index}>
										<Paragraph
											variant={'medium'}
											className="text-black text-center"
										>
											{item.title}
										</Paragraph>
									</td>
									{vendorsfeatures.map((feature: any) => {
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
								</tr>
							</>
						))}
					</tbody>
				</table>
			</div>
		</section>
	);
};

export default CompareFeaturesTable;
