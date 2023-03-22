/** 03/21/23 : CDMX/México.
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
  const  [PROFILES, dispatch] = useContext(ProfileContext);
  // console.log(PROFILES);
return (
<Row >
<Col>
<Table className='table1'
       responsive
       hover
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
  {PROFILES.map((user, index) => (
    <ProfileListItem
      key={index}
      index={index}
      avatarUrl={user?.imgProfileSrc}
      name={user?.name}
      email={user?.email}
      position={user?.position}
      projectID={user?.projectID}
    />
  ))}
</tbody>
</Table>
</Col>
</Row>
    );
}

export default ContactList;
