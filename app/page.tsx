import ContactForm from "./contact-form";

const navItems = [
  { label: "Home", href: "#top" },
  { label: "Services", href: "#", dropdown: true },
  { label: "Success stories", href: "#" },
  { label: "About us", href: "#" },
  { label: "Careers", href: "#" },
  { label: "FAQ", href: "#" },
];

const services = [
  ["ITSM", "IT Service Management"],
  ["ITOM", "IT Operations Management"],
  ["ITAM", "IT Asset Management"],
  ["GRC", "Governance, Risk & Compliance"],
  ["SecOps", "Security Operations"],
  ["HRSD", "HR Service Delivery"],
  ["CSM", "Customer Service Management"],
  ["FSM", "Field Service Management"],
  ["SPM", "Strategic Portfolio Management"],
  ["PA", "Performance Analytics"],
  ["App Engine", "Custom applications"],
  ["Mobile", "NOW Mobile"],
];

export default function HomePage() {
  return (
    <main id="top">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="NowITSystems home">
          <span className="brand-mark"><i /><i /><i /></span>
          <span>NowIT<span className="brand-accent">Systems</span></span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) =>
            item.dropdown ? (
              <div className="nav-dropdown" key={item.label}>
                <a href="#" aria-label="Services menu, pages coming later">
                  {item.label}<span className="chevron">⌄</span>
                </a>
                <div className="dropdown-panel">
                  {services.map(([short, name]) => (
                    <a href="#" key={short}>
                      <span>{name}</span><b>{short}</b>
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <a href={item.href} key={item.label}>{item.label}</a>
            ),
          )}
        </nav>

        <a className="button button-primary header-cta" href="#contact">Contact us <span>↗</span></a>
        <details className="mobile-menu">
          <summary aria-label="Open navigation menu"><span /><span /><span /></summary>
          <div className="mobile-panel">
            {navItems.map((item) => <a key={item.label} href={item.href}>{item.label}</a>)}
            <a href="#contact">Contact us</a>
          </div>
        </details>
      </header>

      <section className="hero section-wrap" aria-labelledby="hero-title">
        <div className="aurora aurora-one" />
        <div className="aurora aurora-two" />
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> SERVICENOW SOLUTIONS · BUILT AROUND YOU</p>
            <h1 id="hero-title">Workflows<br /><span>that run themselves.</span></h1>
            <p className="hero-description">
              We design and run ServiceNow so requests route, resolve and report
              without anyone chasing them.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">Talk to our team <span>↗</span></a>
              <a className="button button-secondary" href="#contact">Let&apos;s connect <span>↓</span></a>
            </div>
            <div className="hero-proof">
              <span className="proof-icon">✓</span>
              <p><strong>From complexity to clarity</strong><small>Connected services. Less manual work. Better visibility.</small></p>
            </div>
          </div>

          <div className="hero-art" aria-label="Abstract 3D illustration of connected workflows">
            <div className="orbit orbit-a" /><div className="orbit orbit-b" /><div className="orbit orbit-c" />
            <div className="globe">
              <div className="globe-shine" />
              <div className="globe-line line-a" /><div className="globe-line line-b" />
              <div className="globe-line line-c" />
              <div className="globe-word">NOWIT<span>SYS</span></div>
            </div>
            <div className="float-card card-top"><span className="mini-icon">✳</span><span><b>Intelligent workflows</b><small>Less manual work</small></span><i>↗</i></div>
            <div className="float-card card-left"><span className="mini-icon mint">⌁</span><span><b>Connected teams</b><small>One shared view</small></span></div>
            <div className="float-card card-bottom"><span className="mini-icon blue">◈</span><span><b>Service excellence</b><small>Built to keep moving</small></span><span className="status-dot" /></div>
            <p className="art-caption">CONNECTED SYSTEMS <span>•</span> INTELLIGENT WORKFLOWS</p>
          </div>
        </div>
        <div className="hero-bottom"><span>FROM COMPLEXITY</span><span className="arrow">↘</span><span>TO CLARITY</span><i /><span>BUILT FOR WHAT&apos;S NEXT</span></div>
      </section>

      <section className="contact-section section-wrap" id="contact">
        <div className="contact-panel">
          <div className="contact-copy">
            <p className="eyebrow">LET&apos;S TALK</p>
            <h2>Make work<br /><span>work better.</span></h2>
            <p className="contact-intro">
              Tell us what you&apos;re trying to improve. We&apos;ll start with a
              conversation about your teams, workflows and goals.
            </p>
            <div className="contact-detail">
              <span className="contact-symbol">@</span>
              <div><small>EMAIL US</small><a href="mailto:info@nowitsys.com">info@nowitsys.com</a></div>
            </div>
            <div className="contact-detail">
              <span className="contact-symbol">↗</span>
              <div><small>WHAT HAPPENS NEXT</small><p>Our team will review your message and follow up.</p></div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      <footer className="site-footer section-wrap">
        <a className="brand footer-brand" href="#top">
          <span className="brand-mark"><i /><i /><i /></span>
          <span>NowIT<span className="brand-accent">Systems</span></span>
        </a>
        <p>ServiceNow solutions built for your business.</p>
        <span>© {new Date().getFullYear()} NowITSystems</span>
      </footer>
    </main>
  );
}