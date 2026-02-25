import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.crossfitleiden.com';
  const locales = ['nl', 'en'];
  const now = new Date();

  // Define routes with their priorities and change frequencies
  const routes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[0]['changeFrequency'] }[] = [
    // Homepage
    { path: '', priority: 1.0, changeFrequency: 'daily' },

    // Key conversion pages
    { path: '/starten', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/kickstart', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/tarieven', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/gratis-intro', priority: 0.9, changeFrequency: 'weekly' },

    // Aanbod pages
    { path: '/aanbod', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/aanbod/groepslessen', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/aanbod/hyrox', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/aanbod/small-group', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/aanbod/private-coaching', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/aanbod/teens', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/aanbod/pre-teens', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/aanbod/workshops', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/aanbod/sport-performance', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/aanbod/fysiofabriek', priority: 0.8, changeFrequency: 'monthly' },

    // About pages
    { path: '/over-ons', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/over-ons/team', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/over-ons/locatie', priority: 0.8, changeFrequency: 'monthly' },

    // Content pages
    { path: '/rooster', priority: 0.8, changeFrequency: 'daily' },
    { path: '/ervaringen', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/contact', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/fitness-test', priority: 0.8, changeFrequency: 'monthly' },

    // Blog
    { path: '/blog', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/blog/crossfit-for-40-plus-beginners', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/blog/more-training-is-not-always-better', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/blog/no-sleeping-members', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/blog/nervous-to-start-one-small-step', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/blog/how-to-start-crossfit-when-youre-busy', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/blog/is-crossfit-safe', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/blog/why-80-percent-start-as-beginners', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/blog/what-happens-during-free-intro', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/blog/crossfit-na-je-40e', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/blog/terug-in-beweging-na-zwangerschap', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/blog/van-kantoorstoel-naar-barbell', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/blog/trainen-met-een-blessureverleden', priority: 0.7, changeFrequency: 'monthly' },

    // Events
    { path: '/events/hyrox-simulation', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/events/de-volgende-ronde', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/events/leidse-wintertriatlon', priority: 0.7, changeFrequency: 'monthly' },

    // Info pages
    { path: '/info/drop-in', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/info/faciliteit', priority: 0.6, changeFrequency: 'monthly' },

    // Utility pages
    { path: '/nutrition', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/links', priority: 0.5, changeFrequency: 'monthly' },
    { path: '/opzeggen', priority: 0.5, changeFrequency: 'monthly' },
    { path: '/privacy', priority: 0.5, changeFrequency: 'yearly' },
    { path: '/terms', priority: 0.5, changeFrequency: 'yearly' },
  ];

  // Generate sitemap entries for each locale and route
  const sitemap: MetadataRoute.Sitemap = [];

  locales.forEach((locale) => {
    routes.forEach((route) => {
      sitemap.push({
        url: `${baseUrl}/${locale}${route.path}`,
        lastModified: now,
        changeFrequency: route.changeFrequency,
        priority: route.priority,
      });
    });
  });

  return sitemap;
}
