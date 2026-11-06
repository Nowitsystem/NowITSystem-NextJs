import { services } from "@/lib/services";

export const serviceBadges: Record<string, string> = {
  "app-engine": "App",
  "now-mobile": "Mobile",
};

export const serviceNav = services.map((s) => ({
  href: `/service/${s.slug}`,
  title: s.title,
  badge: serviceBadges[s.slug] ?? s.slug.toUpperCase(),
}));

export const primaryLinks = [
  { href: "/stories", label: "Success stories" },
  { href: "/about", label: "About us" },
  { href: "/careers", label: "Careers" },
  { href: "/#faq", label: "FAQ" },
] as const;
