import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
import Container from 'react-bootstrap/Container';
import Contact from './components/Contact';

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="App">
      <header>
        <h1>Contact list</h1>
      </header>
      <Container fluid >
        <Contact></Contact>
      </Container>
    </main>
  )
}

export default App