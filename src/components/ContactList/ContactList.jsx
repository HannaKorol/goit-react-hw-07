import { useDispatch, useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contactsSlice";
import {  deleteContactsThunk } from "../../redux/contactsOps";

export default function ContactList() {
    const dispatch = useDispatch();

  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={s.list}>
      {filteredContacts.map((contact) => (
        <li className={s.item} key={contact.id}>
          <Contact
            name={contact.name}
            number={contact.number}
            onDelete={() =>
              dispatch(deleteContactsThunk(contact.id))
            } /* Передаємо id контакту для видалення */
          />
        </li>
      ))}
    </ul>
  );
}
