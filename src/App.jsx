/** 03/21/23 : CDMX/México.
 * @author  @AlexisTercero55
 * @github  https://github.com/AlexisTercero55
 * @mail    alexistercero55@gmail.com
 * @license MPL-2.0
 */
import { useState, useContext  } from 'react';
import { ProfileContextProvider } from './context/ProfileContext';
import './App.css'
// import Container from 'react-bootstrap/Container';
import ContactList from './components/ContactList';

function App() {
  return (
    <main className="App">
      <header>
        <h1>Contact list</h1>
      </header>
      {/* <Container fluid  > */}
      <ProfileContextProvider>
        <ContactList ></ContactList>
      </ProfileContextProvider>
      {/* </Container> */}
    </main>
  )
}

export default App