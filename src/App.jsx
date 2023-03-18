/** 03/18/23 : CDMX/México.
 * @author  @AlexisTercero55
 * @github  https://github.com/AlexisTercero55
 * @mail    alexistercero55@gmail.com
 * @license MPL-2.0
 */
import { useState } from 'react'
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