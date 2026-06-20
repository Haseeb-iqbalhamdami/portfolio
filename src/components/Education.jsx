import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { education } from '../data/portfolio';

export default function Education() {
  return (
    <section className="section education" id="education">
      <div className="container">
        <SectionHeading
          label="Education"
          title="Academic Background"
          subtitle="Formal training in computer science and software development."
        />

        <div className="education__list">
          {education.map((item, index) => (
            <motion.article
              key={item.institution}
              className="education__card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
            >
              <div className="education__header">
                <div>
                  <h3 className="education__institution">{item.institution}</h3>
                  <p className="education__degree">{item.degree}</p>
                </div>
                <span className="education__period">{item.period}</span>
              </div>
              <p className="education__location">{item.location}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
