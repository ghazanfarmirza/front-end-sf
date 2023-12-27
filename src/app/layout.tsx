import FooterContainer from '@/containers/FooterContainer/FooterContainer';
import { ReduxProvider } from '@/redux/features/provider';
import '@/styles/globals.css';
import '@/styles/theme.css';
import { Poppins } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
	variable: '--font-poppins',
	display: 'optional',
});

export const metadata = {
	metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL as string),
	title: {
		default: 'Software Finder',
		template: `%s | Software Finder`,
	},
	description: 'Find your perfect software partner',
	verification: {
		google: 'sblaOIMcOPgqHUUYz1jwiLCEl-TIeiOW2w4Z6kvAdNE',
		'verify-v1': 'sblaOIMcOPgqHUUYz1jwiLCEl-TIeiOW2w4Z6kvAdNE',
	},
	robots: {
		default: 'noindex, nofollow',
	},
	googlebot: {
		default: 'noarchive',
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				<meta
					name="google-site-verification"
					content="sblaOIMcOPgqHUUYz1jwiLCEl-TIeiOW2w4Z6kvAdNE"
				/>

				<meta
					name="verify-v1"
					content="sblaOIMcOPgqHUUYz1jwiLCEl-TIeiOW2w4Z6kvAdNE"
				/>
				<meta name="robots" content="noindex,nofollow" />
				<meta name="googlebot" content="noarchive" />
				<script
					dangerouslySetInnerHTML={{
						__html: `history.scrollRestoration = "manual"`,
					}}
				/>
			</head>
			<body className={poppins.className}>
				<NextTopLoader
					color="#9abf14"
					initialPosition={0.08}
					crawlSpeed={200}
					height={3}
					crawl={true}
					showSpinner={true}
					easing="ease"
					speed={200}
					shadow="0 0 10px #9abf14,0 0 5px #9abf14"
				/>
				<ReduxProvider>
					<main className="app">{children}</main>

					<FooterContainer />
				</ReduxProvider>
				{/* <!-- Start of HubSpot Embed Code --> */}
				<script
					type="text/javascript"
					id="hs-script-loader"
					async
					defer
					src="//js.hs-scripts.com/6107502.js"
				></script>
				{/* <!-- End of HubSpot Embed Code --> */}
			</body>
		</html>
	);
}
