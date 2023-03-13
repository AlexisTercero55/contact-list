// import React from 'react';
import '../css/Contact.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { MdContactMail } from "react-icons/md";
import {BsFillTelephoneInboundFill} from 'react-icons/bs';

const Contact = () => {
    return (
<Row>
<Col>
<Card>
    <Card.Body>
        <Row>
            <Col xs={6}>
                <Card.Img 
                    src="https://bootdey.com/img/Content/avatar/avatar7.png"
                    alt="Avatar"
                    className="img-fluid rounded-circle"
                ></Card.Img>
            </Col>
            <Col 
                xs={6}
                className="align-self-center"
            >
                <Card.Title>Emma A. Main</Card.Title>
                <Card.Text>Graphics Designer</Card.Text>
            </Col>
        </Row>
    </Card.Body>
    <ListGroup variant="flush">
        <ListGroup.Item className="d-flex 
                        align-items-center 
                        justify-content-between
                        ">
            <span>Email : <a  href="#">PaulGoyette@gmail.com</a></span>
            <MdContactMail 
                size={24}
                color='#72D5C0' 
            />
        </ListGroup.Item>
        <ListGroup.Item className="d-flex 
                        align-items-center 
                        justify-content-between
                        ">
            <span > Phone : 000 123-456</span>
            <BsFillTelephoneInboundFill 
                size={24}
                color='#72D5C0'
            />
        </ListGroup.Item>
    </ListGroup >
    {/* <Card.Body>
        <div className="float-right btn-group btn-group-sm">
            <a href="#" className="btn btn-primary tooltips" data-placement="top" data-toggle="tooltip" data-original-title="Edit"><i className="fa fa-pencil"></i> </a>
            <a href="#" className="btn btn-secondary tooltips" data-placement="top" data-toggle="tooltip" data-original-title="Delete"><i className="fa fa-times"></i></a>
        </div>
        <ul className="social-links list-inline mb-0">
            <li className="list-inline-item"><a title="" data-placement="top" data-toggle="tooltip" className="tooltips" href="" data-original-title="Facebook"><i className="fa fa-facebook-f"></i></a></li>
            <li className="list-inline-item"><a title="" data-placement="top" data-toggle="tooltip" className="tooltips" href="" data-original-title="Twitter"><i className="fa fa-twitter"></i></a></li>
            <li className="list-inline-item"><a title="" data-placement="top" data-toggle="tooltip" className="tooltips" href="" data-original-title="Skype"><i className="fa fa-skype"></i></a></li>
        </ul>
    </Card.Body> */}
</Card>
</Col>
</Row>
    );
}

export default Contact;
