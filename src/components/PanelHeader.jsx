function PanelHeader({ eyebrow, title, meta }) {
  return (
    <div className="panel-header">
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h3>{title}</h3>
      </div>
      {meta ? <div className="panel-meta">{meta}</div> : null}
    </div>
  );
}

export default PanelHeader;
