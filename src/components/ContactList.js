import { Modal, Button } from 'react-bootstrap';
import { useContext, useEffect, useState } from 'react';
import { ContactContext } from '../contexts/ContactContext';
import Contact from './Contact';
import AddForm from './AddForm';


const ContactList = () => {

    const { Contacts } = useContext(ContactContext);

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);


    useEffect(() => {
        handleClose();
    }, [Contacts])


    return (
        <>
            <div className="table-title">
                <div className="row">
                    <div className="col-sm-6">
                        <h2><b>Contacts</b></h2>
                    </div>
                    <div className="col-sm-6">
                        <Button onClick={handleShow} > <span>Add Contact</span></Button>
                    </div>
                </div>
            </div>

            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Last Name</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>Country</th>
                        <th>Email</th>
                        <th>Number</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Contacts.map(contact => (
                            <tr key={contact.id}>
                                <Contact contact={contact} />
                            </tr>
                        ))
                    }
                </tbody>
            </table>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Add Contact
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddForm />
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

export default ContactList;