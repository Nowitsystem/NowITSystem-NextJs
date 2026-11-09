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

const solutionLabels = ["ITSM", "ITOM", "ITAM", "GRC", "SecOps", "HRSD", "CSM", "FSM", "PA", "SPM", "App Engine", "NOW Mobile"] as const;

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
            <nav>{solutionLabels.map((label) => <Link key={label} href="/#services">{label}</Link>)}</nav>
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
