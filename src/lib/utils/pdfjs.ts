import { createCanvas } from 'canvas';
import { createRequire } from 'module';
import pdfjsLib from 'pdfjs-dist';
const require = createRequire(import.meta.url);

// @ts-ignore
pdfjsLib.GlobalWorkerOptions.workerSrc = 'pdfjs-dist/build/pdf.worker.js'



export const generatePdfPreview = async (url: string) => {
	try {
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
