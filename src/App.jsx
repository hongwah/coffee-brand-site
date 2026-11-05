import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Coffees from './components/Coffees.jsx'
import BrewGuide from './components/BrewGuide.jsx'
import Origins from './components/Origins.jsx'
import Story from './components/Story.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  return (
    <>
      <p className="concept-bar">
        这是概念作品，品牌和产品均为虚构。
        <a href={import.meta.env.BASE_URL}>返回 Lai Hong Wah 的作品集</a>
      </p>
      <Header />
      <main>
        <Hero />
        <Coffees />
        <BrewGuide />
        <Origins />
        <Story />
        <Contact />
      </main>
    </>
  )
}
