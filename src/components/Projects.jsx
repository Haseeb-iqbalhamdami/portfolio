import { motion } from 'framer-motion';
import { ExternalLink, Github, Globe, Smartphone, Star, Users } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { projects } from '../data/portfolio';

function ProjectLinks({ project }) {
  if (project.status === 'in-progress') {
    return (
      <div className="projects__links">
        <span className="projects__link projects__link--muted">Near launch</span>
      </div>
    );
  }

  if (project.links?.length) {
    return (
      <div className="projects__links projects__links--wrap">
        {project.links.map((link) => (
          <a
            key={link.label}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="projects__link"
            aria-label={`${project.title} — ${link.label}`}
          >
            {link.label === 'Website' ? <Globe size={16} /> : <ExternalLink size={16} />}
            {link.label}
          </a>
        ))}
      </div>
    );
  }

  return (
    <div className="projects__links">
      {project.playStoreUrl && (
        <a
          href={project.playStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="projects__link"
          aria-label={`View ${project.title} on Google Play`}
        >
          <ExternalLink size={16} />
          Google Play
        </a>
      )}
      {project.githubUrl && (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="projects__link projects__link--muted"
          aria-label="View code"
        >
          <Github size={16} />
          Code
        </a>
      )}
      {!project.playStoreUrl && !project.githubUrl && (
        <span className="projects__link projects__link--muted">Private project</span>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <section className="section projects" id="projects">
      <div className="container">
        <SectionHeading
          label="Portfolio"
          title="Projects & Products"
          subtitle="25+ production web platforms and mobile apps — from SaaS and client sites to apps serving millions of users."
        />

        <div className="projects__grid">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className={`projects__card ${project.featured ? 'projects__card--featured' : ''}`}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
            >
              <div className={`projects__visual projects__visual--${(index % 4) + 1}`}>
                {project.type === 'web' ? (
                  <div className="projects__web-showcase">
                    <Globe size={40} />
                    <span>Live Website</span>
                  </div>
                ) : project.image ? (
                  <div className="projects__app-showcase">
                    <img
                      src={project.image}
                      alt={`${project.title} app icon`}
                      className="projects__app-icon"
                    />
                    {project.users && (
                      <div className="projects__stat-pill">
                        <Users size={14} />
                        {project.users} users
                      </div>
                    )}
                    {project.platforms && (
                      <div className="projects__stat-pill">
                        <Globe size={14} />
                        {project.platforms}
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="projects__app-showcase">
                    <div className="projects__phone">
                      <div className="projects__phone-notch" />
                      <div className="projects__phone-screen">
                        <Smartphone size={28} />
                      </div>
                    </div>
                    {project.platforms && (
                      <div className="projects__stat-pill">
                        <Globe size={14} />
                        {project.platforms}
                      </div>
                    )}
                  </div>
                )}
              </div>

              <div className="projects__body">
                <div className="projects__meta-row">
                  <span className="projects__category">{project.category}</span>
                  {project.status === 'in-progress' && (
                    <span className="projects__featured">Near Launch</span>
                  )}
                  {project.featured && <span className="projects__featured">Featured</span>}
                </div>
                <h3 className="projects__title">{project.title}</h3>
                {project.company && <p className="projects__company">{project.company}</p>}
                <p className="projects__description">{project.description}</p>

                {project.rating && (
                  <div className="projects__rating">
                    <Star size={14} fill="currentColor" />
                    <span>{project.rating} on Google Play</span>
                  </div>
                )}

                <div className="projects__tech">
                  {project.tech.map((t) => (
                    <span key={t} className="projects__tag">
                      {t}
                    </span>
                  ))}
                </div>

                <ProjectLinks project={project} />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
