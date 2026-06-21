import { Link } from "react-router-dom";

function Navbar({ darkMode, setDarkMode }) {
return (
<nav
className={
darkMode
? "bg-gray-900 shadow-lg border-b border-gray-700"
: "bg-white shadow-md"
}
> <div className="max-w-6xl mx-auto px-6 py-4"> <div className="flex flex-col md:flex-row items-center justify-between gap-4">


      {/* Logo */}
      <Link to="/">
        <h1 className="text-2xl font-bold text-blue-600">
          InsightStay
        </h1>
      </Link>

      {/* Navigation */}
      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">

        <Link
          to="/"
          className={
            darkMode
              ? "font-medium text-gray-200 hover:text-blue-400"
              : "font-medium text-gray-700 hover:text-blue-600"
          }
        >
          Home
        </Link>

        <Link
          to="/about"
          className={
            darkMode
              ? "font-medium text-gray-200 hover:text-blue-400"
              : "font-medium text-gray-700 hover:text-blue-600"
          }
        >
          About
        </Link>

        <Link
          to="/dashboard"
          className={
            darkMode
              ? "font-medium text-gray-200 hover:text-blue-400"
              : "font-medium text-gray-700 hover:text-blue-600"
          }
        >
          Dashboard
        </Link>

        <Link
          to="/login"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Login
        </Link>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className={
            darkMode
              ? "bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
              : "bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300"
          }
        >
          {darkMode ? "☀ Light" : "🌙 Dark"}
        </button>

      </div>
    </div>
  </div>
</nav>


);
}

export default Navbar;
