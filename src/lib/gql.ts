export const heroContentHomePage = `{
	home
	{
	  data{
		attributes{
		  hero{
			heading,heading_image{
			  data{
				attributes{
				  url
				}
			  }
			},paragraph,
			hero_image{
			  data{
				attributes{
				  url
				}
			  }
			}
		  }
		}
	}
}
}
`;

export const vendorsHomePage = `{
	home{
	  data{attributes{
		vendors{
		  vendors{vendor{data{attributes{slug,categories{data{attributes{slug}}}}}}
			alt,src{data{attributes{url}}}
		  }
		}
	  }}
	}
  }
  `;

export const benefitsHomePage = `{
	home
	{
	  data{
		attributes{
		  benefits{
			benefit_points{
			  text,title,icon{data{attributes{url}}}
			}
			testimonials{
			 text,position,id
			}
		  }
		  
		}
	  }
	}
  }
  `;

export const categoriesHomePage = `{
	home{
	  data{
		attributes{
		  categories{
			heading,heading_leaf,description,button{url,title}
			categories{
			  data{attributes{
				name,icon{data{attributes{url}}},slug
			  }}
			}
		  }
		}
	  }  
  }
  }
  `;

export const popularCategoriesHomePage = `
{
	home{
  data{
    attributes{
      Popular_Categories{
        categories{data{attributes{name,slug,
        }}},
        title1,title2,title3,description
      }
    }
  }}}
`;

export const popularCategoriesTopVendors = (search: Array<string>) => `
{
	categories(filters:{slug:{in:[${JSON.stringify(search).slice(1, -1)}]}}) {
	  data {
		attributes {
		  name
		  slug
		  top_vendors {
			data {
			  attributes {
				logo {
				  image_url
				}
				name
				slug
				reviews {
				  data {
					attributes {
					  rating
					}
				  }
				}
			  }
			}
		  }
		}
	  }
	}
  }
  
`;

export const whitepaperHomePage = `{
	home{
	  data{
		attributes{
		  whitepaper{
			checklist{
			  description,title,link,icon{data{attributes{url}}}
			}
		  }
		}
	  }
	}
  }
  `;

export const successStoriesHomePage = `
{home{
  data{
    attributes{
      success_stories{
        story_text,software_options,demo_views,name,purchase_timeframe,research_hours,icon{data{attributes{url}}}
      }
    }
  }
}}`;

export const vendorProgramHomePage = `{
	home{
	  data{
		attributes{
		vendor_program{
		  description,vendor_box{description,title}
		} 
		
		}
	  }
	}
  }
  `;

export const faqsHomePage = `{
	home{
	  data{
		attributes{
		  faqs(pagination:{limit:1000}){data{attributes{question,answer,faq_id,status}}}
		}
	  }  
  }
  }`;

export const footerHomePage = `{
	home{
	  data{attributes{
		footer{
		  footer_softwares{
			title,vendors{data{attributes{name,slug,categories{data{attributes{slug,name}}}}}}
		  }
		  footer_resources{
			title,resources{data{attributes{title,slug,type}}}
		  }
		}
	  }}
	}
  }
  `;

export const aboutPageQuery = `{
	aboutUs{
	  data{
		attributes{
		  content_header{
			title,text
			
		  }
		  about_info{
			paragraph,title,
			image{
			  data{
				attributes{
				  url
				}
			  }
			}
		  }
		  about_commit{
			paragrpah,title,about_commit_box{
			  heading,paragraph,icon{
				data{attributes{url}}
			  }
			}
		  }
		  about_serve{
			title,about_serve_box{heading,icon{data{attributes{url}}},link,text,link_text,link_icon{data{attributes{url}}}}
		  }
     about_contact{
      title,title_bold,description,about_contact_box{
        contact_info,text,icon{data{attributes{url}}}
      }
    }
		}
	  }
	}
  }`;

export const errorPageQuery = `{
	errorPage {
	   data {
		 attributes {
		   left_section {
			 title,description,image{
				data{
				 attributes{
					 url
			 }
		   }
		 }
	   }
      right_section{
        description,title,bottom_description,first_button{title,url}
        back_button{title,url }
      }
      bottom_section{
        title,paragraphs{text}
      }
	 }
    }
  }
}
   `;

