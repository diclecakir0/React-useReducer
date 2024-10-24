import { useState } from 'react'
import TodoState from './components/todoState'
import TodoReducer from './components/todoReducer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TodoReducer />
    </>
  )
}

export default App
