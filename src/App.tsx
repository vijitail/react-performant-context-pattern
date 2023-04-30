import { Contacts } from "./components/Contacts";
import { Events } from "./components/Events";

export const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <h1 className="text-3xl font-bold underline mt-10">
        Single Context Example
      </h1>

      <div className="mt-[40px] flex">
        <div className="w-[60%]">
          <Events />
        </div>
        <div className="w-[40%]">
          <Contacts />
        </div>
      </div>
    </div>
  );
};
