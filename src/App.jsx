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
