import { useRef, useState } from "react";
import { Event } from "../types";
import { useContacts, useActions } from "../context/hooks";

export const CreateEvent = () => {
  const contacts = useContacts();
  const { createEvent } = useActions();

  const [isCreateModalOpen, setCreateModalOpen] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = () => {
    const form = formRef.current as HTMLFormElement &
      Record<keyof Partial<Event>, HTMLInputElement>;

    const event: Event = {
      eventTitle: form?.eventTitle?.value,
      eventDate: form?.eventDate?.value,
      eventTime: form?.eventTime?.value,
      contactName: form?.contactName?.value,
    };
    createEvent(event);
    closeModal();
  };

  const closeModal = () => {
    formRef.current?.reset();
    setCreateModalOpen(false);
  };

  return (
    <>
      <button
        className="btn btn-primary btn-sm"
        onClick={() => setCreateModalOpen(true)}
      >
        Create Event
      </button>
      <div className={`modal ${isCreateModalOpen ? "modal-open" : ""}`}>
        <div className="modal-box">
          <form ref={formRef}>
            <h3 className="font-bold text-lg">Create Event</h3>
            <div className="flex mt-4 flex-col">
              <div className="w-full">
                <input
                  type="text"
                  placeholder="Event Title"
                  className="input input-bordered w-full"
                  name="eventTitle"
                />
              </div>
              <div className="w-full mt-4">
                <select
                  className="select select-bordered w-full"
                  name="contactName"
                  defaultValue=""
                >
                  <option disabled>Contact Name</option>

                  {contacts.map((contact) => (
                    <option value={contact.name} key={contact.id}>
                      {contact.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="w-full flex gap-2 mt-4">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Event Date"
                    className="input input-bordered w-full"
                    name="eventDate"
                  />
                </div>
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Event Time"
                    className="input input-bordered w-full"
                    name="eventTime"
                  />
                </div>
              </div>
            </div>
            <div className="modal-action">
              <button
                className="btn btn-primary"
                onClick={handleSubmit}
                type="button"
              >
                Create
              </button>
              <button onClick={closeModal} type="button" className="btn">
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
