import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "TSDebug",
    age: 21
  }
  let newArr = [1, 2, 3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      <Card username="Tanushree" btnText="Click Me" />
      <Card username="Isish" />
    </>
  )
}

{/* <figure className='*:md:flex bg-slate-100 rounded-xl p-8 md:p- dark:bg-slate-800'>
  <img className='w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto' src='.\image_css.webp' alt='' width='384' height='512'/>
  <div class='pt-6 md:p-8 text-center md:text-left space-y-4'>
    <blockquote>
      <p className='text-lg font-medium'>
        "Tailwind CSS is the only framework that I've seen scale on large teams. It's easy to customize, adapts to any design, and the build size is tiny."
      </p>
    </blockquote>
    <figcaption className='font-medium'>
      <div className='text-sky-500 dark:text-sky-400'>
        Tanushree Shaw
      </div>
      <div className='text-slate-700 dark:text-slate-500'>
        Full-stack developer
      </div>
    </figcaption>
  </div>
</figure> */}

export default App