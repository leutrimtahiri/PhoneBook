import { Form, Button } from "react-bootstrap"
import { ContactContext } from '../contexts/ContactContext';
import { useContext, useState } from 'react';

const EditForm = ({ theContact }) => {

    const id = theContact.id;

    const [name, setName] = useState(theContact.name);
    const [email, setEmail] = useState(theContact.email);
    const [address, setAddress] = useState(theContact.address);
    const [phone, setPhone] = useState(theContact.phone);
    const [lastname, setLastName] = useState(theContact.lastname);
    const [city, setCity] = useState(theContact.city);
    const [country, setCountry] = useState(theContact.country);

    const { updateContact } = useContext(ContactContext);

    const updatedContact = { id, name, email, address, phone, lastname, city, country }

    const handleSubmit = (e) => {
        e.preventDefault();
        updateContact(id, updatedContact)
    }

    return (

        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Name *"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Last Name"
                    name="name"
                    value={lastname}
                    onChange={(e) => setLastName(e.target.value)}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    as="textarea"
                    placeholder="Address"
                    name="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="City"
                    name="name"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Country"
                    name="name"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Email *"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Number"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
            </Form.Group>
            <Button variant="success" type="submit" block>
                Edit Contact
            </Button>
        </Form>

    )
}

export default EditForm;