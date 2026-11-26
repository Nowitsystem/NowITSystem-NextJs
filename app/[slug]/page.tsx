import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import AboutPage from "@/components/company/AboutPage";
import CareersPage from "@/components/company/CareersPage";
import StoriesPage from "@/components/stories/StoriesPage";
import { companyPages, getCompanyPage } from "@/lib/company-pages";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return companyPages.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getCompanyPage(slug);
  return page ? { title: `${page.eyebrow} | NowITSystems`, description: page.description } : {};
}
export default async function CompanyRoute({ params }: Props) {
  const { slug } = await params;
  const page = getCompanyPage(slug);
  if (!page) notFound();
  return (
    <>
      <div id="pg" />
      <div id="glow" />
      <SiteHeader />
      {slug === "stories" ? <StoriesPage /> : slug === "about" ? <AboutPage /> : <CareersPage />}
      <SiteFooter />
    </>
  );
}
