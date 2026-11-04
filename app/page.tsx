import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import LegacyInteractions from "@/components/site/LegacyInteractions";
import HomeIntro from "@/components/site/HomeIntro";
import HomeTrust from "@/components/site/HomeTrust";
import HomeExperience from "@/components/site/HomeExperience";
import HomeSolutions from "@/components/site/HomeSolutions";
import HomeContact from "@/components/site/HomeContact";

export default function HomePage() {
  return <>
    <a className="skip" href="#main">Skip to content</a><div id="pg" /><div id="glow" />
    <SiteHeader />
    <main id="view-home" className="view-home">
      <HomeIntro /><HomeTrust /><HomeExperience /><HomeSolutions /><HomeContact />
    </main>
    <main id="view-page" hidden tabIndex={-1} />
    <SiteFooter />
    <button id="up" aria-label="Back to top">↑</button>
    <LegacyInteractions />
  </>;
}
