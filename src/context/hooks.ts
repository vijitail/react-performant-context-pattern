import { useContext } from "react";
import { ContactsContext, EventsContext, ActionsContext } from "./app";


export const useUpdates = () => useContext(ActionsContext)
export const useContacts = () => useContext(ContactsContext)
export const useEvents = () => useContext(EventsContext)