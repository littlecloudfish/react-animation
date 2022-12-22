import {useState} from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

function FormExample() {
    const [validated, setValidated] = useState(false);
  
    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };}
const Register = () => {
    
    return(
        <>
            <Form.Label style={{color:'white'}}>Your Name</Form.Label>
            <InputGroup className="mb-3">
            <InputGroup.Text>First and Last name</InputGroup.Text>
            <Form.Control aria-label="First name" />
            <Form.Control aria-label="Last name" />
            </InputGroup>
            
            <Row className="g-2">
            <Col md>
                <Form.Label style={{color:'white'}}>Email Address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
                
            </Col>
            <Col md>
                <Form.Label style={{color:'white'}}>Phone Number</Form.Label>
                <Form.Control type="text" placeholder="number" />
            </Col>
            </Row>
            
            <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustom03">
                <Form.Label style={{color:'white'}}>City</Form.Label>
                <Form.Control type="text" placeholder="City" required />
                <Form.Control.Feedback type="invalid">
                    Please provide a valid city.
                </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationCustom04">
                <Form.Label style={{color:'white'}}>Province</Form.Label>
                <Form.Control type="text" placeholder="Province" required />
                <Form.Control.Feedback type="invalid">
                    Please provide a valid state.
                </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationCustom05">
                <Form.Label style={{color:'white'}}>Zip Code</Form.Label>
                <Form.Control type="text" placeholder="Zip" required />
                <Form.Control.Feedback type="invalid">
                    Please provide a valid zip.
                </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Form.Label style={{color:'white'}}>Address Detail</Form.Label>
            <Form.Control type="email" placeholder="Rue / Appartment Number" />
            <Form.Label style={{color:'white'}}>Leave a comment</Form.Label>
            <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: '100px' }}
            />
            <Form.Group className="mb-3">
                <Form.Check
                required
                label="Agree to terms and conditions"
                feedback="You must agree before submitting."
                feedbackType="invalid"
                style={{color:'white'}}
                />
            </Form.Group>
            <Button type="submit">Submit form</Button>
        </>

    )
}

export default Register;