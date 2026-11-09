import Link from "next/link";
import Logo from "@/components/site/Logo";
import { primaryLinks, serviceNav } from "@/lib/navigation";

export default function SiteHeader() {
  return (
    <header>
      <Logo priority />
      <nav aria-label="Main">
        <Link href="/">Home</Link>
        <details className="dd">
          <summary>Services</summary>
          <div className="mg">
            {serviceNav.map((item) => (
              <Link key={item.href} href={item.href}>{item.title}<span>{item.badge}</span></Link>
            ))}
          </div>
        </details>
        {primaryLinks.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
      </nav>
      <div className="hr"><Link className="btn p sm mag" href="/#contact">Contact us</Link></div>
      <details className="mm">
        <summary aria-label="Menu"><span className="hb"><i /><i /><i /></span></summary>
        <div>
          <Link href="/">Home</Link>
          <details className="sub">
            <summary>Services</summary>
            {serviceNav.map((item) => <Link key={item.href} href={item.href}>{item.title}</Link>)}
          </details>
          {primaryLinks.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
          <Link href="/#contact">Contact us</Link>
        </div>
      </details>
    </header>
  );
}
