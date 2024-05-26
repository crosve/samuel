function Popup(props) {
  return props.trigger ? (
    <div className="fixed top-0 z-50 left-0 w-full h-screen bg-[rgba(0,0,0,0.2)] flex justify-center items-center">
      <div className="relative p-8 w-full max-w-xl bg-white">
        <button className="absolute top-4 right-4" onClick={props.onClose}>
          Close
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}

function ErrorMessage({ error, errorBool, setErrorBool }) {
  const closePopup = () => {
    setErrorBool(false);
  };
  return (
    <div>
      <Popup trigger={errorBool} onClose={closePopup}>
        <div className="text-center text-black flex flex-col justify-center items-center gap-4">
          {error}
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded z-50"
            onClick={closePopup}
          >
            Close
          </button>
        </div>
      </Popup>
    </div>
  );
}

export default ErrorMessage;
