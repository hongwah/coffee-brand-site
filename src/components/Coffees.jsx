import { useState } from 'react'
import { coffees, roastFilters } from '../content.js'
import Bag from './Bag.jsx'

function RoastMeter({ level, label }) {
  return (
    <div className="roast" role="img" aria-label={`烘焙度：${label}`}>
      {[1, 2, 3, 4, 5].map((step) => (
        <span key={step} className={step <= level ? 'roast-dot is-on' : 'roast-dot'} />
      ))}
      <span className="roast-label">{label}</span>
    </div>
  )
}

export default function Coffees() {
  const [filter, setFilter] = useState('all')
  const visible = coffees.filter((c) => filter === 'all' || c.group === filter)

  return (
    <section className="section" id="coffees">
      <div className="section-head">
        <div>
          <p className="eyebrow">The range</p>
          <h2>咖啡系列</h2>
        </div>
        <div className="chips" role="group" aria-label="按烘焙度筛选">
          {roastFilters.map((f) => (
            <button
              key={f.id}
              type="button"
              className="chip"
              aria-pressed={filter === f.id}
              onClick={() => setFilter(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <ul className="coffee-grid">
        {visible.map((coffee) => (
          <li key={coffee.id} className="coffee-card">
            <Bag coffee={coffee} />
            <h3>{coffee.name}</h3>
            <p className="coffee-origin">{coffee.origin} · {coffee.process}</p>
            <p className="coffee-notes">{coffee.notes.join(' / ')}</p>
            <RoastMeter level={coffee.roast} label={coffee.roastLabel} />
          </li>
        ))}
      </ul>
    </section>
  )
}
