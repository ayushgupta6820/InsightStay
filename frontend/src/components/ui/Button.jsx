/**
 * Props:
 * text - text displayed on button
 * onClick - function executed when clicked
 */

function Button({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
    >
      {text}
    </button>
  );
}

export default Button;