function Modal({
  isOpen,
  title,
  message,
  onConfirm,
  onCancel,
  darkMode,
}) {

  if (!isOpen) return null;

  return (

    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

      <div
        className={
          darkMode
            ? "bg-gray-900 rounded-2xl p-6 w-[90%] max-w-md shadow-2xl border border-gray-700"
            : "bg-white rounded-2xl p-6 w-[90%] max-w-md shadow-2xl"
        }
      >

        <h2 className="text-2xl font-bold mb-4">
          {title}
        </h2>

        <p
          className={
            darkMode
              ? "text-gray-300 mb-6"
              : "text-gray-600 mb-6"
          }
        >
          {message}
        </p>

        <div className="flex justify-end gap-4">

          <button
            onClick={onCancel}
            className="px-5 py-2 rounded-lg bg-gray-500 hover:bg-gray-600 text-white"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="px-5 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white"
          >
            Delete
          </button>

        </div>

      </div>

    </div>

  );

}

export default Modal;