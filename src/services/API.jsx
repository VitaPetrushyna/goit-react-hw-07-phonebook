// import axios from 'axios';

// const request = axios.create({
//   baseURL: 'https://636d18eb91576e19e31f8572.mockapi.io/contacts',
// });

// export const getContacts = async () => {
//   const response = await request.get('/');
//   return response.data;
// };

// export const addContacts = async data => {
//   const { data: result } = await request.post('/', data);
//   return result;
// };

// export const deleteContacts = async contactId => {
//   const response = await request.delete(`/${contactId}`);
//   return response.data.result;
// };

// const instance = axios.create({
//   baseURL: 'https://631e5ab49f946df7dc413d44.mockapi.io/contacts',
// });

// export const getContacts = async () => {
//   const { data } = await instance.get('/');

//   return data;
// };

// export const addContact = async data => {
//   const { data: result } = await instance.post('/', data);

//   return result;
// };

// export const removeContact = async id => {
//   const { data: result } = await instance.delete(`/${id}`);

//   return result;
// };
