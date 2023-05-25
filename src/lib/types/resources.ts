import type { Author } from "./author";
import type { Image } from "./image";

export type ResourceType = {
	id: number;
	label: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
}

export type Resource = {
	id: number;
	date: string;
	title: string;
	image: Image;
	author: Author;
	summary: string;
	content: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	type: ResourceType;
	links: { [key: string]: any }[];
	url?: string;
	slug?: string;
}

export type ResourceFilter = {
	search?: string;
	type?: number;
	sortBy?: string;
	page?: number;
}