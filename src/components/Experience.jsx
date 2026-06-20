import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { experiences } from '../data/portfolio';

export default function Experience() {
  return (
    <section className="section experience" id="experience">
      <div className="container">
        <SectionHeading
          label="Experience"
          title="Professional Experience"
          subtitle="React Native development across product teams, agencies, and remote collaborations."
        />

        <div className="experience__timeline">
          {experiences.map((exp, index) => (
            <motion.article
              key={`${exp.company}-${exp.period}`}
              className="experience__item"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="experience__marker">
                <span className="experience__dot" />
              </div>
              <div className="experience__card">
                <div className="experience__header">
                  <div>
                    <h3 className="experience__role">{exp.company}</h3>
                    <p className="experience__company">{exp.role}</p>
                  </div>
                  <span className="experience__period">{exp.period}</span>
                </div>
                <p className="experience__location">{exp.location}</p>
                <p className="experience__description">{exp.description}</p>
                <ul className="experience__highlights">
                  {exp.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
