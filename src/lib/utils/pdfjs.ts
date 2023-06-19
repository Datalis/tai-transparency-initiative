const initPdfjs = async () => {
    const pdfjs = await import('pdfjs-dist/build/pdf');
    pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.js';
    return pdfjs;
}

// render the viewer
// Path: src/lib/utils/pdfjs.ts
const renderPdf = async (pdfjs: any, pdfUrl: string, container: HTMLElement) => {

    const data = await fetch('/api/file?url=' + pdfUrl, {
        cache: 'force-cache'
    }).then(res => res.arrayBuffer());
    
    const pdf = await pdfjs.getDocument({data}).promise;
    const page = await pdf.getPage(1);
    const viewport = page.getViewport({ scale: 1 });
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.height = viewport.height;
    canvas.width = viewport.width;
    container.appendChild(canvas);
    await page.render({ canvasContext: context, viewport }).promise;
}

export const renderPdfViewer = async (container: string) => {

    const elems = document.querySelectorAll(container);
    if (elems.length === 0) {
        return;
    }

    for (const elem of elems) {

        const pdfUrl = elem.getAttribute('data-pdf-url');
        if (!pdfUrl) {
            continue;
        }

        const pdfjs = await initPdfjs();
        await renderPdf(pdfjs, pdfUrl, elem as HTMLElement);
    }
}
