import {createContext, useEffect, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

export const ContactContext = createContext()

const ContactContextProvider  = (props) => {

    const [Contacts, setContacts] = useState([
        {id:uuidv4(), name: 'Leo',lastname:"Messi",city:"Portland",country:"USA",email: 'leo@mail.com', address: '89 Chiaroscuro Rd, Portland, USA', phone: '(171) 555-2222'},
        {id:uuidv4(), name: 'Andres',lastname:"Iniesta",city:"Berlin",country:"Germany", email: 'iniesta@mail.com', address: 'Obere Str. 57, Berlin, Germany', phone: '(313) 555-5735'},
])

useEffect(()=> {
    setContacts(JSON.parse(localStorage.getItem('Contacts')))
},[])

useEffect(() => {
    localStorage.setItem('Contacts', JSON.stringify(Contacts));
})



//const sortedContacts = Contacts.sort((a,b)=>(a.name < b.name ? -1 : 1));



const addContact = (name,lastname, address,city,country,email, phone ) => {
    setContacts([...Contacts , {id:uuidv4(), name,lastname, address,city,country,email, phone }])
}

const deleteContact = (id) => {
    setContacts(Contacts.filter(Contact => Contact.id !== id))
}

const updateContact = (id, updatedContact) => {
    setContacts(Contacts.map((Contact) => Contact.id === id ? updatedContact : Contact))
}

    return (
        <ContactContext.Provider value={{Contacts, addContact, deleteContact, updateContact}}>
            {props.children}
        </ContactContext.Provider>
    )
}

export default ContactContextProvider;