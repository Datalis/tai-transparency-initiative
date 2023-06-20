import type { ParamMatcher } from '@sveltejs/kit';

export const match: ParamMatcher = (param) => {
	return /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i.test(param);
};
