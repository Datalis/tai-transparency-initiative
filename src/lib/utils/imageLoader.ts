type ImageLoaderOptions = {
    src: string,
    width: number,
    quality?: number
}

export default function imageLoader({src, width, quality}: ImageLoaderOptions): string {
    // REMOVE
    if (!src) return 'https://placehold.co/600x400';
    const imageUrl = src.split('/');
	let imageId;
	if (src.indexOf('imagedelivery.net') !== -1) {
		imageId = imageUrl[imageUrl.length - 2];
	} else {
		imageId = imageUrl[imageUrl.length - 1];
	}
	const params = [];
	if (width) params.push(`width=${width}`);
	if (quality) params.push(`quality=${quality}`);
	const paramsString = params.join(',');
	return `https://imagedelivery.net/JLMdIE4AwdK0PH94YYhL0w/${imageId}/${paramsString}`;
}