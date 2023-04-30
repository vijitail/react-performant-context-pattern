
export interface Contact {
    id?: number;
    name: string;
    email: string;
  }

export interface Event {
    id?: number;
    eventTitle: string;
    contactName: string;
    eventDate: string;
    eventTime: string;
  }

export interface AppContext {
    contacts: Contact[]
    events: Event[]
    cancelEvent: (id: number) => void;
    createEvent: (event: Event) => void;
    addContact: (contact: Contact) => void;
    deleteContact: (id: number) => void;
}

export type Action<T = unknown> = ({type: T, payload:Record<string,unknown>})

export type ActionCreatorsObject<T = unknown> = { [actionCreator: string]: (...args: never[]) => Action<T> };


export type EventActionTypes = 'CREATE_EVENT' | 'CANCEL_EVENT';
export type ContactActionTypes = 'ADD_CONTACT' | 'DELETE_CONTACT';