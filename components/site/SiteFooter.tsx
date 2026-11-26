import Link from "next/link";
import Logo from "@/components/site/Logo";

const companyLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About us" },
  { href: "/#services", label: "Services" },
  { href: "/stories", label: "Success stories" },
  { href: "/careers", label: "Careers" },
  { href: "/#contact", label: "Contact us" },
] as const;

const solutionLinks = [
  { href: "/service/itsm", label: "ITSM" },
  { href: "/service/itom", label: "ITOM" },
  { href: "/service/itam", label: "ITAM" },
  { href: "/service/irm", label: "IRM" },
  { href: "/service/secops", label: "SecOps" },
  { href: "/service/hrsd", label: "HRSD" },
  { href: "/service/csm", label: "CSM" },
  { href: "/service/fsm", label: "FSM" },
  { href: "/service/pa", label: "PA" },
  { href: "/service/spm", label: "SPM" },
  { href: "/service/app-engine", label: "App Engine" },
  { href: "/service/now-mobile", label: "NOW Mobile" },
] as const;

export default function SiteFooter() {
  return (
    <footer>
      <div className="w">
        <div className="fg">
          <div>
            <Logo />
            <p style={{ marginTop: "16px", maxWidth: "42ch" }}>Assisting businesses in gaining a competitive edge through workflow design and technology that boost effectiveness and resilience in a rapidly changing workplace.</p>
          </div>
          <div>
            <h4>Company</h4>
            <nav>{companyLinks.map((l) => <Link key={l.label} href={l.href}>{l.label}</Link>)}</nav>
          </div>
          <div>
            <h4>Solutions</h4>
            <nav>{solutionLinks.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</nav>
          </div>
        </div>
        <div className="cp">
          <span>Copyright © {new Date().getFullYear()} NOWITSYSTEMS</span>
          <a href="mailto:info@nowitsys.com">info@nowitsys.com</a>
        </div>
      </div>
    </footer>
  );
}
