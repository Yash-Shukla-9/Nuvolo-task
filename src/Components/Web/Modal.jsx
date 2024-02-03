const Modal = ({ isOpen, message, closeModal }) => {
  return (
    <div>
      {isOpen && (
        <>
          <div className="flex gap-5 justify-center items-center">
            <h2 className="text-blue-500 text-2xl">{message}</h2>
            <div className="bg-red-500 text-white px-4 py-1 rounded">
              X <button onClick={closeModal}>Close</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Modal;
