import { cn } from '@/lib/utils/utils';
import Image from 'next/image';
import { FC } from 'react';
import Heading from '../ui/Heading/Heading';
import Paragraph from '../ui/Paragraph/Paragraph';
import styles from './ComparisonTable.module.css';

interface ComparisonTableProps {
	vendors: any[];
}

const ComparisonTable: FC<ComparisonTableProps> = ({ vendors }) => {
	const [vendor1, vendor2] = vendors;
	if (!vendor1 || !vendor2) return null;
	return (
		<table className={cn(styles.table, 'my-14')}>
			<thead>
				<tr className="grid grid-cols-2 ">
					<th className="flex items-center justify-center border-td">
						<Image
							src={
								process.env.NEXT_PUBLIC_STRAPI_IMAGE_URL +
								vendor1.attributes?.logo.image_url
							}
							alt="img"
							width={150}
							height={60}
						/>
					</th>
					<th className="flex items-center justify-center py-2">
						<Image
							src={
								process.env.NEXT_PUBLIC_STRAPI_IMAGE_URL +
								vendor2.attributes?.logo.image_url
							}
							alt="img"
							width={150}
							height={60}
						/>
					</th>
				</tr>
			</thead>
			<tbody>
				<tr className={cn(styles.table_head)}>
					<td className="col-span-2">
						<Heading variant={'semibold'} size={'h5'}>
							Pricing
						</Heading>
					</td>
				</tr>
				<tr className="grid grid-cols-2">
					<td className="flex items-start justify-center p-3 border-td">
						<Paragraph>{vendor1.attributes?.prices[0]?.price}</Paragraph>
					</td>
					<td className="flex items-start justify-center p-3">
						<Paragraph>{vendor2.attributes?.prices[0]?.price}</Paragraph>
					</td>
				</tr>
				<tr className={cn(styles.table_head)}>
					<td className="col-span-2">
						<Heading variant={'semibold'} size={'h5'}>
							Features
						</Heading>
					</td>
				</tr>
				<tr className="grid grid-cols-2">
					<td className="flex items-start justify-center px-4 py-8 md:px-16 border-td">
						<ul className="text-center sf-list">
							{vendor1.attributes?.feature.map((feature: any) => (
								<li key={feature.feature_name}>{feature.feature_name}</li>
							))}
						</ul>
					</td>
					<td className="flex items-start justify-center px-4 py-8 md:px-16">
						<ul className="text-center sf-list">
							{vendor2.attributes?.feature.map((feature: any) => (
								<li key={feature.feature_name}>{feature.feature_name}</li>
							))}
						</ul>
					</td>
				</tr>
				<tr className={cn(styles.table_head)}>
					<td className="col-span-2">
						<Heading variant={'semibold'} size={'h5'}>
							Reviews
						</Heading>
					</td>
				</tr>
				<tr className="grid grid-cols-2">
					<td className="flex items-start justify-center px-4 py-8 md:px-16 border-td">
						<ul className="text-center sf-list">
							{vendor1.attributes?.reviews.data.map(
								(review: any, index: number) => (
									<li key={index}>{review.attributes?.pros_text}</li>
								)
							)}
						</ul>
					</td>
					<td className="flex items-start justify-center px-4 py-8 md:px-16">
						<ul className="text-center sf-list">
							{vendor2.attributes?.reviews.data.map(
								(review: any, index: number) => (
									<li key={index}>{review.attributes?.pros_text}</li>
								)
							)}
						</ul>
					</td>
				</tr>
				<tr>
					<td className="pt-12">
						<Paragraph className="text-grey">
							* = The pricing is subject to change.
							{/* Prices are based on our best-sourced public estimations valid
							as of the time of this writing – please contact us through the
							Software Finder contact number mentioned on the top-right-hand
							corner of this page. */}
						</Paragraph>
					</td>
				</tr>
			</tbody>
		</table>
	);
};

export default ComparisonTable;
