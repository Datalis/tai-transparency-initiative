import { setPreview } from "sveltekit-preview-mode";
import type { LayoutLoad } from "./$types";


export const load = (({ data: { isPreview } }) => setPreview(isPreview)) satisfies LayoutLoad;