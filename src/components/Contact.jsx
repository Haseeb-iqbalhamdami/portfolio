import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { personalInfo, socialLinks } from '../data/portfolio';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <SectionHeading
          label="Contact"
          title="Let's Build Something Great"
          subtitle="Have a project in mind? Reach out via email or phone — I'd love to hear from you."
        />

        <div className="contact__grid">
          <motion.div
            className="contact__info"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="contact__card">
              <div className="contact__item">
                <div className="contact__icon">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="contact__label">Email</span>
                  <a href={`mailto:${personalInfo.email}`} className="contact__value">
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="contact__item">
                <div className="contact__icon">
                  <Phone size={20} />
                </div>
                <div>
                  <span className="contact__label">Phone</span>
                  <a href={`tel:${personalInfo.phone.replace(/\s/g, '')}`} className="contact__value">
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              {personalInfo.whatsapp && (
                <div className="contact__item">
                  <div className="contact__icon">
                    <Phone size={20} />
                  </div>
                  <div>
                    <span className="contact__label">WhatsApp</span>
                    <a
                      href={`https://wa.me/${personalInfo.whatsapp.replace(/\D/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact__value"
                    >
                      {personalInfo.whatsapp}
                    </a>
                  </div>
                </div>
              )}

              <div className="contact__item">
                <div className="contact__icon">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="contact__label">Location</span>
                  <span className="contact__value">{personalInfo.location}</span>
                </div>
              </div>
            </div>

            <div className="contact__social">
              <span className="contact__social-label">Connect with me</span>
              <div className="contact__social-links">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact__social-link"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.form
            className="contact__form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                id="name"
                type="text"
                placeholder="John Doe"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                placeholder="john@example.com"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows={5}
                placeholder="Tell me about your project..."
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </div>

            <button type="submit" className="btn btn--primary btn--lg contact__submit">
              <Send size={18} />
              {submitted ? 'Message Sent!' : 'Send Message'}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
