/** 03/21/23 : CDMX/México.
 * @author  @AlexisTercero55
 * @github  https://github.com/AlexisTercero55
 * @mail    alexistercero55@gmail.com
 * @license MPL-2.0
 */
import { createContext, useReducer } from 'react';
/**
 * ## Factory funtion for ProfileData
 */
const ProfileData = (
  name='Alexis',
  email='alexistercero55@gmail.com',
  imgProfileSrc = 'https://bootdey.com/img/Content/avatar/avatar1.png',
  position = 'Full Stack Developer',
  projectID = 105,
  isConnected = false) =>{
  return {
    name,
    email,
    imgProfileSrc,
    position,
    projectID,
    isConnected
  }
}

export const ProfileActions = {
  changeProject : 'Profile/Project',
  deleteProfile : 'Profile/Delete',//!FIXME | Done | needs a user confirm to delete profile
  newProfile    : 'Profile/newProfile',
  updateConnection:'Profile/updateConnection'
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

export const ProfileReducer = (state=[ProfileData()],
                               action) => 
{      
  const { type, payload } = action;
  let newState;
  let selectedProfile;
  let updatedProfile ;
  switch(type)
  {
    case ProfileActions.changeProject:
      newState = [...state]; // create a copy of the state array
      selectedProfile = newState[action.index]; // get the selected profile object
      updatedProfile = { ...selectedProfile, projectID: selectedProfile.projectID + 1 }; // create a new object with the updated projectID property
      newState.splice(action.index, 1, updatedProfile); // replace the selected object with the updated object using splice()
      return newState; // return the updated state array

    case ProfileActions.deleteProfile:
      // console.log('To delete profile: ', action.index);
      newState = [...state]; // make a copy of the state array
      newState.splice(action.index, 1); // remove the object at the specified index
      return newState;

    case ProfileActions.updateConnection:
      newState = [...state]; // make a copy of the state array
      selectedProfile = newState[payload.index]; // get the selected profile object
      updatedProfile = { ...selectedProfile, isConnected: payload.isConneted }; // create a new object with the updated projectID property
      newState.splice(payload.index, 1, updatedProfile); // replace the selected object with the updated object using splice()
      return newState; // return the updated state array

    case ProfileActions.newProfile:
      newState = [...state,ProfileData(
        payload.name,
        payload.email,
        'https://bootdey.com/img/Content/avatar/avatar4.png',
        payload.position,
        payload.projectID
      )]
      return newState;

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