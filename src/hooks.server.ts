import type { Handle } from "@sveltejs/kit";
import { PREVIEW_SECRET } from "$env/static/private";
import previewMode from "sveltekit-preview-mode";

export const handle: Handle = previewMode({
  previewSecret: PREVIEW_SECRET,
});