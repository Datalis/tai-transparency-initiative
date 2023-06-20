import { createCanvas } from 'canvas';
// import { createRequire } from 'module';
import pdfjsLib from 'pdfjs-dist';

// const require = createRequire(import.meta.url);


export const generatePdfPreview = async (url: string) => {
	try {
		
		if (process.env.NETLIFY) {
			// Workaround for Netlify. TODO: Remove
			pdfjsLib.GlobalWorkerOptions.workerSrc = '/var/task/node_modules/.pnpm/pdfjs-dist@3.7.107/node_modules/pdfjs-dist/build/pdf.worker.js';
		}

		const data = await fetch(url, {
			cache: 'force-cache'
		}).then((res) => res.arrayBuffer());

		const pdf = await pdfjsLib.getDocument({
			data
		}).promise;

		const page = await pdf.getPage(1);

		const viewport = page.getViewport({
			scale: 1
		});

		const canvas = createCanvas(viewport.width, viewport.height);
		const context = canvas.getContext('2d');

		await page.render({
			canvasContext: context as any,
			viewport
		}).promise;

		return canvas.toDataURL();
	} catch (e) {
		console.error(e);
		return '';
	}
};
