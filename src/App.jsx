import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/notas.png'
import './App.css'
import { TodoList } from './todolist'

export function App() {
  const [count, setCount] = useState(0)

  return (  
   <TodoList/>
  )
}

export default App
