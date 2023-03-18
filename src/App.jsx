import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
import Container from 'react-bootstrap/Container';
import ContactList from './components/ContactList';

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="App">
      <header>
        <h1>Contact list</h1>
      </header>
      {/* <Container fluid  > */}
        <ContactList ></ContactList>
      {/* </Container> */}
    </main>
  )
}

export default App