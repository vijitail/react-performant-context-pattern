
export interface Contact {
    id?: number;
    name: string;
    email: string;
  }

export  interface Event {
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