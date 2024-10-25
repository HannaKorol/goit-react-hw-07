import axios from "axios";
import { fetchContactsSuccess } from "./contactsSlice.js";

axios.defaults.baseURL = "https://671a855cacf9aa94f6aaf136.mockapi.io";

export const fetchContacts = () => async (dispatch) => {
  const { data } = await axios.get('/Contacts');
  dispatch(
    fetchContactsSuccess(data)
  ); /* функція відала дані до action.payload in contactSlice */
};

export const deleteContactsThunk = id => async (dispatch) => {
  const { data } = await axios.delete(`/Contacts/${id}`); /* функція відала дані до action.payload in contactSlice */
};
