import Turkey from '@data/Turkey';
import { createSlug } from "@hooks/createSlug";
const URL = "https://istanbulmotosiklettransfer.com/";
function generateSiteMap(pages) {
return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
<url>
<loc>${URL}</loc>
</url>
<url>
<loc>${`${URL}hizmetlerimiz`}</loc>
<lastmod>${new Date().toISOString()}</lastmod>
</url>
<url>
<loc>${`${URL}iletisim`}</loc>
<lastmod>${new Date().toISOString()}</lastmod>
</url>
${Object.entries(Turkey).map(([key]) => {
return `
<url>
<loc>${`${URL}istanbul-${key}-motosiklet-transfer-hizmeti`}</loc>
<lastmod>${new Date().toISOString()}</lastmod>
</url>
`;
})}
</urlset>
`;
}
export async function getServerSideProps({ res }) {
const pages = Turkey;
// Generate the XML sitemap with the blog data
const sitemap = generateSiteMap(pages);
res.setHeader("Content-Type", "text/xml");
// Send the XML to the browser
res.write(sitemap);
res.end();
return {
props: {},
};
}
export default function SiteMap() {}