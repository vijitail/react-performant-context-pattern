import { createContext, useState } from "react";
import { Contact, Event, AppContext as IAppContext } from "../types";

import contactsData from "../data/contacts.json";
import eventsData from "../data/events.json";

export const AppContext = createContext<IAppContext | Record<string, never>>(
  {}
);

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const [contacts, setContacts] = useState<Contact[]>(contactsData);
  const [events, setEvents] = useState<Event[]>(eventsData);

  const deleteContact = (id: number) => {
    const idx = contacts.findIndex((c) => c.id === id);
    const updatedContacts = [
      ...contacts.slice(0, idx),
      ...contacts.slice(idx + 1),
    ];
    setContacts(updatedContacts);
  };

  const cancelEvent = (id: number) => {
    const idx = events.findIndex((c) => c.id === id);
    const updatedEvents = [...events.slice(0, idx), ...events.slice(idx + 1)];
    setEvents(updatedEvents);
  };

  const addContact = (contact: Contact) => {
    contact.id = contacts.length + 1;
    setContacts([...contacts, contact]);
  };

  const createEvent = (event: Event) => {
    event.id = events.length + 1;
    setEvents([...events, event]);
  };

  events.sort(
    (a, b) => new Date(a.eventDate).getTime() - new Date(b.eventDate).getTime()
  );

  return (
    <AppContext.Provider
      value={{
        contacts,
        events,
        cancelEvent,
        deleteContact,
        createEvent,
        addContact,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
