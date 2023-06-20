import type { Image } from './image';

export type Member = {
	id: number;
	url: string;
	image: Image;
	strategy?: string;
	contact?: string;
	project?: string;
	[key: string]: any;
};
