'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Hospitality Tech & AI SaaS',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: 'Hospitality Tech & AI SaaS',
          message: '',
        });
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Failed to submit form. Please try again.');
      }
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(err.message || 'An unexpected error occurred. Please try again.');
    }
  };

  return (
    <div className="contact-form-container">
      <form onSubmit={handleSubmit} className="luxury-contact-form">
        <h3 className="form-heading">
          Send a Message <span className="text-neon">⚡</span>
        </h3>
        <p className="form-subheading">
          Direct inquiry to Haris I M &bull; Auto-saved &amp; email notified instantly
        </p>

        {status === 'success' && (
          <div className="form-alert success">
            <div className="alert-icon">✓</div>
            <div>
              <strong>Inquiry Sent Successfully!</strong>
              <p>Thank you for reaching out. We have received your message and will respond shortly.</p>
            </div>
          </div>
        )}

        {status === 'error' && (
          <div className="form-alert error">
            <div className="alert-icon">⚠</div>
            <div>
              <strong>Submission Error</strong>
              <p>{errorMessage}</p>
            </div>
          </div>
        )}

        <div className="form-grid-2">
          <div className="form-field">
            <label htmlFor="name">Your Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="e.g. Alex Morgan"
              value={formData.name}
              onChange={handleChange}
              disabled={status === 'submitting'}
            />
          </div>

          <div className="form-field">
            <label htmlFor="email">Your Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="e.g. alex@company.com"
              value={formData.email}
              onChange={handleChange}
              disabled={status === 'submitting'}
            />
          </div>
        </div>

        <div className="form-grid-2">
          <div className="form-field">
            <label htmlFor="phone">Phone / WhatsApp</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="+1 or +91..."
              value={formData.phone}
              onChange={handleChange}
              disabled={status === 'submitting'}
            />
          </div>

          <div className="form-field">
            <label htmlFor="service">Topic / Service</label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              disabled={status === 'submitting'}
            >
              <option value="Hospitality Tech & AI SaaS">Hospitality Tech &amp; AI SaaS</option>
              <option value="SOP Strategy & Implementation">SOP Strategy &amp; Implementation</option>
              <option value="Software Architecture & Dev">Software Architecture &amp; Dev</option>
              <option value="FoodTech Growth Consulting">FoodTech Growth Consulting</option>
              <option value="Institutional & EduTech Advisory">Institutional &amp; EduTech Advisory</option>
              <option value="Partnership / Investment">Partnership / Investment</option>
              <option value="General Conversation">General Conversation</option>
            </select>
          </div>
        </div>

        <div className="form-field">
          <label htmlFor="message">Your Message *</label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            placeholder="Tell me about your project, goals, or operational challenges..."
            value={formData.message}
            onChange={handleChange}
            disabled={status === 'submitting'}
          />
        </div>

        <button
          type="submit"
          className="button button-primary form-submit-btn"
          disabled={status === 'submitting'}
        >
          {status === 'submitting' ? (
            <span className="btn-loader-text">
              <span className="spinner" /> Sending Notification...
            </span>
          ) : (
            <span>Send Message &rarr;</span>
          )}
        </button>
      </form>
    </div>
  );
}
