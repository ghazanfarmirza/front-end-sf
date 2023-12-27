export type SuccessStoriesType = {
	id: number;
	name: string;
	story_text: string;
	research_hours: number;
	demo_views: number;
	purchase_timeframe: number;
	software_options: number;
	icon: {
		data: {
			attributes: {
				url: string;
			};
		};
	};
};

export interface FooterData {
	footer_resources: FooterResources[];
	footer_softwares: FooterSoftwares[];
}

export type FooterSoftwares = {
	title: string;
	vendors: {
		data: {
			attributes: {
				name: string;
				slug: string;
				categories: {
					data: {
						attributes: {
							name: string;
							slug: string;
						};
					}[];
				};
			};
		}[];
	};
};
export type FooterResources = {
	title: string;
	resources: {
		data: {
			attributes: {
				title: string;
				slug: string;
			};
		}[];
	};
};
