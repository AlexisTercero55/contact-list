/** 03/21/23 : CDMX/México.
 * @author  @AlexisTercero55
 * @github  https://github.com/AlexisTercero55
 * @mail    alexistercero55@gmail.com
 * @license MPL-2.0
 */
import { useContext } from 'react';
import { ProfileContext, 
         ProfileActions,
         } from '../context/ProfileContext';
import Image from 'react-bootstrap/Image';
import Badge from 'react-bootstrap/Badge';
import { Button, Dropdown, DropdownButton } from 'react-bootstrap';
import { BsFillPenFill, BsTrash, BsThreeDotsVertical } from 'react-icons/bs';

/** //! needs typed support
 * ProfileListItem is just a view of 
 * Profile interface (any contact)
 * {
 *  name,
 *  email,
 *  attributes...
 *  
 * }
 */
const ProfileListItem = ({
  index,
  avatarUrl,
  name,
  position = 'Full Stack Developer',
  email = 'alexistercero55@gmail.com',
  projectID = 100
}) => {

  // console.log(index);
  const  [PROFILES, dispatch] = useContext(ProfileContext);



  
    return (
<tr className='ProfileRow'>
    <th scope="row" className="ps-4">
        <div className="form-check my-2">
          <input type="checkbox" 
            className="form-check-input" 
            id="contacusercheck1" />
          <label className="form-check-label" 
                htmlFor="contacusercheck1">
          </label>
        </div>
    </th>
    <td className='image-profileName'>
      <div className='
        d-flex 
        align-items-center
        px-2 my-2'>
        <Image roundedCircle
        src={avatarUrl}
        width="25px"
        className='me-2'
        ></Image>
        <span >
          {name}
        </span>
      </div>
    </td>
    <td className='role'>
    <div className='d-flex 
        align-items-center 
        my-2
        px-2
        '>
      <Badge bg="light" className='badge-soft-success'>
        {position}
      </Badge>
    </div>
    </td>
    <td className='mail'>
    <div className='d-flex 
        align-items-center 
        my-2 px-2
        '>
        {email}
    </div>
    </td>
    <td className='project-number'>
    <div className='d-flex 
        align-items-center 
        justify-content-center
        my-2
        '>
        {projectID}
      </div>
    </td>
    <td className='profile-options'>
    <ul className="list-inline mb-0 d-flex flex-row">
      <li className="list-inline-item">
        <Button variant="link" //needs onclick action
                data-bs-toggle="tooltip" 
                data-bs-placement="top" 
                title="Edit" 
                className="text-primary"
                onClick={()=> dispatch({type:ProfileActions.changeProject, index})}>
          <BsFillPenFill size={18} />
        </Button>
      </li>
      <li className="list-inline-item">
        <Button variant="link" //needs onclick action
                data-bs-toggle="tooltip" 
                data-bs-placement="top" 
                title="Delete" 
                className="text-danger">
          <BsTrash size={18} />
        </Button>
      </li>
      <li className="list-inline-item dropdown">
        <DropdownButton id="dropdown-basic-button" 
          title={<BsThreeDotsVertical size={18} />} 
          variant="link" 
          className="font-size-18 "
          drop="down">
          <Dropdown.Item href="#"//needs onclick action
          >Action</Dropdown.Item>
          <Dropdown.Item href="#">Another action</Dropdown.Item>
          <Dropdown.Item href="#">Something else here</Dropdown.Item>
        </DropdownButton>
      </li>
    </ul>
    </td> 
</tr>
    );
}

export default ProfileListItem;
{/* <tr className='ProfileRow-Component'>
    <th scope="row" className="ps-4">
        <div className="form-check my-2">
          <input type="checkbox" 
            className="form-check-input" 
            id="contacusercheck1" />
          <label className="form-check-label" 
                htmlFor="contacusercheck1">
          </label>
        </div>
    </th>
    <td className='image-profile'>
      <div className='
        d-flex 
        align-items-center
        px-2 my-2'>
        <Image roundedCircle
        src='https://bootdey.com/img/Content/avatar/avatar1.png'
        width="25px"
        className='me-2'
        ></Image>
        <span >
          Simon Ryles
        </span>
      </div>
    </td>
    <td className='role'>
    <div className='d-flex 
        align-items-center 
        my-2
        px-2
        '>
      <Badge bg="light" className='badge-soft-success'>
        Full Stack Developer
      </Badge>
    </div>
    </td>
    <td className='mail'>
    <div className='d-flex 
        align-items-center 
        my-2 px-2
        '>
        SimonRyles@minible.com
    </div>
    </td>
    <td className='project-number'>
    <div className='d-flex 
        align-items-center 
        justify-content-center
        my-2
        '>
        125
      </div>
    </td>
    <td className='profile-options'>
    <ul className="list-inline mb-0">
      <li className="list-inline-item">
        <Button variant="link" 
                data-bs-toggle="tooltip" 
                data-bs-placement="top" 
                title="Edit" 
                className="text-primary">
          <BsFillPenFill size={18} />
        </Button>
      </li>
      <li className="list-inline-item">
        <Button variant="link" 
                data-bs-toggle="tooltip" 
                data-bs-placement="top" 
                title="Delete" 
                className="text-danger">
          <BsTrash size={18} />
        </Button>
      </li>
      <li className="list-inline-item dropdown">
        <DropdownButton id="dropdown-basic-button" 
          title={<BsThreeDotsVertical size={18} />} 
          variant="link" 
          className="font-size-18 "
          drop="down">
          <Dropdown.Item href="#">Action</Dropdown.Item>
          <Dropdown.Item href="#">Another action</Dropdown.Item>
          <Dropdown.Item href="#">Something else here</Dropdown.Item>
        </DropdownButton>
      </li>
    </ul>
    </td> 
</tr> */}