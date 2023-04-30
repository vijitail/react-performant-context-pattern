import { useContext } from "react";
import { AppContext } from "../context/app";
import { CreateEvent } from "./CreateEvent";

export const Events = () => {
  const { events, cancelEvent } = useContext(AppContext);

  return (
    <div className="m-2 p-2 text-sm">
      <CreateEvent />

      <div className="overflow-x-auto mt-4">
        {!!events?.length && (
          <table className="table table-compact w-full">
            <thead>
              <tr>
                <th></th>
                <th>Event Title</th>
                <th>Contact Name</th>
                <th>Event Date</th>
                <th>Event Time</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event) => (
                <tr key={event.id}>
                  <td>
                    <button
                      className="btn btn-error btn-xs"
                      onClick={() => cancelEvent(event.id as number)}
                    >
                      Cancel
                    </button>
                  </td>
                  <td>{event.eventTitle}</td>
                  <td>{event.contactName}</td>
                  <td>{event.eventDate}</td>
                  <td>{event.eventTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};