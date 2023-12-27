'use client';
import ResourceBoxVertical from '@/components/Resource/ResourceBoxVertical/ResourceBoxVertical';
import Heading from '@/components/ui/Heading/Heading';
import RightArrowDownLink from '@/components/ui/Link/RightArrowLink/RightArrowDownLink/RightArrowDownLink';
import Paragraph from '@/components/ui/Paragraph/Paragraph';
import { cn } from '@/lib/utils/utils';
import * as Tabs from '@radix-ui/react-tabs';
import { FC, useEffect, useState } from 'react';
import styles from './ResourceTabs.module.css';

interface ResourceTabsProps {
	allResources: any;
}

const ResourceTabs: FC<ResourceTabsProps> = ({ allResources }) => {
	const [resources, setResources] = useState<any>(allResources.slice(0, 9));

	const allArticles = allResources.filter(
		(resource: any) => resource.attributes?.type === 'article'
	);
	const allWhitepapers = allResources.filter(
		(resource: any) => resource.attributes?.type === 'whitepaper'
	);
	const allWebinars = allResources.filter(
		(resource: any) => resource.attributes?.type === 'webinar'
	);

	const [articles, setArticles] = useState<any>([]);
	const [whitepapers, setWhitepapers] = useState<any>([]);
	const [webinars, setWebinars] = useState<any>([]);

	useEffect(() => {
		setResources(allResources.slice(0, 9));
		const newArticles = allResources
			.filter((resource: any) => resource.attributes?.type === 'article')
			.slice(0, 9);
		setArticles(newArticles);
		const newWhitepapers = allResources
			.filter((resource: any) => resource.attributes?.type === 'whitepaper')
			.slice(0, 9);
		setWhitepapers(newWhitepapers);
		const newWebinars = allResources
			.filter((resource: any) => resource.attributes?.type === 'webinar')
			.slice(0, 9);
		setWebinars(newWebinars);
	}, [allResources]);

	const onLoadMore = (type: string) => {
		if (type === 'all') {
			const newResources = allResources.slice(0, resources.length + 9);
			setResources(newResources);
		}

		if (type === 'articles') {
			const newArticles = allArticles.slice(0, articles.length + 9);
			setArticles(newArticles);
		} else if (type === 'whitepapers') {
			const newWhitepapers = allWhitepapers.slice(0, whitepapers.length + 9);
			setWhitepapers(newWhitepapers);
		} else if (type === 'webinars') {
			const newWebinars = allWebinars.slice(0, webinars.length + 9);
			setWebinars(newWebinars);
		}
	};

	return (
		<>
			<Heading
				title="Resources"
				className="flex items-center justify-center mt-10"
				size={'h5'}
			>
				Resources
			</Heading>
			{allResources.length == 0 && (
				<Paragraph className="text-center mt-4">
					No Resource available for selected category
				</Paragraph>
			)}
			<Tabs.Root className={cn(styles.TabsRoot, 'mt-6')} defaultValue={`all`}>
				<Tabs.List
					className={cn(
						styles.TabsList,
						'flex justify-start md:justify-center items-center'
					)}
					aria-label="Popular Categories"
				>
					{allResources.length > 0 && (
						<Tabs.Trigger className={cn(styles.TabsTrigger)} value={`all`}>
							All
						</Tabs.Trigger>
					)}
					{allArticles.length > 0 && (
						<Tabs.Trigger className={cn(styles.TabsTrigger)} value={`articles`}>
							Articles
						</Tabs.Trigger>
					)}
					{allWhitepapers.length > 0 && (
						<Tabs.Trigger
							className={cn(styles.TabsTrigger)}
							value={`whitepapers`}
						>
							Whitepapers
						</Tabs.Trigger>
					)}
					{allWebinars.length > 0 && (
						<Tabs.Trigger className={cn(styles.TabsTrigger)} value={`webinars`}>
							Webinars
						</Tabs.Trigger>
					)}
				</Tabs.List>
				<Tabs.Content className={styles.TabsContent} value={`all`}>
					<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
						{resources.map((resource: any) => (
							<ResourceBoxVertical
								key={resource.attributes?.post_id}
								resource={resource}
							/>
						))}
					</div>
					{resources.length != allResources.length && (
						<div className="flex items-center justify-center mt-6 mb-12 lg:mb-24">
							<button onClick={() => onLoadMore('all')}>
								<RightArrowDownLink title="Load More" />
							</button>
						</div>
					)}
				</Tabs.Content>
				<Tabs.Content className={styles.TabsContent} value={`articles`}>
					<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
						{articles.map((resource: any) => (
							<ResourceBoxVertical
								key={resource.attributes?.post_id}
								resource={resource}
							/>
						))}
					</div>
					{articles.length != allArticles.length && (
						<div className="flex items-center justify-center mt-6 mb-12 lg:mb-24">
							<button onClick={() => onLoadMore('articles')}>
								<RightArrowDownLink title="Load More" />
							</button>
						</div>
					)}
				</Tabs.Content>
				<Tabs.Content className={styles.TabsContent} value={`whitepapers`}>
					<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
						{whitepapers.map((resource: any) => (
							<ResourceBoxVertical
								key={resource.attributes?.post_id}
								resource={resource}
							/>
						))}
					</div>
					{whitepapers.length != allWhitepapers.length && (
						<div className="flex items-center justify-center mt-6 mb-12 lg:mb-24">
							<button onClick={() => onLoadMore('whitepapers')}>
								<RightArrowDownLink title="Load More" />
							</button>
						</div>
					)}
				</Tabs.Content>
				<Tabs.Content className={styles.TabsContent} value={`webinars`}>
					<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
						{webinars.map((resource: any) => (
							<ResourceBoxVertical
								key={resource.attributes?.post_id}
								resource={resource}
							/>
						))}
					</div>
					{webinars.length != allWebinars.length && (
						<div className="flex items-center justify-center mt-6 mb-12 lg:mb-24">
							<button onClick={() => onLoadMore('webinars')}>
								<RightArrowDownLink title="Load More" />
							</button>
						</div>
					)}
				</Tabs.Content>
			</Tabs.Root>
		</>
	);
};

export default ResourceTabs;
