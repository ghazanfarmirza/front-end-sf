import { whitepaperHomePage } from '@/lib/gql';
import { getDataFromStrapi } from '@/lib/networkCalls/strapiFunctions';
import { v4 as uuidv4 } from 'uuid';
import Whitepaper from '../Whitepaper/Whitepaper';

const WhitepaperLists: any = async () => {
	const response: any = await getDataFromStrapi(whitepaperHomePage);
	const whitepaperChecklist =
		response?.home?.data?.attributes?.whitepaper?.checklist;
	return (
		<div className="flex flex-col gap-12 mt-12">
			{whitepaperChecklist?.map((whitepaper: any) => (
				<Whitepaper
					key={uuidv4()}
					title={whitepaper.title}
					desc={whitepaper.description}
					image={whitepaper.icon?.data?.attributes?.url}
					link={whitepaper.link}
				/>
			))}
		</div>
	);
};

export default WhitepaperLists;
