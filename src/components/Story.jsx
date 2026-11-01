import { story } from '../content.js'

const phases = [
  { x: 105, label: '脱水' },
  { x: 285, label: '美拉德反应' },
  { x: 430, label: '焦糖化' },
  { x: 540, label: '发展' },
]

function RoastCurve() {
  return (
    <figure className="curve">
      <svg viewBox="0 0 640 300" role="img" aria-label="烘焙曲线示意图：豆温先下降，再随脱水、美拉德反应、焦糖化和发展阶段逐渐放缓上升。">
        <g className="curve-grid">
          <line x1="190" y1="20" x2="190" y2="262" />
          <line x1="380" y1="20" x2="380" y2="262" />
          <line x1="480" y1="20" x2="480" y2="262" />
          <line x1="20" y1="262" x2="620" y2="262" />
        </g>
        <path className="curve-line" d="M20 90 C50 250 90 262 130 240 C240 190 380 110 600 62" />
        <circle className="curve-dot" cx="600" cy="62" r="6" />
        <g className="curve-labels" textAnchor="middle">
          {phases.map((p) => (
            <text key={p.label} x={p.x} y="286">{p.label}</text>
          ))}
        </g>
      </svg>
      <figcaption>{story.curveCaption}</figcaption>
    </figure>
  )
}

export default function Story() {
  return (
    <section className="story" id="story">
      <div className="story-inner">
        <div>
          <p className="eyebrow">Our story</p>
          <h2>{story.title}</h2>
          <p className="story-body">{story.body}</p>
        </div>
        <RoastCurve />
        <ul className="principles">
          {story.principles.map((p) => (
            <li key={p.title}>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
