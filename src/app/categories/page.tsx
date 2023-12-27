import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import CategoryLinkList from '@/components/Categorys/CategoryLinkLists/CategoryLinkList';
import Header from '@/components/Header/Header';
import IconHeading from '@/components/IconHeading/IconHeading';
import PageHeaderTransparent from '@/components/Page/PageHeaderTransparent/PageHeaderTransparent';
import ScrollTop from '@/components/ScrollTop/ScrollTop';
import SearchBarSquare from '@/components/Search/SearchBarSquare/SearchBarSquare';
import UnderlineHeadingLarge from '@/components/UnderlineHeadingLarge/UnderlineHeadingLarge';
import { getAllCategories } from '@/lib/gql';
import { getDataFromStrapi } from '@/lib/networkCalls/strapiFunctions';
import Link from 'next/link';

const Page = async () => {
	const response: any = await getDataFromStrapi(getAllCategories);

	const allCategories = response?.categories?.data;

	const serviceCategories = allCategories?.filter(
		(cat: any) => cat?.attributes?.type === 'service'
	);
	return (
		<>
			<ScrollTop />
			<Header sticky={true} />
			<BreadCrumb />
			<PageHeaderTransparent title="Let's Find the Best Software for You!" />
			<section className="py-6 mb-20">
				<div className="container">
					<div className="max-w-xs">
						<SearchBarSquare placeholder="Search Software Category" />
					</div>
					<div className="mt-16">
						<UnderlineHeadingLarge title="Software" />
					</div>
					{allCategories?.map(
						(cat: any, index: number) =>
							cat.attributes.type !== 'service' && (
								<>
									<section
										key={cat.id}
										className={`${(index == 0 && 'py-8') || 'py-16'} pageJump`}
										id={cat?.attributes?.slug}
									></section>
									<Link
										prefetch={false}
										href={`/${cat?.attributes?.slug}`}
										passHref
									>
										<IconHeading
											title={cat?.attributes?.name}
											image={cat?.attributes?.icon?.data?.attributes?.url || ''}
										/>
									</Link>
									<CategoryLinkList
										list={cat?.attributes?.sub_categories?.data}
										category={cat?.attributes?.slug}
									/>
								</>
							)
					)}
					<div className="mt-16">
						<UnderlineHeadingLarge title="Service" />
					</div>
					{serviceCategories?.map((cat: any, index: number) => (
						<>
							<section
								key={cat.id}
								className={`${(index == 0 && 'py-8') || 'py-16'} pageJump`}
								id={cat?.attributes?.slug}
							></section>
							<Link
								prefetch={false}
								href={`/${cat?.attributes?.slug}`}
								passHref
							>
								<IconHeading
									title={cat?.attributes?.name}
									image={cat?.attributes?.icon?.data?.attributes?.url || ''}
								/>
							</Link>
							<CategoryLinkList
								list={cat?.attributes?.sub_categories?.data}
								category={cat?.attributes?.slug}
							/>
						</>
					))}
				</div>
			</section>
		</>
	);
};

export default Page;