export const contactPageQuery = `{
	contactUs{
	  data{
		attributes{
		  ContactHeader{
			Heading,paragraph
		  }
		  contact_box{
			title,text1,text2,image{
			  data{
				attributes{url}
			  }
			}
		  }
		
		  contact_list{
			title,desc
		  }
		  office_location
		}
	  }
	}
  }`;

export const getAllCategories = `{
	categories(pagination:{limit:20},sort:["rank:asc"]){
		data{id
		attributes{
		  description,name,slug,type,icon{data{attributes{url}}},
				  category_heading,
				  sub_categories(pagination:{limit:1000}){data{id,
					attributes{name,slug,
						}}}
		
		}}}
	}
	`;

export const getCategoryBySlug = (slug: any, limit = 10) => `
{
	categories(filters:{
	  slug:{
		eq:"${slug}"
	  }
	}){
		data{attributes{
			pricing_guide_checklists{data{attributes{
				image_url,title,slug
			  }}},
			  description,short_description,type,name,slug,
			  show_description,show_short_description,
			  on_this_page{text},
			  on_this_page_buyers_guide{text,link_id},
			  seo{metaTitle,metaDescription,keywords},
			  faqs(pagination:{limit:1000}){data{attributes{question,answer,status,faq_id}}},
			  compare_products_heading,
			  compareProducts:compare_products {vendor1_name,vendor2_name,,text,url
					vendor1_logo{data{attributes{url}}},vendor2_logo{data{attributes{url}}}}
			  speciality_browse_boxes{data{attributes{title,icon{data{attributes{url}}}link}}}
			  features_browse_boxes{data{attributes{title,icon{data{attributes{url}}}link}}}
		 sub_categories(pagination:{limit:1000}){
			data{id,
			attributes{name,slug}
			}
		  }
	   vendors(pagination:{limit:${limit}}){
  		data{id
			attributes{name,product_id,description,slug,logo{image_url},youtube_link,
	  		categories{data{attributes{name,slug}}},
	  		reviews(pagination:{limit:1000}){data{attributes{rating}}}
				}
  			}
		}
		top_vendors(pagination:{limit:${limit}}){
		data{id
		  attributes{name,product_id,description,slug,logo{image_url},youtube_link,
			categories{data{attributes{name,slug}}},
			reviews(pagination:{limit:1000}){data{attributes{rating}}}
			  }
			}
  	}
		}}
	  }
	}
  `;

// export const getAlternativesByCategory = (
// 	slug: string,
// 	excludeSlug: string
// ) => `
//   {
// 	categories(filters:{
// 	  slug:{
// 		eq:"${slug}"
// 	  }
// 	}){
// 		data{attributes{
// 		  alternatives(filters:{
// 			slug:{ne:"${excludeSlug}"}
// 		  }){data{attributes{name,slug,description,reviews{data{attributes{rating}}},logo{image_url}}}}
// 		  similar_products(filters:{
// 			slug:{ne:"${excludeSlug}"}
// 		  }){data{attributes{logo{image_url},slug,name}}},
// 		}}
// 	  }
// 	}
// 	  `;

export const getSubCategoryBySlug = (slug: string) => `{
	subCategories(filters:{
	  slug:{
		eq: "${slug}"
	  }
	}){
		data{id,attributes{name,
		seo{metaTitle,keywords,metaDescription},
		short_description,sub_category_heading,slug,description,
		show_description,show_short_description,
		on_this_page_buyers_guide{text,link_id},
		faqs(pagination:{limit:1000}){data{attributes{question,answer,status,faq_id}}},
		subCategory_top_vendors(pagination:{limit:25}){data{attributes{name,product_id,slug,description
			logo{title,image_url},
	  	categories{data{attributes{name,slug}}}
			reviews(pagination:{limit:1000}){data{attributes{rating}}}
		}}}
		software_list_pdf{data{attributes{url}}}
		pricing_guide_pdf{data{attributes{url}}}
	category{data{attributes{name,slug,type,
		subCategory_top_vendors(pagination:{limit:25}){data{attributes{name,product_id,slug,description
			logo{title,image_url},
	  	categories{data{attributes{name,slug}}}
			reviews(pagination:{limit:1000}){data{attributes{rating}}}
		}}}
		software_list_pdf{data{attributes{url}}}
		pricing_guide_pdf{data{attributes{url}}}
	}}},
		vendors(pagination:{limit:25}){
	  data{id
		attributes{name,product_id,slug,description
		  logo{title,image_url},categories{data{attributes{name,slug}}}
		  reviews(pagination:{limit:1000}){data{attributes{rating}}}
		}
	  }
	}
		  
		}}
	  }
	}`;

