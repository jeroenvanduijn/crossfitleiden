import { blogPosts } from '@/lib/blog-data';

const SITE_URL = 'https://www.crossfitleiden.com';

function escapeXml(str: string): string {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');
}

function generateRssFeed(): string {
    const items = blogPosts
        .map((post) => {
            const postUrl = `${SITE_URL}/nl/blog/${post.slug}`;
            const pubDate = new Date(post.isoDate).toUTCString();

            return `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${postUrl}</link>
      <guid isPermaLink="true">${postUrl}</guid>
      <description>${escapeXml(post.excerpt)}</description>
      <pubDate>${pubDate}</pubDate>
      <category>${escapeXml(post.category)}</category>
      <enclosure url="${escapeXml(post.image)}" type="image/jpeg" />
    </item>`;
        })
        .join('');

    return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>CrossFit Leiden Blog</title>
    <link>${SITE_URL}/nl/blog</link>
    <description>Tips, verhalen en updates van CrossFit Leiden. Trainingstips, succesverhalen, voedingsadvies en meer.</description>
    <language>nl</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/api/blog/feed" rel="self" type="application/rss+xml" />
    <image>
      <url>${SITE_URL}/favicon.ico</url>
      <title>CrossFit Leiden Blog</title>
      <link>${SITE_URL}/nl/blog</link>
    </image>${items}
  </channel>
</rss>`;
}

export async function GET() {
    const feed = generateRssFeed();

    return new Response(feed, {
        status: 200,
        headers: {
            'Content-Type': 'application/rss+xml; charset=utf-8',
            'Cache-Control': 'public, max-age=3600, s-maxage=3600',
        },
    });
}
