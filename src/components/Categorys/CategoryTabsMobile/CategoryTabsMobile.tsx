'use client';
import PopularCategorySlider from '@/components/Popular/PopularCategorySlider/PopularCategorySlider';
import Button from '@/components/ui/Button/Button';
import * as Tabs from '@radix-ui/react-tabs';
import Link from 'next/link';
import { FC, useState } from 'react';
import styles from './CategoryTabsMobile.module.css';

interface CategoryTabsMobileProps {
	categories: { data: any[] };
}

const CategoryTabsMobile: FC<CategoryTabsMobileProps> = ({ categories }) => {
	const [selectedTab, setSelectedTab] = useState(
		`${categories?.data[0].attributes?.name}`
	);
	if (!categories) return null;

	return (
		<>
			<Tabs.Root
				className={styles.TabsRoot}
				defaultValue={`tab${categories.data[0]?.attributes?.name}`}
			>
				<Tabs.List className={styles.TabsList} aria-label="Popular Categories">
					{categories?.data?.map((tab) => (
						<Tabs.Trigger
							key={tab.attributes?.slug}
							className={styles.TabsTrigger}
							value={`tab${tab.attributes?.name}`}
							onClick={() => setSelectedTab(`${tab.attributes?.slug}`)}
						>
							{tab.attributes?.name}
						</Tabs.Trigger>
					))}
				</Tabs.List>
				{categories?.data?.map((tab) => (
					<Tabs.Content
						key={tab.attributes?.slug}
						className={styles.TabsContent}
						value={`tab${tab.attributes?.name}`}
					>
						<PopularCategorySlider
							popularCategoryGrid={tab.attributes?.top_vendors.data}
							category={tab.attributes?.slug}
						/>
					</Tabs.Content>
				))}
			</Tabs.Root>
			<div className="flex justify-center mt-4">
				<Link prefetch={false} href={`/${selectedTab}/all`}>
					<Button variant={'green'} size={'lg'}>
						All Products
					</Button>
				</Link>
			</div>
		</>
	);
};

export default CategoryTabsMobile;
