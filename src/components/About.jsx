import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { aboutContent, personalInfo } from '../data/portfolio';

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <SectionHeading
          label="About Me"
          title={aboutContent.heading}
          subtitle={aboutContent.subtitle}
        />

        <div className="about__grid">
          <motion.div
            className="about__visual"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="about__card">
              <div className="about__avatar">
                <span>MA</span>
              </div>
              <div className="about__card-info">
                <h3>{personalInfo.name}</h3>
                <p>{personalInfo.title}</p>
              </div>
              <div className="about__card-meta">
                <div>
                  <span className="about__meta-label">Location</span>
                  <span>{personalInfo.location}</span>
                </div>
                <div>
                  <span className="about__meta-label">Experience</span>
                  <span>{personalInfo.yearsExperience} Years</span>
                </div>
                <div>
                  <span className="about__meta-label">Phone</span>
                  <span>{personalInfo.phone}</span>
                </div>
              </div>
            </div>
            <div className="about__accent-line" />
          </motion.div>

          <motion.div
            className="about__content"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="about__lead">{aboutContent.lead}</p>
            {aboutContent.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            <div className="about__highlights">
              {aboutContent.highlights.map((item) => (
                <div key={item} className="about__highlight">
                  <span className="about__highlight-dot" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
