import About from '@/app/components/About'
import Contact from '@/app/components/Contact'
import Experience from '@/app/components/Experience'
import Intro from '@/app/components/Intro'
import Projects from '@/app/components/Projects'
import SectionDivider from '@/app/components/SectionDivider'
import Skills from '@/app/components/Skills'

export default function TheWelcome() {

  return (
     <>
         <Intro />
         <SectionDivider />
         <About />
         <Projects />
         <Skills />
         <Experience />
         <Contact />
     </>
  );
}
