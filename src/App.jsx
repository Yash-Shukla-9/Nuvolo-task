import { Network } from "@capacitor/network";

import { useEffect, useState } from "react";
import Modal from "./Components/Web/Modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MobileModal from "./Components/Mobile/Modal.Mobile";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isOpen, setOpen] = useState(false);
  const [isOnline, setOnline] = useState(true);

  console.log("show", isOnline);

  useEffect(() => {
    const handleNetworkChange = (status) => {
      setOnline(status?.connected);
    };

    const CheckNetwork = async () => {
      const status = await Network.getStatus();
      handleNetworkChange(status);
    };

    CheckNetwork();

    const networkListener = Network.addListener(
      "networkStatusChange",
      handleNetworkChange
    );

    return () => {
      networkListener.remove();
    };
  }, []);

  const CurrentNetworkStatus = () => {
    console.log("network", isOnline);

    if (!isOnline) {
      console.log("show data modal no internet");
    }
  };

  const OnchangeValue = (e) => {
    const val = e.target.value;
    if (e.target.name === "email") {
      setEmail(val);
    } else if (e.target.name === "password") {
      setPassword(val);
    }
  };

  const toastify = () => {
    toast("Form Submitted ");
  };

  const OnHandleSubmit = (e) => {
    e.preventDefault();

    if (navigator.onLine) {
      toastify();
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
        Online Internet Form {isOnline}
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
              onClick={CurrentNetworkStatus}
            >
              Submit
            </button>
          </div>
        </form>
        <ToastContainer
          position="top-right"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover
          theme="light"
          transition:Bounce
        />

        {isOpen && (
          <Modal
            isOpen={isOpen}
            message={
              "There is No Internet Connection Please check the internet"
            }
            closeModal={closeModal}
          />
        )}

        {/* {isOnline === false && <MobileModal />} */}
      </div>
    </>
  );
}

export default App;
