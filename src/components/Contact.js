import { useContext, useState, useEffect } from 'react';
import { ContactContext } from '../contexts/ContactContext';
import { Modal, Button } from 'react-bootstrap';
import EditForm from './EditForm'



const Contact = ({ contact }) => {

    const { deleteContact } = useContext(ContactContext)

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    useEffect(() => {
        handleClose()
    }, [contact])

    return (
        <>
            <td>{contact.name}</td>
            <td>{contact.lastname}</td>
            <td>{contact.address}</td>
            <td>{contact.city}</td>
            <td>{contact.country}</td>
            <td>{contact.email}</td>
            <td>{contact.phone}</td>
            <td>
                <button onClick={handleShow} className="editBtn" data-toggle="modal">Edit</button>
            </td>
            <td>
                <button onClick={() => deleteContact(contact.id)} className="deleteBtn" data-toggle="modal">Delete</button>
            </td>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Edit Contact
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditForm theContact={contact} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close Button
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Contact;