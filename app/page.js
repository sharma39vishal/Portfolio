import About from './components/About'
import Achivement from './components/Achivement'
import Education from './components/Education'
import Expriences from './components/Expriences'
import Gallary from './components/Gallary'
import Myphoto from './components/Myphoto'
import Skills from './components/Skills'

export default function Home() {
  return (
    <div className='flex justify-center items-center flex-col h-full w-full'>
      <Myphoto/>
        <About/>
        <Skills/>
        <Achivement/>
        <Expriences/>
        <Education/>
        <Gallary/>
    </div>  
    )
}
