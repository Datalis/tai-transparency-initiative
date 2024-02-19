import type { LayoutServerLoad } from "./$types";

export const load = (({ locals: { exitPreviewQueryParam, isPreview } }) => {
    return {
      exitPreviewQueryParam,
      isPreview,
    };
  }) satisfies LayoutServerLoad;