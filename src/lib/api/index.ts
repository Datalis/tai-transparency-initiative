import { API_SERVER, API_TOKEN } from '$env/static/private';
import qs from 'qs';


export const get = async (path: string, params: { [key: string]: any } = {}) => {

	const q = qs.stringify(params, { encodeValuesOnly: true });

	// console.log(q);

	const response = await fetch(`${API_SERVER}/api/${path}?${q}`, {
		method: 'GET',
		headers: {
			'Authorization': `Bearer ${API_TOKEN}`
		}
	});
	const data = await response.json();
	return data;
}

export const post = async (path: string, data: any) => {
	const response = await fetch(`${API_SERVER}/api/${path}`, {
		method: 'POST',
		headers: {
			// 'Authorization': `Bearer ${API_TOKEN}`,
			"Content-type": "application/json; charset=UTF-8"
		},
		body: JSON.stringify(data),
	});
	const result = await response.json();
	return result;
}
