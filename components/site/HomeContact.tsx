export default function HomeContact() {
  return (
    <>
      <section id="faq" style={{ "paddingTop": "0" }}><div className="w">
<h2 className="rv" style={{ "textAlign": "center" }}>In case you missed anything</h2>
<div className="fq rv">
<details open={true}><summary>What is ServiceNow and how is it useful?</summary><p>ServiceNow is a cloud platform that turns manual, email-driven work into automated workflows. It gives IT, HR, customer service and other teams one place to request, track and resolve work.</p></details>
<details><summary>What are the benefits of using ServiceNow?</summary><ul><li>One platform for many departments</li><li>Automation that cuts repetitive work</li><li>Clear visibility through dashboards and reports</li></ul></details>
<details><summary>What are the different modules in ServiceNow?</summary><ul><li>ITSM, ITOM and ITAM for IT</li><li>GRC and SecOps for risk and security</li><li>HRSD, CSM and FSM for people, customers and field teams</li><li>Performance Analytics and SPM for insight and planning</li><li>App Engine and NOW Mobile for custom apps and mobile access</li></ul></details>
<details><summary>How do third-party integrations work?</summary><p>ServiceNow connects to other systems through APIs and ready-made connectors. We design and configure the integrations so data moves between your tools without manual re-entry.</p></details>
<details><summary>How is availability and reliability for business?</summary><p>The platform is built for high availability, and our 24x7 support team is there to help when something needs attention.</p></details>
<details><summary>What security measures does it offer?</summary><p>ServiceNow offers role-based access control, encryption and audit trails. We configure these to match your organization’s policies.</p></details>
</div>
</div></section><section id="contact" style={{ "paddingTop": "0" }}><div className="w"><div className="ct rv">
<div><h2>Are you ready for a better, more productive business?</h2><p className="lead">Stop worrying about technology problems and focus on your business. Tell us what you need at info@nowitsys.com and we will get back to you.</p></div>
<form className="fm" id="fm">
<label>Name<input autoComplete="name" name="name" placeholder="Your name" required={true} /></label>
<label>Work email<input autoComplete="email" name="email" placeholder="you@company.com" required={true} type="email" /></label>
<label>Area of interest<select name="interest"><option>IT Service Management</option><option>IT Operations Management</option><option>IT Asset Management</option><option>Security, risk and compliance</option><option>Something else</option></select></label>
<label>How can we help?<textarea name="message" placeholder="Tell us a little about your team and what you want to improve" rows="4"></textarea></label>
<button className="btn p mag" type="submit">Send message</button>
<div aria-live="polite" className="ok" id="ok" role="status">Your email app should open with the message ready to send. If it does not, write to info@nowitsys.com.</div>
</form>
</div></div></section>
    </>
  );
}
