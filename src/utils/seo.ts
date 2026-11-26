export type AppRoute =
  | 'home'
  | 'about'
  | 'packages'
  | 'careers'
  | 'privacy'
  | 'popia'
  | 'terms';

export interface RouteSeoMeta {
  path: string;
  title: string;
  description: string;
  keywords: string;
}

export const ROUTE_SEO_MAP: Record<AppRoute, RouteSeoMeta> = {
  home: {
    path: '/',
    title: 'Synergy Guardian Care | Home Care, Nannies & Elderly Care Gauteng',
    description:
      'Vetted stay-in nannies, childcare, elderly care, post-hospital recovery, and disability support across Johannesburg and Gauteng. Call or WhatsApp 076 647 5746.',
    keywords:
      'home care Johannesburg, stay-in nannies Sandton, elderly care Randburg, childcare Fourways, caregivers Midrand, disability support Roodepoort, Synergy Guardian Care',
  },
  about: {
    path: '/about-us',
    title: 'About Synergy Guardian Care | Trusted Family Care in Gauteng',
    description:
      'Discover how Synergy Guardian Care delivers dignified elderly care, stay-in nannies, and disability support across Johannesburg, Sandton, Randburg, and Gauteng.',
    keywords:
      'about Synergy Guardian Care, family care organisation Johannesburg, vetted caregivers Gauteng, multi-generational home care South Africa',
  },
  packages: {
    path: '/care-packages',
    title: 'Care Packages & Service Options | Synergy Guardian Care',
    description:
      'Explore flexible childcare, stay-in nanny, elderly care, and disability support packages tailored to your family schedule in Johannesburg and Gauteng.',
    keywords:
      'nanny placement cost Johannesburg, stay-in nanny rates Gauteng, elderly home care packages, flexible family care options',
  },
  careers: {
    path: '/careers',
    title: 'Careers at Synergy Guardian Care | Caregiver & Nanny Jobs Gauteng',
    description:
      'Apply online to join Synergy Guardian Care as a vetted caregiver, stay-in nanny, elderly care assistant, babysitter, or disability support worker in Gauteng.',
    keywords:
      'caregiver jobs Johannesburg, stay-in nanny jobs Gauteng, elderly care careers Sandton, childcare provider jobs South Africa',
  },
  privacy: {
    path: '/privacy-policy',
    title: 'Privacy Policy | Synergy Guardian Care South Africa',
    description:
      'Read how Synergy Guardian Care protects family, client, and caregiver personal data in accordance with South African privacy law and POPIA.',
    keywords: 'Synergy Guardian Care privacy policy, POPIA family confidentiality',
  },
  popia: {
    path: '/popia-compliance',
    title: 'POPIA Compliance | Synergy Guardian Care South Africa',
    description:
      'Review Synergy Guardian Care POPIA compliance framework, Information Officer details, and data subject rights under South African Act 4 of 2013.',
    keywords: 'POPIA compliance South Africa, Synergy Guardian Care Information Officer',
  },
  terms: {
    path: '/terms-and-conditions',
    title: 'Terms and Conditions | Synergy Guardian Care South Africa',
    description:
      'Review the Terms and Conditions governing Synergy Guardian Care caregiver placements, home-based care consultations, and website usage in South Africa.',
    keywords: 'Synergy Guardian Care terms and conditions, caregiver placement terms SA',
  },
};

export function resolveRouteFromPathname(pathname: string): AppRoute {
  const normalized = pathname.replace(/\/+$/, '') || '/';
  const match = (Object.entries(ROUTE_SEO_MAP) as [AppRoute, RouteSeoMeta][]).find(
    ([, meta]) => meta.path === normalized,
  );
  return match ? match[0] : 'home';
}

function setMetaTag(selector: string, attribute: 'name' | 'property', key: string, content: string) {
  let tag = document.querySelector<HTMLMetaElement>(selector);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attribute, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

export function applyRouteSeoMetadata(route: AppRoute): void {
  if (typeof document === 'undefined') return;
  const meta = ROUTE_SEO_MAP[route];
  const canonicalUrl = `${window.location.origin}${meta.path}`;

  document.title = meta.title;
  setMetaTag('meta[name="description"]', 'name', 'description', meta.description);
  setMetaTag('meta[name="keywords"]', 'name', 'keywords', meta.keywords);
  setMetaTag('meta[property="og:title"]', 'property', 'og:title', meta.title);
  setMetaTag('meta[property="og:description"]', 'property', 'og:description', meta.description);
  setMetaTag('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
  setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', meta.title);
  setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', meta.description);

  let canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!canonicalLink) {
    canonicalLink = document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalLink);
  }
  canonicalLink.setAttribute('href', canonicalUrl);
}
