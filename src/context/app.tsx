import { createContext, useMemo, useReducer } from "react";
import { Contact, Event, ActionsContext as IActionsContext } from "../types";

import contactsData from "../data/contacts.json";
import eventsData from "../data/events.json";
import { contactsReducer, eventsReducer } from "../reducer";
import { bindActionCreators } from "../utils";
import { contactActions, eventActions } from "../actions";

export const ActionsContext = createContext<
  IActionsContext | Record<string, (...args: unknown[]) => void>
>({});

export const ContactsContext = createContext<Contact[]>([]);
export const EventsContext = createContext<Event[]>([]);

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const [contacts, contactDispatch] = useReducer(contactsReducer, contactsData);
  const [events, eventDispatch] = useReducer(eventsReducer, eventsData);

  const actions = useMemo(
    () => ({
      ...bindActionCreators(contactActions, contactDispatch),
      ...bindActionCreators(eventActions, eventDispatch),
    }),
    [contactDispatch, eventDispatch]
  ) as unknown as IActionsContext;

  events.sort(
    (a, b) => new Date(a.eventDate).getTime() - new Date(b.eventDate).getTime()
  );

  return (
    <ActionsContext.Provider value={actions}>
      <ContactsContext.Provider value={contacts}>
        <EventsContext.Provider value={events}>
          {children}
        </EventsContext.Provider>
      </ContactsContext.Provider>
    </ActionsContext.Provider>
  );
};
