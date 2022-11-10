import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { HeaderTitle, Title } from './App.styled';

export function App() {
  return (
    <>
      <HeaderTitle>Phonebook</HeaderTitle>
      <ContactForm />
      <Title>Contacts</Title>
      <Filter />
      <ContactList />
    </>
  );
}
