import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="App">

      <div className='logos'>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>

      <div className='URI'>Templete by Alexis Tercero</div>

    </main>
  )
}

export default App