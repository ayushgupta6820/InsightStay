/**
 * Props:
 * title - modal heading
 */

function Modal({ title }) {
  return (
    <div className="border rounded p-4 shadow-md bg-white">
      <h2 className="font-bold text-lg">{title}</h2>
      <p>This is a sample modal.</p>
    </div>
  );
}

export default Modal;