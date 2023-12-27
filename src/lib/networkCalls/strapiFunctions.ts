import axios from 'axios';
const url = process.env.NEXT_PUBLIC_GRAPHQL_URL || '';
export const getDataFromStrapi = async (query: string) => {
	try {
		// Prepare the request payload
		const payload = {
			query,
			// revalidateTime,
			// Optionally include revalidateTime in the payload if it's required by your GraphQL server
		};

		// Make the request using axios
		const response = await axios.post(url, payload, {
			headers: {
				'Content-Type': 'application/json',
			},
		});

		// Check for GraphQL errors in the response
		if (response.data?.errors) {
			throw new Error(response?.data?.errors[0]?.message);
		}
		// Return the actual data from the GraphQL response
		return response.data.data;
	} catch (err: any) {
		console.log(err?.response?.data?.errors[0]?.message);
		return null;
	}
};

export const postFormData = async (url: string, formData: any) => {
	try {
		const response = await axios.post('https://softwarefndr.com' + url, {
			data: formData,
		});
		const resp = await response.data;
		return resp;
	} catch (err) {
		console.log(err);
		return null;
	}
};

// export const postFetcherCallBack = async ([url, query]: Array<string>) => {
// 	try {
// 		const res = await fetch(url, {
// 			method: 'POST',
// 			headers: {
// 				'Content-Type': 'application/json',
// 			},
// 			body: JSON.stringify({
// 				query: query,
// 			}),
// 		});
// 		const data = await res.json();
// 		return data;
// 	} catch (err: any) {
// 		throw new Error(err);
// 	}
// };
