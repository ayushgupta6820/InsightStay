/**
 * Props:
 * message - notification message
 */

function Toast({ message, type = "success" }) {
  return (
    <div
      className={`fixed top-5 right-5 px-5 py-3 rounded-lg shadow-lg text-white z-50 ${
        type === "error"
          ? "bg-red-500"
          : "bg-green-500"
      }`}
    >
      {message}
    </div>
  );
}

export default Toast;