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

const ContactList = ({profiles}) => {
  // console.log(profiles[0].profile);
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
   avatarUrl={profiles[0].profile.imgProfileSrc}
   name={profiles[0].profile.name}
   email={profiles[0].profile.email}
   position={profiles[0].profile.position}
  >
  
  </ProfileListItem>
  <ProfileListItem
   avatarUrl={profiles[1].profile.imgProfileSrc}
   name={profiles[1].profile.name}
   email={profiles[1].profile.email}
   position={profiles[1].profile.position}>
  
  </ProfileListItem>
  <ProfileListItem
   avatarUrl={'https://bootdey.com/img/Content/avatar/avatar3.png'}
   name={'Uri.Sab'}
   position={'Web Developer'}>
  
  </ProfileListItem>
</tbody>
</Table>
</Col>
</Row>
    );
}

export default ContactList;
