/**
 * Resource URLs from publication meta (normalized by fetchPublications) or project info.
 * Uses paper first; link is a legacy fallback if present.
 */
export function getResourceLinks(info) {
  const trim = (v) => (v == null ? "" : String(v).trim());

  const out = [];
  const paper = trim(info.paper) || trim(info.link);
  if (paper) out.push({ label: "paper", url: paper });

  for (const key of ["code", "website", "video", "poster", "blog"]) {
    const url = trim(info[key]);
    if (url) out.push({ label: key, url });
  }
  return out;
}
