import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';

// import PropTypes from 'prop-types';
import { ListContacts, ContactsItem, DeleteBtn } from './ContactList.styled';

export default function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleDeleteContact = deleteId => {
    const action = deleteContact(deleteId);
    dispatch(action);
  };

  const filtredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContactList = filtredContacts();

  return (
    <ListContacts>
      {filteredContactList.map(({ name, number, id }) => (
        <ContactsItem key={id}>
          {name + ' : ' + number}
          {
            <DeleteBtn
              type="button"
              name="delete"
              onClick={() => handleDeleteContact(id)}
            >
              Delete
            </DeleteBtn>
          }
        </ContactsItem>
      ))}
    </ListContacts>
  );
}

// ContactList.propTypes = {
//   onDeleteContact: PropTypes.func.isRequired,
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     }).isRequired
//   ).isRequired,
// };

// export default ContactList;
