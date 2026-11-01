import { useState } from 'react'
import { brewMethods } from '../content.js'

export default function BrewGuide() {
  const [methodId, setMethodId] = useState(brewMethods[0].id)
  const [servings, setServings] = useState(1)

  const method = brewMethods.find((m) => m.id === methodId)
  const coffeeGrams = method.dose * servings
  const liquid = coffeeGrams * method.ratio

  return (
    <section className="section brew" id="brew">
      <div className="section-head">
        <div>
          <p className="eyebrow">Brew guide</p>
          <h2>冲煮指南</h2>
        </div>
        <div className="chips" role="group" aria-label="选择冲煮方式">
          {brewMethods.map((m) => (
            <button
              key={m.id}
              type="button"
              className="chip"
              aria-pressed={methodId === m.id}
              onClick={() => setMethodId(m.id)}
            >
              {m.name}
            </button>
          ))}
        </div>
      </div>

      <div className="brew-panel">
        <div className="brew-calc">
          <label className="brew-servings" htmlFor="servings">
            <span>份数</span>
            <output htmlFor="servings">{servings}</output>
          </label>
          <input
            id="servings"
            type="range"
            min="1"
            max="4"
            value={servings}
            onChange={(e) => setServings(Number(e.target.value))}
          />

          <dl className="brew-numbers">
            <div>
              <dt>咖啡粉</dt>
              <dd>{coffeeGrams}<small>g</small></dd>
            </div>
            <div>
              <dt>{method.liquidLabel}</dt>
              <dd>{liquid}<small>{method.liquidUnit}</small></dd>
            </div>
          </dl>

          <dl className="brew-specs">
            <div><dt>比例</dt><dd>1 : {method.ratio}</dd></div>
            <div><dt>水温</dt><dd>{method.temp}</dd></div>
            <div><dt>研磨</dt><dd>{method.grind}</dd></div>
            <div><dt>时间</dt><dd>{method.time}</dd></div>
          </dl>
        </div>

        <ol className="brew-steps">
          {method.steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </div>
    </section>
  )
}
