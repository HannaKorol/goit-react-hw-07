//reducer: addContact
//reducer: deleteContact
// export default function SelectContacts

import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { addContactsThunk, deleteContactsThunk, fetchContacts } from "./contactsOps";

const slice = createSlice({
  name: "contacts",
  initialState: {
    items: [
      /*       { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" }, */
    ],
    loading: false,
    error: null,
    filters: {
      name: "",
    },
  },
  selectors: {
    selectContacts: (state) => state.items,
  },
  /* reducers: {
    fetchContactsSuccess: (state, action) => {
      state.items = action.payload;
      state.loading = false;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  }, */
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(deleteContactsThunk.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
      })
      .addCase(addContactsThunk.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      /*       .addCase(fetchContacts.pending, (state, action) => {
        state.loading = true;
      }); */


      //AddMtcher- використовуються для однотипних завдань і не можуть бути серед addCase, тільки в кінці після них
      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          deleteContactsThunk.pending,
          addContactsThunk.pending
        ),
        (state, action) => {
          state.loading = true;
          /*           state.error = action.payload; */
        }
      ) //Використовується для однотипних операцій
      .addMatcher(
        isAnyOf(
          fetchContacts.fulfilled,
          deleteContactsThunk.fulfilled,
          addContactsThunk.fulfilled
        ),
        (state, action) => {
          state.loading = false;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          deleteContactsThunk.rejected,
          addContactsThunk.rejected
        ),
        (state, action) => {
          state.loading = false;
          state.error = action.payload;
        }
      );
  },
});

/* export const { addContact, deleteContact, fetchContactsSuccess, setError, setLoading } = slice.actions; */
/* export const { selectContacts } = slice.selectors;
 */export const contactsReducer = slice.reducer;

export const selectContacts = state => state.contacts.items;
export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;