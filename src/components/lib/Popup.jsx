export default function Popup(props) {
  return props.trigger ? (
    <div className="fixed top-0 left-0 w-full h-screen bg-[rgba(0,0,0,0.2)] flex justify-center items-center">
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
