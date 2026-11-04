import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import ServicePage from "@/components/services/ServicePage";
import { services, getService } from "@/lib/services";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return services.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params; const service = getService(slug);
  return service ? { title: `${service.title} | NowITSystems`, description: service.description } : {};
}
export default async function ServiceRoute({ params }: Props) {
  const { slug } = await params; const service = getService(slug); if (!service) notFound();
  return <><div id="pg"/><div id="glow"/><SiteHeader/><ServicePage service={service}/><SiteFooter/></>;
}
