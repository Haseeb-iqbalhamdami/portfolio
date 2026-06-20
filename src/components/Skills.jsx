import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { skills } from '../data/portfolio';

export default function Skills() {
  return (
    <section className="section skills" id="skills">
      <div className="container">
        <SectionHeading
          label="Skills"
          title="Skills & Technologies"
          subtitle="Languages, frameworks, databases, and platforms from my professional resume."
        />

        <div className="skills__grid">
          {skills.map((group, index) => (
            <motion.div
              key={group.category}
              className="skills__card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="skills__category">{group.category}</h3>
              <ul className="skills__list">
                {group.items.map((item) => (
                  <li key={item} className="skills__item">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
