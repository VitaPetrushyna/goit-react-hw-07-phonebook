import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import { getContacts } from '../../redux/selectors';

import { useState } from 'react';
import { nanoid } from 'nanoid';
// import PropTypes from 'prop-types';
import { Form, AddBtn, InputData, LabelData } from './ContactForm.styled';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    const newElement = { id: nanoid(), name, number };

    const action = addContact(newElement);

    const findName = contacts.find(
      contact =>
        contact.name.toLowerCase() === action.payload.name.toLowerCase()
    );

    if (findName) {
      alert(`${action.payload.name} is already in your contacts list`, {
        autoClose: 1000,
      });
      reset();
      return;
    }

    dispatch(action);
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <LabelData>
        Name
        <InputData
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
      </LabelData>
      <LabelData>
        Number
        <InputData
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
        />
      </LabelData>
      <AddBtn type="submit">Add contact</AddBtn>
    </Form>
  );
}

// ContactForm.propTypes = {
//   addContact: PropTypes.func.isRequired,
// };
