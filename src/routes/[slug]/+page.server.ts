import { get } from '$lib/api';
import { getLatestPostsFromTwitter } from '$lib/api/social';
import imageLoader from '$lib/utils/imageLoader';
import { error } from '@sveltejs/kit';
import { parse } from 'node-html-parser';

const loadRelatedResources = async (resource: any) => {
	const queryParams = {
		fields: ['id', 'summary', 'title', 'date', 'url', 'slug'],
		sort: 'date:DESC',
		filters: {
			type: {
				id: {
					$eq: resource?.type?.id
				}
			},
			id: {
				$not: resource?.id
			}
		},
		pagination: {
			limit: 2
		},
		populate: {
			image: {
				populate: '*'
			},
			type: {
				fields: ['id', 'label']
			},
			author: {
				fields: ['name', 'role']
			}
		}
	};

	const { data } = await get('wc-resources', queryParams);

	return data;
};

const htmlContentParser = async (content: string) => {
	const root = parse(content);
	const slider = root.querySelector('.tai-prose-carousel');
	if (slider) {
		const imagesAttr = slider.getAttribute('images');
		const images = imagesAttr?.split('|') || [];
		if (images.length) {
			const slideMarkup = images
				?.map((i) => {
					const imgSrc = imageLoader({ src: i, width: 2048, quality: 100 });
					const slide = `
						<div class="swiper-slide">
							<img src="${imgSrc}" alt="${i}" loading="lazy" decoding="async" sizes="100vw">
						</div>
					`;
					return slide;
				})
				.join('\n');
			const swiper = parse(`
					<div class="swiper">
						<div class="swiper-wrapper">
							${slideMarkup}
						</div>
						<div class="swiper-pagination"></div>
						<div class="swiper-button-prev"></div>
  						<div class="swiper-button-next"></div>
					</div>
				`);
			slider.replaceWith(swiper);
		}
	}

	const images = root.querySelectorAll('img');
	for (const img of images) {
		const src = img.getAttribute('src');
		if (src && src?.indexOf('wp-content') !== -1) {
			img.removeAttribute('srcset');
			img.setAttribute(
				'src',
				src.replace('www.transparency-initiative.org', 'old.transparency-initiative.org')
			);
		}
	}

	const proses = root.querySelectorAll('.tai-prose-html');
	if (proses && proses.length) {
		for (const p of proses) {
			const data = p.getAttribute('inner');
			if (data) {
				const html = decodeURIComponent(atob(data));
				p.innerHTML = html;
			}
		}
	}

	const pdfs = root.querySelectorAll('.tai-embed-pdf-iframe');
	if (pdfs.length) {
		for (const pdf of pdfs) {
			const url = pdf.getAttribute('src');
			if (url) {
				// const preview = await generatePdfPreview(url);
				// pdf.replaceWith(`
				// 	<a href="${url}" target="_blank" rel="noopener" class="pdf-viewer">
				// 		<img src="${preview}" alt="PDF Preview" loading="lazy" decoding="async" sizes="100vw">
				// 	</a>`);
				// pdf.replaceWith(`
				// 	<iframe src="${url}" frameborder="0" class="tai-embed-pdf-iframe" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
				// `);
				pdf.replaceWith(
					`
						<object data="https://drive.google.com/viewerng/viewer?embedded=true&url=${url}" type="application/pdf">
							<embed src="https://drive.google.com/viewerng/viewer?embedded=true&url=${url}" type='application/pdf'>
						</object>
					`
				)
			}
			// pdf.replaceWith(`
			// <a href="${url}" target="_blank" class="pdf-viewer" data-pdf-url="${url}"></a>`);
		}
	}

	const videos = root.querySelectorAll('video');
	if (videos.length) {
		for (const video of videos) {
			const src = video.getAttribute('src');
			if (src) {
				video.setAttribute('src', `${src}#t=0.5`);
				video.setAttribute('preload', 'auto');
				video.setAttribute('controls', 'controls');
				video.setAttribute('playsinline', 'playsinline');
				video.setAttribute('style', 'aspect-ratio: 16/9; width: 100%;');
			}
		}
	}

	return root.toString();
};

export async function load({ params }: { [key: string]: any }) {
	const { slug } = params;

	const queryParams = {
		populate: '*',
		filters: {
			slug: {
				$eq: slug
			}
		}
	};

	try {
		const { data } = await get('wc-resources', queryParams);
		if (data && data.length) {
			const resource = data[0];
			resource.content = await htmlContentParser(resource.content);
			const related = loadRelatedResources(resource);

			const social = {
				// youtube: await getLatestPostsFromYoutube(),
				twitter: await getLatestPostsFromTwitter(),
			}

			return {
				resource,
				related,
				social
			};
		} else {
			throw error(404, 'Not found');
		}
	} catch (e: any) {
		throw error(e?.status || 500, `${e?.body || ''}`);
	}
}
