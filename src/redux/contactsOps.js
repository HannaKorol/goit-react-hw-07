import axios from "axios";
/* import { addContact, deleteContact, fetchContactsSuccess, setLoading } from "./contactsSlice.js";
 */import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://671a855cacf9aa94f6aaf136.mockapi.io";


export const fetchContacts = createAsyncThunk('fetchData', async (_, thunkApi) => {
  try {
  const { data } = await axios.get('/Contacts');
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const deleteContactsThunk = createAsyncThunk('deleteContact', async (id, thunkApi) => {
  try {
    const { data } = await axios.delete(`/Contacts/${id}`);
    return data.id;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const addContactsThunk = createAsyncThunk('addContacts', async (body, thunkApi) => {
  try {
    const { data } = await axios.post('/Contacts',
      body);
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
})



/* export const fetchContacts = () => async (dispatch) => {
  dispatch(setLoading(true))
  const { data } = await axios.get('/Contacts');
  dispatch(setLoading(false))
  dispatch(
    fetchContactsSuccess(data)
  ); /* функція відала дані до action.payload in contactSlice
}; */

/* export const deleteContactsThunk = id => async (dispatch) => {
  const { data } = await axios.delete(`/Contacts/${id}`); /* функція відала дані до action.payload in contactSlice 
  dispatch(deleteContact(data.id));
}; */

/* export const addContactsThunk = (body) => async (dispatch) => {
  const { data } = await axios.post(
    `/Contacts`,
    body
  ); /* функція відала дані до action.payload in contactSlice 
  dispatch(addContact(data.id));
}; */
