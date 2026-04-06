function MetricRow({ items }) {
  return (
    <div className="metric-row">
      {items.map((item) => (
        <article className="summary-card metric-tile" key={item.label}>
          <strong>{item.value}</strong>
          <span>{item.label}</span>
        </article>
      ))}
    </div>
  );
}

export default MetricRow;
