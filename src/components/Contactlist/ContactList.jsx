// ContactList.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';
import { selectFilteredContacts } from '../../redux/contactsSlice';
import { FaTrashAlt } from 'react-icons/fa';
import styles from './ContactList.module.css';

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  return (
    <div className={styles.contactGrid}>
      {filteredContacts.map((contact) => (
        <div key={contact.id} className={styles.contactItem}>
          <img 
            src={contact.avatarUrl || 'default-avatar.png'} 
            alt={`${contact.name}'s avatar`} 
            className={styles.contactAvatar} 
          />
          <div className={styles.contactDetails}>
            <span className={styles.contactName}>{contact.name}</span>
            <span className={styles.contactEmale}>{contact.emale}</span>
            <span className={styles.contactNumber}>{contact.number}</span>
          </div>
          <button 
            className={styles.deleteButton}
            onClick={() => dispatch(deleteContact(contact.id))}
          >
            <FaTrashAlt />
          </button>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
