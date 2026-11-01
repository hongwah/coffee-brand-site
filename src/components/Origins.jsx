import { origins } from '../content.js'

export default function Origins() {
  return (
    <section className="section" id="origins">
      <div className="section-head">
        <div>
          <p className="eyebrow">Where it grows</p>
          <h2>产地</h2>
        </div>
      </div>

      <ul className="origin-list">
        {origins.map((o) => (
          <li key={o.region} className="origin-row">
            <h3>{o.region}</h3>
            <p className="origin-country">{o.country}</p>
            <p>{o.altitude}</p>
            <p>{o.flavor}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
