import { createCanvas } from 'canvas';


export const generatePdfPreview = async (url: string) => {
  const canvas = createCanvas(100, 100);
  return canvas.toDataURL();
}