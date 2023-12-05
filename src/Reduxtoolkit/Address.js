import { createSlice } from '@reduxjs/toolkit';
//import Data from '../components/Data';

const generateRandomId = () => {
  return Math.floor(Math.random() * 100000); // You can adjust the range as needed
};

const initialState = {
  contacts: [],
};

const contactsSlice = createSlice({
  name: 'address',
  initialState,
  reducers: {
    addContact: (state, action) => {
      const { street, city, states, zipcode } = action.payload;
      const newContact = {
        id: generateRandomId(), // Generate a random ID
        street,
        city,
        states,
        zipcode,
      };
      state.contacts.push(newContact);
    },
    
    editContact: (state, action) => {
      const { id, street, city, states, zipcode  } = action.payload;
      const userToUpdate = state.contacts.find(user => user.id === id);

      if (userToUpdate) {
        userToUpdate.street = street;
        userToUpdate.city = city;
        userToUpdate.states = states;
        userToUpdate.zipcode = zipcode;
      }
    },
     deleteContact: (state, action) => {
      const indexToRemove = state.contacts.findIndex((item) => item.id === action.payload);
      if (indexToRemove !== -1) {
        state.contacts.splice(indexToRemove, 1);
      }

      // Update remaining users' IDs
 
    },

 }, },
);

export const { addContact, editContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;


  