export const getVendorsByCategory = (
	slug: any,
	offset: number,
	limit: number = 10
) => `
	  {
		categories(filters: {
		  slug: {
			eq: "emr-software"
		  }
		}) {
		  data {
			attributes {
			  vendors(pagination: {
				limit: ${limit},
				start:${offset} 
			  }) {
				data {
				  attributes {
					name
					slug,
					logo{title,image_url},
					description,
				  }
				}
				
			  }
			}
		  }
		}
	  }
	  `;

export const getAllSUbCategorySlugs = `
{
	subCategories(pagination:{limit:2000}){
    data{attributes{
      slug,category{data{attributes{slug}}}
    }
    }
  }
} 
  `;

export const getAllVendorsSlugs = `{
	vendors(pagination:{limit:3000}){
	  data{attributes{
		name,slug,categories{data{attributes{slug}}}
	  }}
	}
  }
  `;

export const allVendors = (vendors: number) => `{
	vendors(pagination:{limit:${vendors}}){
	  data{id
		attributes{name,description,product_id,
		  feature{id,feature_name,feature_description,feature_status},
		prosAndCons{pros{title,description,id},cons{title,description,id}}
		  images{title,image_url}
		  youtube_link,logo{title,image_url}
		}
	  }
	}
  }`;

export const getVendorBySlug = (slug: string) => `
  {
	vendors(
	  filters:{
		slug:{
		  eq: "${slug}"
		}
	  }
	)
	{
	   data{id
		attributes{name,product_id,description,product_id,short_description,
			BreadCrumb_Category{data{attributes{name,slug}}}
			specifications{id,title,status},
		  show_features,feature{id,feature_name,feature_description,feature_status},
		  show_description,show_short_description,
		  show_pros_cons,prosAndCons{pros{title,description,id},cons{title,description,id}}
		  show_gallery,images{title,image_url}
		  youtube_link,logo{title,image_url,image{data{attributes{url}}}},
		  banners{text,banner_image{data{attributes{url}}},image,banner_url},show_pricingList,show_selectionTemplate,
		  seo{metaTitle,metaDescription,keywords},
		  popular_alternatives{data{attributes{name,slug,
			alternativeReviews:reviews(pagination:{limit:1000}){data{attributes{rating}}}
			logo{image_url}categories{data{attributes{slug}}}}}}
      relevant_articles_sidebar{data{attributes{title,slug}}},
      top_recommendation_softwares{data{attributes{name,slug,logo{image_url},categories{data{attributes{slug}}}}}}
      recommended_whitepaper_articles{data{attributes{title,slug,image_url}}},
      top_alternatives{data{attributes{name,slug,logo{image_url}categories{data{attributes{slug}}}}}}
	  show_alternatives
		  
	  categories{data{attributes{name,slug,type
			vendor_pricing_list{text,banner_image{data{attributes{url}}},document{data{attributes{url}}},banner_url}
			vendor_selection_template{text,banner_image{data{attributes{url}}},document{data{attributes{url}}},banner_url}
			popular_alternatives{data{attributes{name,slug,
				alternativeReviews:reviews(pagination:{limit:1000}){data{attributes{rating}}}
				logo{image_url},categories{data{attributes{slug}}}}}}
      relevant_articles_sidebar{data{attributes{title,slug}}},
      top_recommendation_softwares{data{attributes{name,slug,logo{image_url},categories{data{attributes{slug}}}}}}
      recommended_whitepaper_articles{data{attributes{title,slug,image_url}}},
      top_alternatives{data{attributes{name,slug,logo{image_url}categories{data{attributes{slug}}}}}}
			recommended_resources{data{id,attributes{image_url,title,slug}}},
		  	specification{id,title,status}}}},
			show_faqs,faqs(pagination:{limit:1000}){data{attributes{question,answer,status,faq_id}}},
			show_prices,prices{plan_title,plan_description,price,currency,price_description,feature_list{feature}}
			show_reviews,allReviews:reviews(pagination:{limit:1000},sort:["added_on:desc"]){data{attributes{author,pros_text,cons_text,
				company,team_size,video,added_on,title,time_used,
				Industry,rating,value_for_money,creator,functionality,
				customer_support,ease_of_use,}}}
		}
	  }
	}
  }`;

