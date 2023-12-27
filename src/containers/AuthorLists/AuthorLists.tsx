import AuthorListItem from '@/components/Author/AuthorListItem/AuthorListItem';
import UnderlineHeading from '@/components/UnderlineHeading/UnderlineHeading';
import { FC } from 'react';

interface AuthorListsProps {
	authors: any[];
}

const AuthorLists: FC<AuthorListsProps> = ({ authors }) => {
	return (
		<section className="mt-12">
			<UnderlineHeading title="See other Authors" />
			<div className="flex flex-col gap-4 mt-8">
				{authors.map((author) => (
					<AuthorListItem key={author.id} author={author.attributes} />
				))}
			</div>
		</section>
	);
};

export default AuthorLists;
