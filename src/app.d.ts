// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types

declare module '*?webp';

declare module '*.svg?component' {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const content: any;
	export default content;
}

declare module 'svelte-collapsible';
declare module 'gsap/dist/gsap';

declare namespace svelte.JSX {
	interface HTMLAttributes<T> {
		onclick_outside?: (e: CustomEvent) => void;
	}
	interface SVGProps<T> {
		onclick_outside?: (e: CustomEvent) => void;
	}
}

declare namespace App {
	// interface Locals {}
	// interface Platform {}
	// interface PrivateEnv {}
	// interface PublicEnv {}
	// interface Session {}
	// interface Stuff {}
}