export const getAlternativeBySlug = (slug: string) => `
{
	vendors(filters: { slug: { eq: "${slug}" } }) {
	  data {
		id
		attributes {
		  name
		  youtube_link,
		  logo{title,image_url,image{data{attributes{url}}}}
		  seo_alternative{metaTitle,metaDescription,keywords},
		  faqs(pagination:{limit:1000}) {
			data {
			  attributes {question,answer,status,faq_id
			  }
			}
		  }
		  specifications {id,title,status
		  }
		  prices {plan_title,plan_description,price,currency,price_description,
			feature_list {
			  feature
			}
		  }
		  allReviews: reviews(
			pagination: { limit: 1000 }
			sort: ["added_on:desc"]
		  ) {
			data {
			  attributes {author,pros_text,cons_text,company,team_size,video,added_on,title,time_used,Industry,rating,value_for_money,creator,functionality,customer_support,ease_of_use
			  }
			}
		  }
		  show_pros_cons
		  prosAndCons {
			pros {title,description,id
			}
			cons {title,description,id
			}
		  }
		  alternative_short_description
		  alternative_long_description
		  feature{id,feature_name,feature_description,feature_status},
		  alternative_compare_features {
			data {
			  attributes {
				specifications { id,title,status}
				logo {
					image_url
				  }
				  name,slug,categories{data{attributes{slug}}}

			  }
			}
		  }
		  alternative_more_alternatives {
			data {
			  attributes {
				name
				slug
				logo {
				  image_url
				}
				alternativeReviews:reviews(pagination:{limit:1000}){data{attributes{rating}}}
				categories{data{attributes{slug}}}
			  }
			}
		  }
		  alternative_top_reviews_vendors {
			data {
			  attributes {
				name
				slug
				categories {
				  data {
					attributes {
					  slug
					}
				  }
				}
				logo {
				  image_url
				}
				categories{data{attributes{slug}}}
			  }
			}
		  }
		  alternative_recommended_whitepaper_articles{data{attributes{title,slug,image_url}}},
		  top_alternatives {
			data {
			  attributes {name,slug,description,logo {
				  image_url
				}
				categories{data{attributes{slug}}}
				youtube_link
				reviews(pagination: { limit: 1000 }) {
				  data {
					id
					attributes {
					  rating
					}
				  }
				}
			  }
			}
		  }

		  categories {
			data {
			  attributes {
				name,type,slug
				alternative_compare_features {
				  data {
					attributes {
						specifications { id,title,status	}
					  logo {
						image_url
					  }
					  name,slug,categories{data{attributes{slug}}}
					}
				  }
				}
				alternative_short_description
				alternative_long_description
				alternative_more_alternatives {
				  data {
					attributes {
					  name
					  slug
					  logo {
						image_url
					  }
					  alternativeReviews:reviews(pagination:{limit:1000}){data{attributes{rating}}}
					  categories{data{attributes{slug}}}
					}
				  }
				}
				alternative_top_reviews_vendors {
				  data {
					attributes {
					  name
					  slug
					  categories {
						data {
						  attributes {
							slug
						  }
						}
					  }
					  logo {
						image_url
					  }
					  categories{data{attributes{slug}}}
					}
				  }
				}
				alternative_recommended_whitepaper_articles{data{attributes{title,slug,image_url}}},
				top_alternatives {
				  data {
					attributes {
					  name
					  slug
					  description
					  logo {
						image_url
					  }
					  categories{data{attributes{slug}}}
					  youtube_link
					  reviews(pagination: { limit: 1000 }) {
						data {
						  id
						  attributes {
							rating
						  }
						}
					  }
					}
				  }
				}
			  }
			}
		  }
		}
	  }
	}
  }
  `;

export const getVendorsBySearch = (search: Array<string>) => `
  {
	vendors(filters:{
	  slug:{
		in:[${JSON.stringify(search).slice(1, -1)}]
	  }
	}){
	  data{id
		attributes{name,slug,description,logo{title,image_url},categories{data{attributes{name,slug}}},youtube_link,
		reviews(pagination:{limit:1000}){data{attributes{rating}}}
		}
	  }
	}
  }`;

