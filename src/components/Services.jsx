import { motion } from 'framer-motion';
import { Lightbulb, RefreshCw, Smartphone, Zap } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { services } from '../data/portfolio';

const iconMap = {
  smartphone: Smartphone,
  refresh: RefreshCw,
  zap: Zap,
  lightbulb: Lightbulb,
};

export default function Services() {
  return (
    <section className="section services" id="services">
      <div className="container">
        <SectionHeading
          label="Services"
          title="What I Offer"
          subtitle="End-to-end mobile development services tailored to your business goals."
        />

        <div className="services__grid">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.title}
                className="services__card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <div className="services__icon">
                  <Icon size={22} />
                </div>
                <h3 className="services__title">{service.title}</h3>
                <p className="services__description">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
