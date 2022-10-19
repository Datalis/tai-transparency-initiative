import type { Image } from "./image";

export type Staff = {
	id: number;
	image: Image;
	name: string;
	role: string;
	description: string;
	steering_commitee: boolean;
}