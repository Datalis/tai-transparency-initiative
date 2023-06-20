import { createCanvas } from 'canvas';

import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export const generatePdfPreview = async (url: string) => {
  try {
    const data = await fetch(url, {
      cache: 'force-cache'
    }).then(res => res.arrayBuffer());

    let pdfjsLib: any;

    if (!process.env.NETLIFY) {
      pdfjsLib = require('pdfjs-dist');
    } else {
      pdfjsLib = (await import('pdfjs-dist')).default;
    }

    pdfjsLib.GlobalWorkerOptions.workerSrc = 'pdfjs-dist/build/pdf.worker.js';

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
}