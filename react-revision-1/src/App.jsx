import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./components/Card"
import CardDynamic from "./components/CardDynamic"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Card/>
     <div className="container">
     <CardDynamic name="TEST" text="lorem ipsum" link="https://ssps.cz"/>
     <CardDynamic name="TEST2" text="lorem ipsum lorem ipsum" link="https://czc.cz"/>
     <CardDynamic name="TEST3" text="lorem ipsum lorem ipsum lorem ipsum" link="https://alza.cz"/>
     <CardDynamic name="TEST4" text="lorem ipsum lorem ipsum lorem ipsum lorem ipsum" link="https://mall.cz"/>
     </div>
    </>
  )
}

export default App
