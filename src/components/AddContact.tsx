import { useContext, useRef } from "react";
import { AppContext } from "../context/app";
import { Contact } from "../types";

export const AddContact = () => {
  const { addContact } = useContext(AppContext);

  const formRef = useRef<HTMLFormElement>(null);

  const handleAddContact = () => {
    const form = formRef.current as HTMLFormElement &
      Record<keyof Partial<Contact>, HTMLInputElement>;

    const contact = {
      name: form.name.value,
      email: form.email.value,
    };

    addContact(contact);
    formRef.current?.reset();
  };

  return (
    <div className="border rounded p-2">
      <form ref={formRef}>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Contact name"
            className="input input-bordered w-1/2 input-sm"
            name="name"
          />
          <input
            type="email"
            placeholder="Contact Email"
            className="input input-bordered w-1/2 input-sm"
            name="email"
          />
        </div>
        <button
          type="button"
          className="btn btn-neutral btn-xs mt-2"
          onClick={handleAddContact}
        >
          Add Contact
        </button>
      </form>
    </div>
  );
};
