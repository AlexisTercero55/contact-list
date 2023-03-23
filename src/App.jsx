/** 03/21/23 : CDMX/México.
 * @author  @AlexisTercero55
 * @github  https://github.com/AlexisTercero55
 * @mail    alexistercero55@gmail.com
 * @license MPL-2.0
 */
import { useState, useContext } from 'react';
import {  ProfileContext,
  ProfileActions } from './context/ProfileContext';
import './App.css'
import Container from 'react-bootstrap/Container';
import ContactList from './components/ContactList';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function App() {

  const [show, setShow] = useState(false);
  const [name, setname] = useState('');
  const [position, setPosition] = useState('');
  const [mail, setMail] = useState('');
  const [projectID, setprojectID] = useState('');
  const  [PROFILES, dispatch] = useContext(ProfileContext);
  const handleClose = (e) => {
    e?.preventDefault();
    if(e)
    {
      dispatch({
        type: ProfileActions.newProfile,
        payload: {
          name: name,
          position: position,
          email: mail,
          projectID: parseInt(projectID)
        }
      })

      setname('');
      setPosition('');
      setMail('');
      setprojectID('');

    }
    
    setShow(false);
  }
  const handleShow = () => setShow(true);

  return (
    <Container fluid >
    <main className="App">
      <header className='my-3'>
        <h1>Contact list</h1>
      </header>
      {/* new profile modal form */}
      <Button onClick={handleShow}>
        New contact
      </Button>
      
        <ContactList ></ContactList>
    </main>


    <Modal 
    centered
    show={show} 
    onHide={handleClose}
    >
      <Modal.Header closeButton>
        <Modal.Title>New contact info</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* New contact form */}
        <Form onSubmit={handleClose}>

          <Form.Group className="mb-3" controlId='name'>
            <Form.Label>Name</Form.Label>
            <Form.Control 
            value={name} onChange={(e)=>setname(e.target.value)}
            type="text" placeholder="Enter user name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId='position'>
            <Form.Label>Position</Form.Label>
            <Form.Control 
            value={position} onChange={(e)=>setPosition(e.target.value)}
            type="text" placeholder="Enter user role" />
          </Form.Group>
        
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
            value={mail} onChange={(e)=>setMail(e.target.value)}
            type="email" placeholder="Enter email"
             />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId='projectID'>
            <Form.Label>Project number</Form.Label>
            <Form.Control
            value={projectID} onChange={(e)=>setprojectID(e.target.value)}
            style={{width:'8em'}} 
            size='sm'
            type="number" placeholder={0} />
          </Form.Group>
          <Form.Group>
          {/* <Button variant="secondary" onClick={handleClose}>
          Cancel
          </Button> */}
          <Button variant="primary" 
                  type='submit'>
            Save contact
          </Button>
          </Form.Group>
        </Form>
        
        
      </Modal.Body>
      {/* <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save contact
        </Button>
      </Modal.Footer> */}
    </Modal>


    </Container>
  )
}

export default App