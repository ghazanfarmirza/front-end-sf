import {
	getAllCategories,
	getAllSUbCategorySlugs,
	getAllVendorsSlugs,
} from '@/lib/gql';
import { getDataFromStrapi } from '@/lib/networkCalls/strapiFunctions';

export default async function sitemap(): Promise<
	{ url: string; lastModified?: string | Date | undefined }[]
> {
	const baseUrl = process.env.NEXT_PUBLIC_SITE_URL as string;

	const categoriesResponse = await getDataFromStrapi(getAllCategories);
	const categories = categoriesResponse?.categories.data;
	if (!categories)
		return [] as any as {
			url: string;
			lastModified?: string | Date | undefined;
		}[];
	const categoriesUrls =
		categories.map((category: any) => {
			return {
				url: `${baseUrl}/${category.attributes?.slug}`,
				lastModified: new Date(),
			};
		}) ?? [];

	const subCategoriesResponse = await getDataFromStrapi(getAllSUbCategorySlugs);
	const subCategories = subCategoriesResponse?.subCategories.data;
	if (!subCategories)
		return [] as any as {
			url: string;
			lastModified?: string | Date | undefined;
		}[];
	const subCategoriesUrls =
		subCategories.map((subCategory: any) => {
			return {
				url: `${baseUrl}/${subCategory.attributes?.category.data?.attributes?.slug}/${subCategory.attributes?.slug}`,
				lastModified: new Date(),
			};
		}) ?? [];

	const vendorsResponse = await getDataFromStrapi(getAllVendorsSlugs);
	const vendors = vendorsResponse?.vendors.data;
	if (!vendors)
		return [] as any as {
			url: string;
			lastModified?: string | Date | undefined;
		}[];
	const vendorsUrls =
		vendors.map((vendor: any) => {
			return {
				url: `${baseUrl}/${vendor.attributes?.categories?.data[0]?.attributes?.slug}/${vendor.attributes?.slug}`,
				lastModified: new Date(),
			};
		}) ?? [];

	const alternativeUrls =
		vendors.map((vendor: any) => {
			return {
				url: `${baseUrl}/${vendor.attributes?.categories?.data[0]?.attributes?.slug}/${vendor.attributes?.slug}/alternatives`,
				lastModified: new Date(),
			};
		}) ?? [];

	return [
		{
			url: baseUrl,
			lastModified: new Date(),
		},
		{
			url: `${baseUrl}/categories`,
			lastModified: new Date(),
		},
		{
			url: `${baseUrl}/all`,
			lastModified: new Date(),
		},
		{
			url: `${baseUrl}/article-page`,
			lastModified: new Date(),
		},
		{
			url: `${baseUrl}/author-page`,
			lastModified: new Date(),
		},
		{
			url: `${baseUrl}/category-page`,
			lastModified: new Date(),
		},
		{
			url: `${baseUrl}/comparison`,
			lastModified: new Date(),
		},
		{
			url: `${baseUrl}/contact-us`,
			lastModified: new Date(),
		},
		{
			url: `${baseUrl}/get-recommendation`,
			lastModified: new Date(),
		},
		{
			url: `${baseUrl}/lead-generation`,
			lastModified: new Date(),
		},
		{
			url: `${baseUrl}/privacy-policy`,
			lastModified: new Date(),
		},
		{
			url: `${baseUrl}/resources`,
			lastModified: new Date(),
		},
		{
			url: `${baseUrl}/search-result`,
			lastModified: new Date(),
		},
		{
			url: `${baseUrl}/sitemap`,
			lastModified: new Date(),
		},
		{
			url: `${baseUrl}/sub-category`,
			lastModified: new Date(),
		},
		{
			url: `${baseUrl}/terms-of-service`,
			lastModified: new Date(),
		},
		{
			url: `${baseUrl}/thank-you`,
			lastModified: new Date(),
		},
		{
			url: `${baseUrl}/vendor-profile`,
			lastModified: new Date(),
		},
		{
			url: `${baseUrl}/reviews`,
			lastModified: new Date(),
		},
		{
			url: `${baseUrl}/webinar-form`,
			lastModified: new Date(),
		},
		{
			url: `${baseUrl}/webinar-video`,
			lastModified: new Date(),
		},
		{
			url: `${baseUrl}/whitepaper`,
			lastModified: new Date(),
		},
		...categoriesUrls,
		...subCategoriesUrls,
		...vendorsUrls,
		...alternativeUrls,
	];
}
