import React from "react";
import { Item, List } from "./ContactList.styled";
import PropTypes from 'prop-types';


const ContactList = ({contacts, onClick}) => {
 return <List>
    {contacts.map(contact => (
    <Item key={contact.id}><p>{contact.name} : {contact.number}</p>
    <button type="button" onClick={() => onClick(contact)}>Delete</button></Item>
    ))}
  </List>
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default ContactList