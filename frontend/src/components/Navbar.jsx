import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Navbar({ darkMode, setDarkMode }) {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login", { replace: true });
  };

  return (
    <nav
      className={
        darkMode
          ? "bg-gray-900 shadow-lg border-b border-gray-700"
          : "bg-white shadow-md"
      }
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

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

            {/* NEW AI REVIEW PAGE */}

            <Link
              to="/ai-review"
              className={
                darkMode
                  ? "font-medium text-gray-200 hover:text-blue-400"
                  : "font-medium text-gray-700 hover:text-blue-600"
              }
            >
               AI Review
            </Link>

            <Link
  to="/explore"
  className={
    darkMode
      ? "font-medium text-gray-200 hover:text-blue-400"
      : "font-medium text-gray-700 hover:text-blue-600"
  }
>
  Explore Reviews
</Link>

            {token ? (
              <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
              >
                Login
              </Link>
            )}

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