export const getVendorReviews = (slug: string) => `
  {
	vendors(
	  filters:{
		slug:{
		  eq: "${slug}"
		}
	 }			
	)
	{
	   data{id
		attributes{name,youtube_link,logo{title,image_url,image{data{attributes{url}}}},
		seo_reviews{metaTitle,metaDescription,keywords},
		  faqs(pagination:{limit:1000}){data{attributes{question,answer,status,faq_id}}},
		  prices{plan_title,plan_description,price,currency,price_description,feature_list{feature}}
		  feature{id,feature_name,feature_description,feature_status},
		  show_pros_cons,prosAndCons{pros{title,description,id},cons{title,description,id}},
		  top_alternatives{data{attributes{name,slug,logo{image_url}categories{data{attributes{slug}}}}}}
		  reviews(sort:["added_on:desc"],pagination:{limit:1000}){data{id,attributes{author,pros_text,cons_text,
			company,team_size,video,added_on,title,time_used,
			Industry,rating,value_for_money,creator,functionality,
			customer_support,ease_of_use,}}},,categories{data{attributes{name,slug,type,
				top_alternatives{data{attributes{name}}}}}}
		}
	  }
	}
  }`;

export const getSearchBarData = (
	search: string,
	resources: boolean = false,
	limit: number = 3
) => {
	let resourcesQuery = ''; // Initialize an empty string for the resources section

	if (resources) {
		resourcesQuery = `
		resources(pagination:{limit:5},filters:{slug:{contains:"${search}"}},sort:"slug"){
		  data{
			attributes{
			  title,type,date_added,image_url,
			  slug,status,post_id
			  categories{data{attributes{slug,name}}}
			}
		  }
		}
	  `;
		return `{
		${resourcesQuery}
	}`;
	}

	return `
	  {
		vendors(pagination:{limit:${limit}},filters:{slug:{contains:"${search}"}},sort:"slug"){
		  data{attributes{name,slug,logo{image_url},
			categories{data{attributes{name,slug}}}
		}}
		}
		subCategories(pagination:{limit:${limit}},filters:{slug:{contains:"${search}"}},sort:"slug"){
		  data{attributes{name,slug,
			category{data{attributes{slug,name}}}
		}}
		}
		
	  }
	`;
};

export const getVendorAlternatives = (categorySlug: string) => `
{
 
	categories(filters:{slug:{eq:"${categorySlug}"}}) {
	  data {
		attributes {
		  vendors {
			data {
			  attributes {
				name,description,logo{image_url},slug,categories{data{attributes{name,slug}}},youtube_link,
				reviews(pagination:{limit:1000}) {
				  data {
					id
					attributes {
					  rating
					}
				  }
				}
			  }
			}
		  }
		}
	  }
	}
  }
`;

export const categoryBrowseBoxes = `{
		categoryBrowseBoxes(pagination:{limit:20}){
		data{attributes{
		  title,
		  icon{data{attributes{url}}},
		  link
		  category{data{attributes{type,name}}}
		}}
	  }
	  }`;

export const privacyPolicyPageQuery = `{
	privacyPolicy{
	  data{
		attributes{
		  title,paragraph,seo{
			metaTitle,keywords,metaDescription
		  }
		}
	  }
	}
  }`;

export const termsAndConditionsPageQuery = `{
	termsOfService{
	  data{
		attributes{
		  title,paragraph,seo{
			metaTitle,keywords,metaDescription
		  }
		}
	  }
	}
  }`;

export const searchVendors = `
  {
	vendors(pagination:{limit:5000}){
	data{attributes{categories{data{attributes{name,slug}}},name,slug,logo{image_url}}}
  }
  }
  `;

export const getAllIndustries = `
{
	subCategories(pagination:{limit:2000}){data{attributes{name}id}}
  }`;

export const getVendorByCategoryAllProductsPage = (
	slug: string,
	start: number,
	limit: number = 10
) => `{
	categories(filters: {
	  slug: {
		eq:"${slug}"
	  }
	}) {
		data{attributes{
		  name,slug,type
	   vendors(pagination:{limit:${limit},start:${start}}){
  data{id
	attributes{name,product_id,description,slug,youtube_link,
		  reviews(pagination:{limit:1000}){data{attributes{rating}}},logo{image_url}
	}
  }
  }
		}}
	  }
	}
	  `;

