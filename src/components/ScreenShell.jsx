function ScreenShell({ eyebrow, title, copy, children }) {
  return (
    <section className="screen-card fade-in">
      <span className="eyebrow">{eyebrow}</span>
      <h1>{title}</h1>
      {copy ? <p className="screen-copy">{copy}</p> : null}
      <div className="screen-stack">{children}</div>
    </section>
  );
}

export default ScreenShell;
