// Contact.jsx
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';
import { FaTrashAlt } from 'react-icons/fa';
import styles from './Contact.module.css';

function Contact({ id, name, emale, number, avatarUrl }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={styles.contactItem}>
      <img 
        src={avatarUrl || 'default-avatar.png'} 
        alt={`${name}'s avatar`} 
        className={styles.contactAvatar} 
      />
      <div className={styles.contactDetails}>
        <span className={styles.contactName}>{name}</span>
        <span className={styles.contactEmale}>{emale}</span>
        <span className={styles.contactNumber}>{number}</span>
      </div>
      <button onClick={handleDelete} className={styles.deleteButton}>
        <FaTrashAlt />
      </button>
    </div>
  );
}

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  emale: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string,
};

export default Contact;
