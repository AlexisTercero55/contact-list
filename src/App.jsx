/** 03/18/23 : CDMX/México.
 * @author  @AlexisTercero55
 * @github  https://github.com/AlexisTercero55
 * @mail    alexistercero55@gmail.com
 * @license MPL-2.0
 */
import { useState, useContext  } from 'react';
import { ProfileContext } from './context/ProfileContext';
import './App.css'
import Container from 'react-bootstrap/Container';
import ContactList from './components/ContactList';

//! needs a module
export const ProfileData = (name='Alexis',
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
    ProfileData('Uri.Sab','alexistercero56@gmail.com',
                'https://bootdey.com/img/Content/avatar/avatar3.png',
                'Back end developer',150));
  const [Profile3, setProfile3] = useState(
    ProfileData('Juanito','alexistercero58@gmail.com',
                'https://bootdey.com/img/Content/avatar/avatar6.png',
                'Data engineer',111));


  const profiles = [{profile:Profile1, setData:setProfile1},
                    {profile:Profile2, setData:setProfile2},
                    {profile:Profile3, setData:setProfile3},
                  ]
  return (
    <main className="App">
      <header>
        <h1>Contact list</h1>
      </header>
      {/* <Container fluid  > */}
      <ProfileContext.Provider value={profiles}>
        <ContactList ></ContactList>{/*profiles={profiles}*/}
      </ProfileContext.Provider>
      {/* </Container> */}
    </main>
  )
}

export default App