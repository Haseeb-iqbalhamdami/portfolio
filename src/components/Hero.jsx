import { motion } from 'framer-motion';
import { ArrowDown, Briefcase, Building2, Download, GraduationCap, Mail, Smartphone } from 'lucide-react';
import { personalInfo, stats } from '../data/portfolio';

const statIcons = {
  briefcase: Briefcase,
  building: Building2,
  smartphone: Smartphone,
  graduation: GraduationCap,
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__bg">
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
        <div className="hero__grid" />
      </div>

      <div className="container hero__content">
        <motion.div
          className="hero__badge"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          <span className="hero__badge-dot" />
          {personalInfo.availability}
        </motion.div>

        <motion.p
          className="hero__greeting"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          Hello, I'm
        </motion.p>

        <motion.h1
          className="hero__name"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          {personalInfo.name}
        </motion.h1>

        <motion.h2
          className="hero__title"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
        >
          <span className="hero__title-main">{personalInfo.title}</span>
          <span className="hero__title-accent">
            {' '}with {personalInfo.yearsExperience} Years
          </span>
        </motion.h2>

        <motion.p
          className="hero__tagline"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={4}
        >
          {personalInfo.tagline}
        </motion.p>

        <motion.div
          className="hero__actions"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={5}
        >
          <a href="#contact" className="btn btn--primary btn--lg">
            <Mail size={18} />
            Get In Touch
          </a>
          <a
            href={personalInfo.resumeUrl}
            download={personalInfo.resumeFileName}
            className="btn btn--outline btn--lg">
            <Download size={18} />
            Download Resume
          </a>
        </motion.div>

        <motion.div
          className="hero__stats"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={6}
        >
          {stats.map((stat) => {
            const Icon = statIcons[stat.icon];
            return (
              <div key={stat.label} className="hero__stat">
                {Icon && (
                  <span className="hero__stat-icon">
                    <Icon size={14} />
                  </span>
                )}
                <span className="hero__stat-value">{stat.value}</span>
                <span className="hero__stat-label">{stat.label}</span>
              </div>
            );
          })}
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        aria-label="Scroll to about"
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  );
}
