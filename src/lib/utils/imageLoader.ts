type ImageLoaderOptions = {
	src: string;
	width: number;
	quality?: number;
};

export default function imageLoader({ src, width, quality }: ImageLoaderOptions): string {
	if (!src) return 'https://placehold.co/600x400';
	const imageUrl = src.split('/');
	let imageId;
	if (src.indexOf('imagedelivery.net') !== -1) {
		imageId = imageUrl[imageUrl.length - 2];
	} else {
		imageId = imageUrl[imageUrl.length - 1];
	}

	// Temp fixes
	if (
		imageId.startsWith('thumbnail') ||
		imageId.startsWith('large') ||
		imageId.indexOf('.gif') !== -1
	) {
		return `https://api.transparency-initiative.org/uploads/${imageId}`;
	}

	const params = [];
	if (width) params.push(`width=${width}`);
	if (quality) params.push(`quality=${quality}`);
	const paramsString = params.join(',');
	return `https://imagedelivery.net/JLMdIE4AwdK0PH94YYhL0w/${imageId}/${paramsString}`;
}
