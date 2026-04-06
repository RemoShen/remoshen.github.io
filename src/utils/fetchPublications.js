/**
 * Paper assets live under public/papers/<slug>/: meta.json plus teaser image (default teaser.png; override via meta "teaser").
 * Register each slug in public/papers/manifest.json; list order follows meta.json "order" ascending.
 */

const papersRoot = `${import.meta.env.BASE_URL}papers`;

async function loadMeta(slug) {
  const res = await fetch(`${papersRoot}/${slug}/meta.json`);
  if (!res.ok) {
    throw new Error(`Failed to load papers/${slug}/meta.json (${res.status})`);
  }
  return res.json();
}

export async function fetchPublications() {
  const manifestRes = await fetch(`${papersRoot}/manifest.json`);
  if (!manifestRes.ok) {
    throw new Error(`Failed to load papers/manifest.json (${manifestRes.status})`);
  }
  const { slugs } = await manifestRes.json();

  const rows = await Promise.all(
    slugs.map(async (slug) => {
      const meta = await loadMeta(slug);
      const { teaser, ...metaRest } = meta;
      const teaserFile = teaser || "teaser.png";
      const imageUrl = `${papersRoot}/${slug}/${teaserFile}`;

      const {
        order = 100,
        venue,
        conference: confAlias,
        title,
        authors,
        link,
        ...optional
      } = metaRest;

      return {
        title,
        authors,
        link,
        conference: venue ?? confAlias,
        imageUrl,
        order,
        ...optional,
      };
    })
  );

  return rows
    .sort((a, b) => (a.order ?? 100) - (b.order ?? 100))
    .map((row) => {
      const { order: _order, ...paper } = row;
      return paper;
    });
}
