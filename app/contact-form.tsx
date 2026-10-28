 "use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Frontend-only for now. Connect to an API/email service when the backend is decided.
    setSubmitted(true);
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-heading">
        <h3>Start a conversation</h3>
        <p>Fields marked with * are required.</p>
      </div>
      <div className="form-row">
        <label>Full name *<input name="name" placeholder="Your name" required autoComplete="name" /></label>
        <label>Work email *<input name="email" type="email" placeholder="you@company.com" required autoComplete="email" /></label>
      </div>
      <div className="form-row">
        <label>Company<input name="company" placeholder="Company name" autoComplete="organization" /></label>
        <label>What can we help with?
          <select name="interest" defaultValue="">
            <option value="" disabled>Select a service</option>
            <option>IT Service Management (ITSM)</option>
            <option>IT Operations / Asset Management</option>
            <option>GRC / Security Operations</option>
            <option>HRSD / Customer Service</option>
            <option>Integrations or custom workflows</option>
            <option>24x7 support</option>
            <option>Something else</option>
          </select>
        </label>
      </div>
      <label>Tell us a little about your project *<textarea name="message" rows={5} placeholder="What would you like to improve?" required /></label>
      <button className="button button-primary submit-button" type="submit">Send enquiry <span>↗</span></button>
      {submitted && (
        <p className="form-notice" role="status">
          Thanks for reaching out. This demo form is frontend-only; connect an API or email service to deliver submissions.
        </p>
      )}
      <p className="form-privacy">Your details will only be used to respond to your enquiry.</p>
    </form>
  );
}