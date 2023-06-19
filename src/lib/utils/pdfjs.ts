import { createRequire } from 'module';
const require = createRequire(import.meta.url);

export const renderPdfPreview = async (pdfUrl: string) => {
    try {
        const Canvas = require('canvas');
        const pdfjsLib = require('pdfjs-dist');
        const data = await fetch(pdfUrl, {
            cache: 'force-cache'
        }).then(res => res.arrayBuffer());
        const pdfDoc = await pdfjsLib.getDocument({
            data
        }).promise;
        const page = await pdfDoc.getPage(1);
        const viewport = page.getViewport({ scale: 1 });
        const canvas = Canvas.createCanvas(viewport.width, viewport.height);
        const renderContext = {
            canvasContext: canvas.getContext('2d'),
            viewport
        };
        await page.render(renderContext).promise;
        const dataUrl = canvas.toDataURL();
        return dataUrl;
    } catch (err) {
        console.log(err);
        return null;
    }
}
