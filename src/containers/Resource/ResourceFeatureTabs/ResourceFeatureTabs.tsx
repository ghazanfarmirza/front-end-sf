'use client';
import ResourceBoxFeaturedHorizontal from '@/components/Resource/ResourceBoxFeaturedHorizontal/ResourceBoxFeaturedHorizontal';
import ResourceBoxFeaturedVertical from '@/components/Resource/ResourceBoxFeaturedVertical/ResourceBoxFeaturedVertical';
import { cn } from '@/lib/utils/utils';
import * as Tabs from '@radix-ui/react-tabs';
import Image from 'next/image';
import React, { FC } from 'react';
import ResourceTabs from '../ResourceTabs/ResourceTabs';
import styles from './ResourceFeatureTabs.module.css';

interface ResourceFeatureTabsProps {
	allCategories: any;
	allResources: any;
}

const ResourceFeatureTabs: FC<ResourceFeatureTabsProps> = ({
	allCategories,
	allResources,
}) => {
	const [selectedTab, setSelectedTab] = React.useState(
		allCategories[0].attributes?.slug
	);
	const CategoryResources = allResources.filter(
		(resource: any) =>
			resource.attributes?.categories?.data[0]?.attributes?.slug === selectedTab
	);
	return (
		<>
			<Tabs.Root className={styles.TabsRoot} defaultValue={`${selectedTab}`}>
				<Tabs.List
					className={cn(styles.TabsList, 'flex items-center')}
					aria-label="Popular Categories"
				>
					{allCategories.map((headtab: any) => (
						<Tabs.Trigger
							key={headtab.id}
							className={cn(
								styles.TabsTrigger,
								'flex justify-center items-center gap-2 '
							)}
							value={`${headtab.attributes?.slug}`}
							onClick={() => setSelectedTab(headtab.attributes?.slug)}
						>
							<Image
								src={headtab.attributes?.icon?.data?.attributes?.url}
								alt="icon"
								width={32}
								height={32}
							/>
							{headtab.attributes?.name}
						</Tabs.Trigger>
					))}
				</Tabs.List>
				{allCategories.map((tab: any) => (
					<Tabs.Content
						key={tab.id}
						className={styles.TabsContent}
						value={`${tab.attributes?.slug}`}
					>
						<div className="flex flex-col grid-cols-12 gap-4 lg:grid lg:grid-rows-2">
							<div className="col-span-6 row-span-2 xl:col-span-7">
								<ResourceBoxFeaturedVertical
									resource={tab.attributes?.top_resources.data[0]?.attributes}
								/>
							</div>
							<div className="col-span-6 row-span-1 xl:col-span-5">
								<ResourceBoxFeaturedHorizontal
									resource={tab.attributes?.top_resources.data[1]?.attributes}
								/>
							</div>
							<div className="col-span-6 row-span-1 xl:col-span-5">
								<ResourceBoxFeaturedHorizontal
									resource={tab.attributes?.top_resources.data[2]?.attributes}
								/>
							</div>
						</div>
					</Tabs.Content>
				))}
			</Tabs.Root>
			<ResourceTabs allResources={CategoryResources} />
		</>
	);
};

export default ResourceFeatureTabs;
