/**
 * Publications are listed in public/papers/publications.json (array order = page order, top → bottom).
 * Each entry needs a folder public/papers/<slug>/ with meta.json (title, authors, venue, links, teaser, …).
 *
 * Catalog entry shape:
 *   { "slug": "my-paper", "title": "Optional hint for editors; real title still comes from meta.json" }
 * You may also use a bare string in the array: "my-paper" (slug only).
 *
 * Supported meta.json fields:
 *   — Core: title, authors, venue (or conference), teaser (image filename, default teaser.png)
 *   — Optional: year, award (shown bold after venue)
 *   — Resource URLs: paper, code, website, video, poster, blog
 * Legacy: "link" is an alias for "paper" when reading meta (not written back).
 */

const papersRoot = `${import.meta.env.BASE_URL}papers`;

function str(v) {
  if (v == null) return undefined;
  const s = String(v).trim();
  return s || undefined;
}

async function loadMeta(slug) {
  const res = await fetch(`${papersRoot}/${slug}/meta.json`);
  if (!res.ok) {
    throw new Error(`Failed to load papers/${slug}/meta.json (${res.status})`);
  }
  return res.json();
}

function catalogSlugs(catalog) {
  const { publications } = catalog;
  if (!Array.isArray(publications) || publications.length === 0) {
    throw new Error(
      'papers/publications.json must contain a non-empty "publications" array'
    );
  }
  return publications.map((entry, i) => {
    if (typeof entry === "string") {
      const slug = entry.trim();
      if (!slug) {
        throw new Error(`papers/publications.json: empty slug at index ${i}`);
      }
      return slug;
    }
    if (entry && typeof entry.slug === "string") {
      const slug = entry.slug.trim();
      if (!slug) {
        throw new Error(`papers/publications.json: empty slug at index ${i}`);
      }
      return slug;
    }
    throw new Error(
      `papers/publications.json: entry at index ${i} must be a string or { "slug": "..." }`
    );
  });
}

function rowFromMeta(slug, meta) {
  const { teaser, ...metaRest } = meta;
  const teaserFile = teaser || "teaser.png";
  const imageUrl = `${papersRoot}/${slug}/${teaserFile}`;

  const {
    order: _ignoreOrder,
    venue,
    conference: confAlias,
    title,
    authors,
    link,
    paper,
    poster,
    code,
    website,
    video,
    blog,
    year,
    award,
    ...extra
  } = metaRest;

  const paperUrl = str(paper) || str(link);

  return {
    slug,
    title,
    authors,
    conference: str(venue) ?? str(confAlias),
    award: str(award),
    imageUrl,
    paper: paperUrl,
    poster: str(poster),
    code: str(code),
    website: str(website),
    video: str(video),
    blog: str(blog),
    year: year ?? undefined,
    ...extra,
  };
}

export async function fetchPublications() {
  const catalogRes = await fetch(`${papersRoot}/publications.json`);
  if (!catalogRes.ok) {
    throw new Error(
      `Failed to load papers/publications.json (${catalogRes.status})`
    );
  }
  const catalog = await catalogRes.json();
  const slugs = catalogSlugs(catalog);

  const metaBySlug = new Map(
    await Promise.all(
      slugs.map(async (slug) => {
        const meta = await loadMeta(slug);
        return [slug, meta];
      })
    )
  );

  if (import.meta.env.DEV && Array.isArray(catalog.publications)) {
    catalog.publications.forEach((entry, i) => {
      if (entry && typeof entry === "object" && str(entry.title)) {
        const slug = typeof entry.slug === "string" ? entry.slug.trim() : "";
        const meta = slug ? metaBySlug.get(slug) : null;
        if (meta && str(meta.title) && str(entry.title) !== str(meta.title)) {
          console.warn(
            `[papers] publications.json[${i}] title differs from meta.json for "${slug}" (catalog is only for ordering; titles come from meta).`
          );
        }
      }
    });
  }

  return slugs.map((slug) => {
    const meta = metaBySlug.get(slug);
    if (!meta) {
      throw new Error(`Missing meta for slug "${slug}"`);
    }
    return rowFromMeta(slug, meta);
  });
}
