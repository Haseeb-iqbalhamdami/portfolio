import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { skills } from '../data/portfolio';

function SkillIcon({ name, icon }) {
  if (!icon) {
    return <span className="skills__icon-fallback">{name.charAt(0)}</span>;
  }

  return (
    <img
      src={`https://cdn.simpleicons.org/${icon}/ffffff`}
      alt=""
      className="skills__icon"
      width={22}
      height={22}
      loading="lazy"
      onError={(e) => {
        e.currentTarget.style.display = 'none';
        const fallback = e.currentTarget.nextElementSibling;
        if (fallback) fallback.hidden = false;
      }}
    />
  );
}

export default function Skills() {
  return (
    <section className="section skills" id="skills">
      <div className="container">
        <SectionHeading
          label="Skills"
          title="Skills & Technologies"
          subtitle="Full stack frameworks, backend systems, cloud tools, and end-to-end QA expertise."
        />

        <div className="skills__grid">
          {skills.map((group, index) => (
            <motion.div
              key={group.category}
              className="skills__card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <h3 className="skills__category">{group.category}</h3>
              <ul className="skills__list">
                {group.items.map((item) => {
                  const name = typeof item === 'string' ? item : item.name;
                  const icon = typeof item === 'string' ? null : item.icon;

                  return (
                    <li key={name} className="skills__item">
                      <span className="skills__icon-wrap">
                        <SkillIcon name={name} icon={icon} />
                        <span className="skills__icon-fallback" hidden>
                          {name.charAt(0)}
                        </span>
                      </span>
                      <span>{name}</span>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
