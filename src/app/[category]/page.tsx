import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import CategoryBoxGridMobile from '@/components/Categorys/CategoryBoxGridMobile/CategoryBoxGridMobile';
import Cta from '@/components/CtaFolder/Cta/Cta';
import CtaBlue from '@/components/CtaFolder/CtaBlue/CtaBlue';
import Header from '@/components/Header/Header';
import MetaTags from '@/components/MetaTags/MetaTags';
import PageFillHeader from '@/components/Page/PageFillHeader/PageFillHeader';
import RelatedCategory from '@/components/Related/RelatedCategory/RelatedCategory';
import BuyerGuide from '@/containers/BuyerGuide/BuyerGuide';
import CategoryBoxGrid from '@/containers/Category/CategoryBoxGrid/CategoryBoxGrid';
import CategoryChecklistMobile from '@/containers/Category/CategoryCheckListMobile/CategoryCheckListMobile';
import CategoryChecklist from '@/containers/Category/CategoryChecklist/CategoryChecklist';
import CategoryCompare from '@/containers/Category/CategoryCompare/CategoryCompare';
import CategoryDetailHeader from '@/containers/Category/CategoryDetailHeader/CategoryDetailHeader';
import CategoryTopPicks from '@/containers/Category/CategoryTopPicks/CategoryTopPicks';
import Faq from '@/containers/Faq/Faq';
import { getCategoryBySlug } from '@/lib/gql';
import { getDataFromStrapi } from '@/lib/networkCalls/strapiFunctions';
interface pageProps {
	params: { category: string };
}

const Page = async ({ params: { category } }: pageProps) => {
	const response: any = await getDataFromStrapi(getCategoryBySlug(category));

	const categoryAttributes = response?.categories?.data[0]?.attributes;
	if (!categoryAttributes) return null;
	const {
		name,
		description,
		short_description,
		show_description,
		show_short_description,
		slug,
		type,
		vendors,
		top_vendors,
		seo,
		sub_categories,
		pricing_guide_checklists,
		faqs,
		on_this_page,
		on_this_page_buyers_guide,
		compare_products_heading,
		compareProducts,
		speciality_browse_boxes,
		features_browse_boxes,
	} = categoryAttributes;

	return (
		<>
			{seo && <MetaTags seo={seo} />}
			{/* <ScrollTop /> */}
			<Header sticky={true} />
			<PageFillHeader
				title={
					'Find the Best ' + name + ((type == 'service' && ' Companies') || '')
				}
			/>
			<BreadCrumb item1={{ name, link: slug }} />
			<section id="popular" className="pageJump"></section>
			{show_short_description &&
				short_description &&
				short_description !== 'null' && (
					<CategoryDetailHeader
						shortDescription={short_description}
						categoryName={name}
						onThisPage={on_this_page}
					/>
				)}
			<section id="top-picks">
				<CategoryTopPicks
					title={
						'10 Best ' + name + ((type == 'service' && ' Companies') || '')
					}
					subTitle="Here are our top picks."
					vendors={top_vendors.data.length ? top_vendors.data : vendors.data}
					category={category}
					type={type}
				/>
			</section>
			<section className="hidden lg:block">
				<div className="container">
					<ul>
						{type == 'software' && (
							<>
								<section id="speciality" className="pageJump"></section>
								<CategoryBoxGrid
									title={
										category == 'emr-software' ? 'Specialties' : 'Industries'
									}
									list={speciality_browse_boxes.data}
									category={category}
								/>
								<section id="features" className="pageJump"></section>
								<CategoryBoxGrid
									title="Features"
									list={features_browse_boxes.data}
									category={category}
								/>
							</>
						)}
						{type == 'service' && (
							<>
								<section id="services" className="pageJump"></section>
								<CategoryBoxGrid
									title="Services"
									list={speciality_browse_boxes.data}
									category={category}
								/>
								<section id="technology" className="pageJump"></section>
								<CategoryBoxGrid
									title="Technology"
									list={features_browse_boxes.data}
									linkTitle="Technologies"
									category={category}
								/>
							</>
						)}
					</ul>
				</div>
			</section>
			{/* Mobile Screens */}
			<div className="block lg:hidden">
				{type == 'software' && (
					<>
						<section id="speciality" className="pageJump"></section>
						<CategoryBoxGridMobile
							title={category == 'emr-software' ? 'Speciality' : 'Industry'}
							list={speciality_browse_boxes.data}
							category={category}
						/>
						<section id="features" className="pageJump"></section>
						<CategoryBoxGridMobile
							title="Features"
							list={features_browse_boxes.data}
							category={category}
						/>
					</>
				)}
				{type == 'service' && (
					<ul>
						<li>
							<section id="services" className="pageJump"></section>
							<CategoryBoxGridMobile
								title="Services"
								list={speciality_browse_boxes.data}
								category={category}
							/>
						</li>
						<li className="mt-14">
							<section id="technology" className="pageJump"></section>
							<CategoryBoxGridMobile
								title="Technology"
								list={features_browse_boxes.data}
								category={category}
							/>
						</li>
					</ul>
				)}
			</div>
			<section className="py-24">
				<div className="container">
					<Cta
						heading1={`Need Help Finding ${name}?`}
						heading2=" "
						paragraph="Our team of experts will give you a list of software that fits your budget and business needs."
					/>
				</div>
			</section>

			<section id="compare-products" className="pageJump"></section>
			{type == 'software' && compareProducts?.length > 0 && (
				<section className="py-12 bg-light-white hidden lg:block">
					<div className="container ">
						<CategoryCompare
							compareProductsList={compareProducts.slice(0, 2)}
							title={compare_products_heading}
						/>
					</div>
				</section>
			)}

			<section id="checklist" className="pageJump"></section>
			{pricing_guide_checklists?.data?.length > 0 && (
				<section className="py-12 bg-light-white hidden lg:block">
					<div className="container">
						<ul className="section_list">
							<li className="hidden lg:block">
								<CategoryChecklist checkList={pricing_guide_checklists.data} />
							</li>
							<li className="md:hidden">
								<CategoryChecklistMobile
									checkList={pricing_guide_checklists.data}
								/>
							</li>
						</ul>
					</div>
				</section>
			)}

			{show_description && description && (
				<>
					<section id="buyer-guide" className="pageJump"></section>
					<BuyerGuide
						description={description}
						category={name}
						sideBarList={on_this_page_buyers_guide}
					/>
				</>
			)}
			{faqs.data.length > 0 && <Faq faq={faqs.data} />}
			<RelatedCategory
				relatedSoftware={sub_categories}
				category={category}
				heading={name + ((type == 'service' && ' Companies') || '')}
			/>
			<section id="cta" className="pageJump">
				{' '}
				<CtaBlue category={name} />
			</section>
		</>
	);
};

export default Page;
