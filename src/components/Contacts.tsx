import { useContext } from "react";
import { AppContext } from "../context/app";
import { AddContact } from "./AddContact";

export const Contacts = () => {
  const { contacts, deleteContact } = useContext(AppContext);

  return (
    <div className="m-2 p-2 text-sm">
      <AddContact />

      {!!contacts?.length && (
        <div className="overflow-x-auto mt-4">
          <table className="table table-compact w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <tr key={contact.id}>
                  <td>
                    <button
                      className="btn btn-error btn-xs"
                      onClick={() => deleteContact(contact.id as number)}
                    >
                      Delete
                    </button>
                  </td>
                  <td>{contact.name}</td>
                  <td>{contact.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
