export default function SectionHeading({ label, title, subtitle, align = 'center' }) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      <span className="section-heading__label">{label}</span>
      <h2 className="section-heading__title">{title}</h2>
      {subtitle && <p className="section-heading__subtitle">{subtitle}</p>}
    </div>
  );
}
