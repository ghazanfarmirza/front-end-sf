import { NextApiRequest, NextApiResponse } from 'next';

// webhook endpoint to revalidate pages
export async function POST(
	reqAPi: Request,
	req: NextApiRequest,
	res: NextApiResponse
) {
	const vendor = req.body.entry.slug;
	console.log(vendor);
	await res.revalidate(`/emr-software/${vendor}`);
	return res.json({ revalidated: true });
}
