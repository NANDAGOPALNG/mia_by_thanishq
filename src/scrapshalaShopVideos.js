/**
 * Mamma Mills — local video assets with Instagram links.
 * Single source for home "Shop videos", header reels, and PDP reel strip.
 */
import v1 from './assets/videos/mamma_mills_1744098572_3606081346883029755_70267739450.mp4';
import v2 from './assets/videos/mamma_mills_1746527161_3626454186906490899_70267739450.mp4';
import v3 from './assets/videos/mamma_mills_1747486591_3634500530388680915_70267739450.mp4';
import v4 from './assets/videos/mycas_college_mysuru_1745649951_3619096370792968714_7199826330.mp4';
import v5 from './assets/videos/nature_dairy.01_1743992946_3605195435406970541_50359987524.mp4';

export const MUUN_SHOP_VIDEO_CLIPS = [
  {
    url: v1,
    title: 'Food with a soul',
    instagramUrl: 'https://www.instagram.com/p/DKgdn2kSQOz/?img_index=1',
  },
  {
    url: v2,
    title: 'Crafted with purpose',
    instagramUrl: 'https://www.instagram.com/p/DI3JIWAo6E0/',
  },
  {
    url: v3,
    title: 'Pure organic goodness',
    instagramUrl: 'https://www.instagram.com/p/DJTwN6EyhgT/',
  },
  {
    url: v4,
    title: 'Nourishing little ones',
    instagramUrl: 'https://www.instagram.com/p/DILX-EQIAr7/',
  },
  {
    url: v5,
    title: "Nature's best for babies",
    instagramUrl: 'https://www.instagram.com/p/DIIOiW5Ss6t/',
  },
];

/** @deprecated Prefer `MUUN_SHOP_VIDEO_CLIPS` — kept for existing imports (URL list only) */
export const SCRAPSHALA_SHOP_VIDEOS = MUUN_SHOP_VIDEO_CLIPS.map((c) => c.url);

/** Floating draggable reel on the product (PDP) page */
export const PDP_DRAGGABLE_VIDEO = SCRAPSHALA_SHOP_VIDEOS[0];
