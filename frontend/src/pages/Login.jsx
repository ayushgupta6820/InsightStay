import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Login({ darkMode, setDarkMode }) {
return (
<div
className={
darkMode
? "bg-gray-950 text-white min-h-screen"
: "bg-gray-50 text-gray-900 min-h-screen"
}
> <Navbar
     darkMode={darkMode}
     setDarkMode={setDarkMode}
   />

  <main className="min-h-[80vh] flex items-center justify-center px-6 py-12">

    <div
      className={
        darkMode
          ? "bg-gray-900 shadow-2xl rounded-3xl p-10 w-full max-w-md border border-gray-700"
          : "bg-white shadow-2xl rounded-3xl p-10 w-full max-w-md"
      }
    >

      <h1 className="text-4xl font-bold text-center mb-3">
        Welcome Back
      </h1>

      <p
        className={
          darkMode
            ? "text-center text-gray-400 mb-8"
            : "text-center text-gray-500 mb-8"
        }
      >
        Sign in to access your dashboard
      </p>

      <form className="space-y-5">

        <input
          type="email"
          placeholder="Email Address"
          className={
            darkMode
              ? "w-full bg-gray-800 border border-gray-700 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              : "w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          }
        />

        <input
          type="password"
          placeholder="Password"
          className={
            darkMode
              ? "w-full bg-gray-800 border border-gray-700 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              : "w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          }
        />

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-2">
            <input type="checkbox" />

            <label
              className={
                darkMode
                  ? "text-sm text-gray-300"
                  : "text-sm text-gray-600"
              }
            >
              Remember Me
            </label>
          </div>

          <span className="text-sm text-blue-600 cursor-pointer hover:underline">
            Forgot Password?
          </span>

        </div>

        <button
          type="button"
          className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
        >
          Sign In
        </button>

      </form>

      <p
        className={
          darkMode
            ? "text-center text-sm text-gray-400 mt-6"
            : "text-center text-sm text-gray-500 mt-6"
        }
      >
        Authentication functionality will be integrated
        in future versions.
      </p>

    </div>

  </main>

  <Footer darkMode={darkMode} />
</div>


);
}

export default Login;
