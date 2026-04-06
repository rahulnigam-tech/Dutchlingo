function FocusCard({ eyebrow, title, body, tone = 'warm' }) {
  return (
    <article className={tone === 'dark' ? 'selection-card focus-card dark' : 'selection-card focus-card'}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <p>{body}</p>
    </article>
  );
}

export default FocusCard;
