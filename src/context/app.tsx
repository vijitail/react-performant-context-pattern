import { useMemo, useReducer } from "react";
import { AppContext as IAppContext } from "../types";
import { createContext } from "use-context-selector";
import contactsData from "../data/contacts.json";
import eventsData from "../data/events.json";
import { contactActions, eventActions } from "../actions";
import { contactsReducer, eventsReducer } from "../reducer";
import { bindActionCreators } from "../utils";

export const AppContext = createContext<
  IAppContext | Record<string, (...args: unknown[]) => void>
>({});

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
    []
  ) as Pick<
    IAppContext,
    "addContact" | "deleteContact" | "cancelEvent" | "createEvent"
  >;

  events.sort(
    (a, b) => new Date(a.eventDate).getTime() - new Date(b.eventDate).getTime()
  );

  return (
    <AppContext.Provider
      value={{
        contacts,
        events,
        ...actions,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
