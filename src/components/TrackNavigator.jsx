function TrackNavigator({ title, items, activeIndex, onSelect, eyebrowKey, titleKey, detailKey }) {
  return (
    <div className="track-layout">
      <div className="track-nav">
        <p className="track-title">{title}</p>
        <div className="track-pill-list">
          {items.map((item, index) => (
            <button
              key={`${item[titleKey]}-${index}`}
              className={index === activeIndex ? 'track-pill active' : 'track-pill'}
              onClick={() => onSelect(index)}
              type="button"
            >
              <span>{item[eyebrowKey]}</span>
              <strong>{item[titleKey]}</strong>
              <small>{item[detailKey]}</small>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TrackNavigator;
