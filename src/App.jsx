import { MotionConfig } from 'framer-motion'
import Background from './components/Background'
import ScrollProgress from './components/ScrollProgress'
import SidebarNav from './components/SidebarNav'
import MobileNav from './components/MobileNav'
import Hero from './components/Hero'
import Projects from './components/Projects'
import TechStack from './components/TechStack'
import Achievements from './components/Achievements'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a href="#main" className="skip-link">Skip to content</a>
      <Background />
      <ScrollProgress />
      <SidebarNav />
      <MobileNav />
      <main id="main">
        <Hero />
        <Projects />
        <TechStack />
        <Achievements />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  )
}
