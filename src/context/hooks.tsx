import { useContextSelector } from "use-context-selector";
import { AppContext } from "./app";
import { Contact, Event } from "../types";

export const useActions = () => {
  const addContact = useContextSelector(
    AppContext,
    (value) => value.addContact
  );
  const deleteContact = useContextSelector(
    AppContext,
    (value) => value.deleteContact
  );
  const cancelEvent = useContextSelector(
    AppContext,
    (value) => value.cancelEvent
  );
  const createEvent = useContextSelector(
    AppContext,
    (value) => value.createEvent
  );

  return { addContact, deleteContact, cancelEvent, createEvent };
};
export const useContacts = () =>
  useContextSelector(AppContext, (value) => value.contacts) as Contact[];
export const useEvents = () =>
  useContextSelector(AppContext, (value) => value.events) as Event[];
