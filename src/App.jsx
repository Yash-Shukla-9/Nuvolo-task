import { useState } from "react";
import Modal from "./Components/Web/Modal";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isOpen, setOpen] = useState(false);

  const OnchangeValue = (e) => {
    const val = e.target.value;
    if (e.target.name === "email") {
      setEmail(val);
    } else if (e.target.name === "password") {
      setPassword(val);
    }
  };

  const OnHandleSubmit = (e) => {
    e.preventDefault();

    if (navigator.onLine) {
      console.log("form data is sumbimeted", email, password);
    } else {
      setOpen(true);
    }
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <>
      <h1 className="text-3xl text-red-600 flex justify-center mt-4">
        Online Internet Form
      </h1>
      <div className="min-h-screen flex items-center flex-col justify-center">
        <form
          onSubmit={OnHandleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96"
        >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email:
              <input
                type="email"
                name="email"
                value={email}
                onChange={OnchangeValue}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </label>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password:
              <input
                type="password"
                name="password"
                value={password}
                onChange={OnchangeValue}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </label>
          </div>

          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
        </form>

        {isOpen && (
          <Modal
            isOpen={isOpen}
            message={
              "There is No Internet Connection Please check the internet"
            }
            closeModal={closeModal}
          />
        )}
      </div>
    </>
  );
}

export default App;
