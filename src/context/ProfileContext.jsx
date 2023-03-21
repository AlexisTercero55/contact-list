import { createContext } from 'react';
const ProfileData = (name='Alexis',
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
                                            // default value
export const ProfileContext = createContext(ProfileData());