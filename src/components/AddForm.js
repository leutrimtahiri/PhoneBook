import { Form, Button } from "react-bootstrap"
import { ContactContext } from '../contexts/ContactContext';
import { useContext, useState } from 'react';

const AddForm = () => {

    const { addContact } = useContext(ContactContext);

    const [newContact, setNewContact] = useState({
        name: "", lastname: "", address: "", city: "", country: "", emails: [{ email: "" }], phone: "",
    });

    const onInputChange = (e) => {
        setNewContact({ ...newContact, [e.target.name]: e.target.value })
    }

    const { name, lastname, address, city, country, emails, phone } = newContact;

    const handleSubmit = (e) => {
        e.preventDefault();
        addContact(name, lastname, address, city, country, emails.map(email => email.email).join(", "), phone,);
    }

    const addEmailInput = (e) => {
        setNewContact({
            ...newContact,
            emails: [...emails, { email: " " }],
        });
        e.preventDefault();
    }

    return (

        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Name *"
                    name="name"
                    value={name}
                    onChange={(e) => onInputChange(e)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Last Name "
                    name="lastname"
                    value={lastname}
                    onChange={(e) => onInputChange(e)}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Address"
                    name="address"
                    value={address}
                    onChange={(e) => onInputChange(e)}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="City"
                    name="city"
                    value={city}
                    onChange={(e) => onInputChange(e)}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Country"
                    name="country"
                    value={country}
                    onChange={(e) => onInputChange(e)}
                />
            </Form.Group>
            {emails.map((email, index) => (<Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Email "
                    name={`email-${index}`}
                    value={email.email}
                    onChange={
                        (e) => {
                            // update the email value in the emails array
                            const newEmails = [...emails];
                            newEmails[index].email = e.target.value;
                            setNewContact({ ...newContact, emails: newEmails })
                        }}
                />

            </Form.Group>))}
            <button className="addBtn" onClick={addEmailInput}>add</button>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Number"
                    name="phone"
                    value={phone}
                    onChange={(e) => onInputChange(e)}
                />
            </Form.Group>
            <Button type="submit" block>
                Save
            </Button>
        </Form>

    )
}

export default AddForm;