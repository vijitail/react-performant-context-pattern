import {
  Action,
  Contact,
  ContactActionTypes,
  EventActionTypes,
  Event,
} from "./types";

export const contactsReducer = (
  state: Contact[],
  action: Action<ContactActionTypes>
): Contact[] => {
  switch (action.type) {
    case "ADD_CONTACT":
      action.payload.id = state.length + 1;
      return [...state, action.payload as unknown as Contact];
    case "DELETE_CONTACT": {
      const idx = state.findIndex((c) => c.id === action.payload.id);
      const updatedContacts = [...state.slice(0, idx), ...state.slice(idx + 1)];
      return updatedContacts;
    }
    default:
      return state;
  }
};

export const eventsReducer = (
  state: Event[],
  action: Action<EventActionTypes>
): Event[] => {
  switch (action.type) {
    case "CREATE_EVENT":
      action.payload.id = state.length + 1;
      return [...state, action.payload as unknown as Event];
    case "CANCEL_EVENT": {
      const idx = state.findIndex((c) => c.id === action.payload.id);
      const updatedEvents = [...state.slice(0, idx), ...state.slice(idx + 1)];
      return updatedEvents;
    }
    default:
      return state;
  }
};
