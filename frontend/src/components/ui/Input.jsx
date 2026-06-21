/**
 * Props:
 * placeholder - placeholder text
 */

function Input({ placeholder }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="border border-gray-300 p-2 rounded w-full"
    />
  );
}

export default Input;