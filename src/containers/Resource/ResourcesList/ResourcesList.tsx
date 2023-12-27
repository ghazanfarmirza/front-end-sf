import ResourcesListItem from '@/components/Resource/ResourcesListItem/ResourcesListItem';
import UnderlineHeading from '@/components/UnderlineHeading/UnderlineHeading';
import RightArrowDownLink from '@/components/ui/Link/RightArrowLink/RightArrowDownLink/RightArrowDownLink';
import { resourcesList } from '@/lib/settings/settings';
import { FC } from 'react';

interface ResourcesListProps {}

const ResourcesList: FC<ResourcesListProps> = () => {
	return (
		<section className="py-5 md:py-10">
			<UnderlineHeading title="Resources" />
			<div className="flex flex-col items-center gap-8 mt-8">
				{resourcesList.map((list) => (
					<ResourcesListItem key={list.id} item={list} />
				))}
			</div>
			<div className="flex items-center justify-center mt-8">
				<RightArrowDownLink link="#" title="Load More" />
			</div>
		</section>
	);
};

export default ResourcesList;
