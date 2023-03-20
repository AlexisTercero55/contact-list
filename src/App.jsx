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

const ProfileData = (name='Alexis Tercero',
                    email='alexistercero55@gmail.com',
                    imgProfileSrc = 'https://bootdey.com/img/Content/avatar/avatar1.png',
                    position = 'Full Stack Developer',
                    projectID = 105)=>
{
  return {
    name,
    email,
    imgProfileSrc,
    position,
    projectID
  }
}

function App() {
  const [count, setCount] = useState(0)
  const [Profile1, setProfile1] = useState(ProfileData());
  const [Profile2, setProfile2] = useState(
    ProfileData('uwu','alexistercero55@gmail.com',
                'https://bootdey.com/img/Content/avatar/avatar3.png',
                'Back end developer'));


  const profiles = [{profile:Profile1, setData:setProfile1},
                    {profile:Profile2, setData:setProfile2}
                  ]
  return (
    <main className="App">
      <header>
        <h1>Contact list</h1>
      </header>
      {/* <Container fluid  > */}
        <ContactList profiles={profiles} ></ContactList>
      {/* </Container> */}
    </main>
  )
}

export default App