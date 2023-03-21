/** 03/18/23 : CDMX/México.
 * @author  @AlexisTercero55
 * @github  https://github.com/AlexisTercero55
 * @mail    alexistercero55@gmail.com
 * @license MPL-2.0
 */
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

import '../css/darkTable.css';
import ProfileListItem from './ProfileListItem';
import { useContext  } from 'react';
import { ProfileContext } from '../context/ProfileContext';


const ContactList = () => {
  const PROFILES = useContext(ProfileContext);
  console.log(PROFILES);
return (
<Row >
<Col>
<Table className='table1'
      responsive 
      hover size="sm"
      >
<thead>
  <tr>
    <th scope="col" className="ps-4" >
      <div className="form-check font-size-16">
        <input type="checkbox" className="form-check-input" id="contacusercheck" />
        <label className="form-check-label" htmlFor="contacusercheck"></label>
      </div>
    </th>
    <th scope="col">Name</th>
    <th scope="col">Position</th>
    <th scope="col">Email</th>
    <th scope="col">Projects</th>
    <th scope="col">Action</th>
  </tr>
</thead>
<tbody className='Profile-List-row'>
  <ProfileListItem
   avatarUrl={PROFILES[0].profile.imgProfileSrc}
   name={PROFILES[0].profile.name}
   email={PROFILES[0].profile.email}
   position={PROFILES[0].profile.position}
   projectID={PROFILES[0].profile.projectID}
  >
  
  </ProfileListItem>
  <ProfileListItem
   avatarUrl={PROFILES[1].profile.imgProfileSrc}
   name={PROFILES[1].profile.name}
   email={PROFILES[1].profile.email}
   position={PROFILES[1].profile.position}
   projectID={PROFILES[1].profile.projectID}
   >
  
  </ProfileListItem>
  <ProfileListItem
   avatarUrl={PROFILES[2].profile.imgProfileSrc}
   name={PROFILES[2].profile.name}
   email={PROFILES[2].profile.email}
   position={PROFILES[2].profile.position}
   projectID={PROFILES[2].profile.projectID}>
  
  </ProfileListItem>
</tbody>
</Table>
</Col>
</Row>
    );
}

export default ContactList;
