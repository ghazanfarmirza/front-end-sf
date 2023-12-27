import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import CategoryListItem from '@/components/Categorys/CategoryListItem/CategoryListItem';
import CategoryListItemMobile from '@/components/Categorys/CategoryListItemMobile/CategoryListItemMobile';
import CtaSmall from '@/components/CtaFolder/CtaSmall/CtaSmall';
import FaqSmallBox from '@/components/FaqBoxSmall/FaqBoxSmall';
import Filters from '@/components/Filter/Filters/Filters';
import FiltersMobile from '@/components/FiltersMobile/FiltersMobile';
import Header from '@/components/Header/Header';
import MetaTags from '@/components/MetaTags/MetaTags';
import PageFillHeader from '@/components/Page/PageFillHeader/PageFillHeader';
import SortBox from '@/components/SortBox/SortBox';
import Description from '@/components/ui/Description/Description';
import Heading from '@/components/ui/Heading/Heading';
import RightArrowDownLink from '@/components/ui/Link/RightArrowLink/RightArrowDownLink/RightArrowDownLink';
import Paragraph from '@/components/ui/Paragraph/Paragraph';
import BuyerGuide from '@/containers/BuyerGuide/BuyerGuide';
import { getSubCategoryBySlug } from '@/lib/gql';
import { getDataFromStrapi } from '@/lib/networkCalls/strapiFunctions';
import Link from 'next/link';

interface subCategoryProps {
	subCategorySlug: string;
	categorySlug: string;
}

const SubCategory: any = async ({
	subCategorySlug,
	categorySlug,
}: subCategoryProps) => {
	const response: any = await getDataFromStrapi(
		getSubCategoryBySlug(subCategorySlug)
	);

	const subCategory = response?.subCategories?.data[0].attributes;
	if (!subCategory) return null;
	const {
		name,
		description,
		show_description,
		short_description,
		show_short_description,
		slug,
		seo,
		category,
		vendors,
		faqs,
		on_this_page_buyers_guide,
		subCategory_top_vendors,
		software_list_pdf,
		pricing_guide_pdf,
		category: {
			data: {
				attributes: {
					type,
					subCategory_top_vendors: category_top_vendors,
					software_list_pdf: category_software_list_pdf,
					pricing_guide_pdf: category_pricing_guide_pdf,
				},
			},
		},
	} = subCategory;

	const subCategoryTopVendors = subCategory_top_vendors?.data.length
		? subCategory_top_vendors.data
		: (category_top_vendors?.data.length && category_top_vendors?.data) ||
		  vendors.data;
	const softwareListPdf =
		software_list_pdf.data || category_software_list_pdf.data;
	const pricingGuidePdf =
		pricing_guide_pdf.data || category_pricing_guide_pdf.data;

	return (
		<div className="mb-24">
			{seo && <MetaTags seo={seo} />}

			<Header sticky={true} />
			<PageFillHeader
				title={name}
				subHeader={{
					title: `Download ${name} list`,
					link: softwareListPdf?.attributes.url,
				}}
				desc="We have recommendations for a wide range of software to increase productivity! "
			/>
			<BreadCrumb
				item1={{
					name: category?.data?.attributes?.name,
					link: category?.data?.attributes?.slug,
				}}
				item2={{ name, link: slug }}
			/>
			<section>
				<div className="container">
					{short_description && show_short_description && (
						<Description>{short_description}</Description>
					)}
				</div>
			</section>

			<section className="hidden md:block mb-24">
				<div className="container">
					<Heading
						size={'h2'}
						variant={'semibold'}
						className="mt-16 mb-14 text-2xl lg:text-3xl"
					>
						Popular {name}
					</Heading>
					<div className="grid grid-cols-12 gap-4">
						<div className="col-span-3">
							<Filters />
						</div>
						<div className="col-span-9">
							<SortBox />
							<div className="flex flex-col gap-8">
								{subCategoryTopVendors.map((item: any) => (
									<CategoryListItem
										key={item.id}
										item={item.attributes}
										type={type}
									/>
								))}
							</div>
							<div className="flex items-center justify-center mt-8">
								<Paragraph
									size={'md'}
									variant={'semibold'}
									className="flex items-center gap-2 text-green"
								>
									<Link
										prefetch={false}
										href={`/${categorySlug}/all`}
										passHref
										className="flex justify-center gap-1"
									>
										<RightArrowDownLink
											title={`View more ${
												type == 'software' ? 'Products' : 'Companies'
											}`}
										/>
									</Link>
								</Paragraph>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="block lg:hidden">
				<div className="container">
					<Heading size={'h3'} variant={'semibold'} className="mt-16 mb-14">
						Popular {name}
					</Heading>
					<FiltersMobile />
					<SortBox />
					<div className="flex flex-col gap-8">
						{subCategoryTopVendors.map((item: any) => (
							<CategoryListItemMobile
								key={item.id}
								item={item.attributes}
								type={type}
							/>
						))}
					</div>
					<div className="flex items-center justify-center mt-8">
						<Paragraph
							size={'md'}
							variant={'semibold'}
							className="flex items-center gap-2 text-green"
						>
							<Link
								prefetch={false}
								href={`/${categorySlug}/all`}
								passHref
								className="flex justify-center gap-1"
							>
								<RightArrowDownLink title="View more Products" />
							</Link>
						</Paragraph>
					</div>
				</div>
			</section>
			<section id="pricing-guide">
				<CtaSmall pdfLink={pricingGuidePdf?.attributes.url} />
			</section>
			{description && show_description && (
				<BuyerGuide
					description={description}
					category={name}
					sideBarList={on_this_page_buyers_guide}
				/>
			)}
			{faqs.data.length > 0 && (
				<div className="container">
					<Heading
						size={'h3'}
						variant={'semibold'}
						className="mt-12 mb-8 text-left text-black md:mt-24"
					>
						Frequently Asked Questions
					</Heading>
					{faqs.data.map((faq: any) => (
						<FaqSmallBox
							question={faq.attributes?.question}
							answer={faq.attributes?.answer.replace(/<[^>]+>/g, '')}
							key={faq.id}
							id={faq.id}
						/>
					))}
				</div>
			)}
		</div>
	);
};

export default SubCategory;
