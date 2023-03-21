/** 03/21/23 : CDMX/México.
 * @author  @AlexisTercero55
 * @github  https://github.com/AlexisTercero55
 * @mail    alexistercero55@gmail.com
 * @license MPL-2.0
 */
import { createContext, useReducer } from 'react';
const ProfileData = (
  name='Alexis',
  email='alexistercero55@gmail.com',
  imgProfileSrc = 'https://bootdey.com/img/Content/avatar/avatar1.png',
  position = 'Full Stack Developer',
  projectID = 105) =>{
  return {
    name,
    email,
    imgProfileSrc,
    position,
    projectID
  }
}

export const ProfileActions = {
  changeProject : 'Profile/Project'
}
export const InitialState = [
    ProfileData(),
    ProfileData('Uri.Sab','alexistercero56@gmail.com',
                'https://bootdey.com/img/Content/avatar/avatar3.png',
                'Back end developer',150),
    ProfileData('Juanito','alexistercero58@gmail.com',
    'https://bootdey.com/img/Content/avatar/avatar6.png',
    'Data engineer',111)
];

export const ProfileReducer = (state=ProfileData(),action)=>{
  //const { type, payload } = action;
  switch(action.type)
  {
    case ProfileActions.changeProject:
      const index = action.index;
      const newState = [...state]; // create a copy of the state array
      const selectedProfile = newState[index]; // get the selected profile object
      const updatedProfile = { ...selectedProfile, projectID: selectedProfile.projectID + 1 }; // create a new object with the updated projectID property
      newState[index] = updatedProfile; // replace the selected object with the updated object
      return newState; // return the updated state array

    default:
      return state;
  }
}

//Create the context.          default value
export const ProfileContext = createContext(ProfileData());
export const ProfileContextProvider = ({children})=>{

  const [state, dispatch] = useReducer(ProfileReducer, InitialState)

  return (
    <ProfileContext.Provider value={[state, dispatch]}>
      {children}
    </ProfileContext.Provider>
  )
}