import {
  ActionCreatorsObject,
  Contact,
  ContactActionTypes,
  EventActionTypes,
} from "./types";

export const eventActions: ActionCreatorsObject<EventActionTypes> = {
  cancelEvent: (id: number) => ({
    type: "CANCEL_EVENT",
    payload: { id },
  }),
  createEvent: (event: Event) => ({
    type: "CREATE_EVENT",
    payload: { event },
  }),
};

export const contactActions: ActionCreatorsObject<ContactActionTypes> = {
  deleteContact: (id: number) => ({ type: "DELETE_CONTACT", payload: { id } }),
  addContact: (contact: Contact) => ({
    type: "ADD_CONTACT",
    payload: { contact },
  }),
};
