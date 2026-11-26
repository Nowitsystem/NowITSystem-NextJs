import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import StoryDetailPage from "@/components/stories/StoryDetailPage";
import { getSuccessStory, successStories } from "@/lib/stories";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return successStories.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const story = getSuccessStory(slug);
  return story
    ? {
        title: `${story.title} | ${story.bannerTitle} | NowITSystems`,
        description: story.subtitle,
      }
    : {};
}

export default async function StoryRoute({ params }: Props) {
  const { slug } = await params;
  const story = getSuccessStory(slug);
  if (!story) notFound();

  return (
    <>
      <div id="pg" />
      <div id="glow" />
      <SiteHeader />
      <StoryDetailPage story={story} />
      <SiteFooter />
    </>
  );
}
