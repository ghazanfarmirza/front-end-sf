import Image from 'next/image';
import { FC } from 'react';
import Paragraph from '../../ui/Paragraph/Paragraph';

interface AuthorListItemProps {
	author: {
		author_id: string;
		display_name: string;
		image: string;
		email: string;
		description: string;
	};
}

const AuthorListItem: FC<AuthorListItemProps> = ({ author }) => {
	return (
		<div className="flex items-center justify-start gap-4">
			<div>
				<Image
					src={
						(author.image &&
							process.env.NEXT_PUBLIC_STRAPI_IMAGE_URL + author.image) ||
						'/images/article-img.png'
					}
					alt="author-img"
					width={45}
					height={45}
				/>
			</div>
			<div>
				<Paragraph size={'default'} variant={'medium'} className="text-black">
					{author.display_name}
				</Paragraph>
				<Paragraph size={'small'} variant={'regular'} className=" text-grey">
					{author.description || 'Senior Writer'}
				</Paragraph>
			</div>
		</div>
	);
};

export default AuthorListItem;
