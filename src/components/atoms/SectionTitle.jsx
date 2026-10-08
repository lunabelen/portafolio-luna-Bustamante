function SectionTitle({ children, subtitle, centered = false }) {
  return (
    <div className={`section-title ${centered ? 'text-center' : ''}`}>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
      <h2>{children}</h2>
    </div>
  );
}

export default SectionTitle;
