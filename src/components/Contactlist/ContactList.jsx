// ContactList.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contactsSlice';
import Contact from '../Contact/Contact'; 
import styles from './ContactList.module.css';

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <div className={styles.contactGrid}>
      {filteredContacts.map((contact) => (
        <Contact
          key={contact.id}
          id={contact.id}
          name={contact.name}
          emale={contact.emale}
          number={contact.number}
          avatarUrl={contact.avatarUrl}
        />
      ))}
    </div>
  );
};

export default ContactList;
