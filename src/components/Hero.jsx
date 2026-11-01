import { coffees, hero } from '../content.js'
import Bag from './Bag.jsx'

export default function Hero() {
  const [back, front] = [coffees[0], coffees[1]]

  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <p className="eyebrow">{hero.eyebrow}</p>
        <h1>
          {hero.titleLines.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h1>
        <p className="hero-body">{hero.body}</p>
        <a className="button" href="#coffees">{hero.cta}</a>
      </div>
      <div className="hero-bags">
        <Bag coffee={back} className="hero-bag-back" />
        <Bag coffee={front} className="hero-bag-front" />
      </div>
    </section>
  )
}