export const getAuthorByID = (id: string) => `{
	authors(filters:{author_id:{eq:"${id}"}}){
	  data{attributes{
		author_id,first_name,last_name,email,display_name,
	  }}
	}
  }
`;
export const getAllAuthors = `
{
	authors(pagination:{limit:1000}){
	  data{attributes{
		author_id,first_name,last_name,email,display_name,
	  }}
	}
  }
`;

export const leadGenerationPageQuery = `{
	leadGeneration{
	  data{attributes{
		leadGeneration{
		  title,step{heading,text}textContent
		}
		leadsExamples{
		  title,example{heading,clientName,companyName,email,phone,address,industry,companySize,annualRevenue,applicationRequired,keyFeatures,currentSoftware,priceExpectations,projectTimeline,detailedNotes}
		}
	  }}
	}
  }`;

export const getResourceBySlug = (slug: string) => `{
	resources(filters:{slug:{eq:"${slug}"}}){data{attributes
	{
		title,type,date_added,image_url,content,status,post_id,publishedAt
        slug,relevent_resources{
			data{attributes{
			  title,slug
			}}
		  },
		resource_hero{data{attributes{url}}}
		seo:seo_resource{metaTitle,metaDescription,keywords}
		categories{data{attributes{slug,name}}}
		}}}
  }`;

export const getAllResources = `
  {
	resources(pagination:{limit:1000}){data{attributes
	{
		title,type,date_added,image_url,
        slug,status,post_id,
		resource_image{data{attributes{url}}}
		categories{data{attributes{slug,name}}}
	}}}
  }`;

export const getResourcesByType = (type: string) => `
{
	resources(filters:{type:{eq:"${type}"}},pagination:{limit:1000}){
	  data{attributes{
		title,type,date_added,image_url,,status,post_id
		categories{data{attributes{slug,name}}}
	  }}
	}
  }
  `;

export const getAllCategoriesTopResources = `
  {
	categories(pagination:{limit:20},sort:["rank:asc"]){
		data{id
		attributes{top_resources(pagination:{limit:3}){data{attributes{title,type,content,image_url,slug}}}
		  name,slug,icon{data{attributes{url}}},
				  
				  
		}}}
	}
	`;

export const getComparisonPageData = (slug: string) => `
	{
		resources(filters:{slug:{eq:"${slug}"}})
		{
		  data{attributes{
			comparison_vendors(pagination:{limit:2}){
			  data{attributes
			  {
				slug,categories{data{attributes{slug}}},
				logo{image_url,image{data{attributes{url}}}},prices{price},
						  feature(pagination:{limit:3}){feature_name,feature_description}
				reviews(pagination:{limit:4}){data{attributes{title}}}
			  }
			}
		  }
		  show_feature_products
			feature_vendors(pagination:{limit:3}){
			  data{attributes{slug,categories{data{attributes{slug}}}
				logo{image_url,image{data{attributes{url}}}},prices{plan_title}
				feature(pagination:{limit:3}){feature_name,feature_description}
				reviews(pagination:{limit:1000}){data{attributes{rating}}}	
			  }}
			}
		  }
		}
	  }
	  }
	  `;

export const getPricingChecklistByCategory = (slug: string) => `
	  {
 
		categories(filters:{slug:{eq:"${slug}"}}) {
		  data {id
			attributes {
		  pricing_guide_checklists{data{attributes{
			image_url,title,slug
		  }}}
			}
		  }
		}
	  }
	  `;

export const getAllResourcesForSearch = `
	  {
		resources(pagination:{limit:2000}){
		  data{attributes{
			title,image_url,slug
		  }}
		}
	  }
	  `;

export const onDemandWebinar = `
	  {
		onDemandWebinar{
		  data{attributes{on_demand_fields{
	  heading_form_page,heading_green_form_page,
	  form_heading_1,form_heading_2
	  hero_image{data{attributes{url}}},
	  description_text,description_heading,
	  heading1_video_page,heading_green_video_page,
	  formPageVideoId,VideoPageVideoId,
	  banner_text,banner_button_text,
	  resources{data{attributes{title,slug,image_url}}}
	  }}}
		}
	  }`;

export const thankYouPage = `
	  {
		thankYou{
		  data{attributes{resources{data{attributes{title,slug,image_url}}}}
		}
		}
	}

		`;
