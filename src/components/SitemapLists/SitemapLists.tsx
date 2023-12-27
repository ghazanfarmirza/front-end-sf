'use client';
import { cn } from '@/lib/utils/utils';
import { FC } from 'react';
import Heading from '../ui/Heading/Heading';
import styles from './SitemapLists.module.css';

interface SitemapListsProps {
	type: 'category' | 'alternatives' | 'vendors';
	color: string;
	categories?: any[];
	vendors?: any[];
	alternatives?: any[];
}

const SitemapLists: FC<SitemapListsProps> = ({
	type,
	color,
	categories,
	vendors,
	alternatives,
}) => {
	return (
		<div className={styles.list}>
			<Heading
				size={'h4'}
				className="pl-5 text-black capitalize"
				variant={'semibold'}
			>
				{type}
			</Heading>
			{categories && (
				<div className={styles.list_inner}>
					{categories.map((item: any) => (
						<div key={item.id}>
							{' '}
							<Heading
								size={'h5'}
								variant={'medium'}
								className="mb-4 text-black"
							>
								{item.attributes?.name}{' '}
							</Heading>
							<ul className="flex flex-col gap-1 mb-12">
								{item.attributes?.sub_categories?.data.map((subItem: any) => (
									<li key={subItem.id}>
										<a
											href={`/${item.attributes?.slug}/${subItem.attributes?.slug}`}
											className="text-black text-base hover:font-medium"
										>
											{subItem.attributes?.name}
											{'  | Software Finder'}
										</a>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			)}
			{alternatives && (
				<div className="grid grid-cols-2 gap-4 pl-24 pt-10">
					<ul className="col-span-1">
						{alternatives
							.filter((_, index) => index % 2 === 0)
							.map((vendor, index) => (
								<li key={index}>
									<a
										className="text-black text-base font-normal hover:font-medium pb-8"
										href={`/${vendor.attributes?.categories?.data[0]?.attributes?.slug}/${vendor.attributes?.slug}/alternatives`}
									>
										{vendor.attributes?.name} | Software Finder
									</a>
								</li>
							))}
					</ul>
					<ul className="col-span-1">
						{alternatives
							.filter((_, index) => index % 2 !== 0)
							.map((vendor, index) => (
								<li key={index}>
									<a
										className="text-black text-base font-normal hover:font-medium pb-8"
										href={`/${vendor.attributes?.categories?.data[0]?.attributes?.slug}/${vendor.attributes?.slug}/alternatives`}
									>
										{vendor.attributes?.name} | Software Finder
									</a>
								</li>
							))}
					</ul>
				</div>
			)}
			{vendors && (
				<div className="grid grid-cols-2 gap-4 pl-24 pt-10">
					<ul className="col-span-1">
						{vendors
							.filter((_, index) => index % 2 === 0)
							.map((vendor, index) => (
								<li key={index}>
									<a
										className="text-black text-base font-normal hover:font-medium pb-8"
										href={`/${vendor.attributes?.categories?.data[0]?.attributes?.slug}/${vendor.attributes?.slug}`}
									>
										{vendor.attributes?.name}
									</a>
								</li>
							))}
					</ul>
					<ul className="col-span-1">
						{vendors
							.filter((_, index) => index % 2 !== 0)
							.map((vendor, index) => (
								<li key={index}>
									<a
										className="text-black text-base font-normal hover:font-medium pb-8"
										href={`/${vendor.attributes?.categories?.data[0]?.attributes?.slug}/${vendor.attributes?.slug}`}
									>
										{vendor.attributes?.name}
									</a>
								</li>
							))}
					</ul>
				</div>
			)}

			<div className={cn(styles.line, color)}></div>
		</div>
	);
};

export default SitemapLists;
