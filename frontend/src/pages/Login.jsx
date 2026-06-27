import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Login({ darkMode, setDarkMode }) {
return (
<div
className={
darkMode
? "bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white min-h-screen"
: "bg-gradient-to-br from-blue-50 via-white to-indigo-50 text-gray-900 min-h-screen"
}
> <Navbar
     darkMode={darkMode}
     setDarkMode={setDarkMode}
   />

  <main className="min-h-[80vh] flex items-center justify-center px-6 py-12">

    <div
      className={
        darkMode
          ? "bg-gray-900 shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 rounded-3xl p-10 w-full max-w-md border border-gray-700"
          : "bg-white shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 rounded-3xl p-10 w-full max-w-md"
      }
    >

     <div className="flex justify-center mb-5">

  <div className="bg-blue-600 text-white text-3xl w-16 h-16 rounded-full flex items-center justify-center shadow-lg">

    🏨

  </div>

</div>

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
          🔑 Sign In
        </button>
        <div className="text-center mt-5">

  <span
    className={
      darkMode
        ? "text-gray-400"
        : "text-gray-500"
    }
  >
    Don't have an account?
  </span>

  <span className="text-blue-600 font-semibold ml-2 cursor-pointer hover:underline">

    Create Account

  </span>

</div>

      </form>

      <p
        className={
          darkMode
            ? "text-center text-sm text-gray-400 mt-6"
            : "text-center text-sm text-gray-500 mt-6"
        }
      >
        Demo Credentials

<br /><br />

Email:
demo@insightstay.com

<br />

Password:
password123

<br /><br />

Authentication functionality will be integrated in Week 5.
      </p>

    </div>

  </main>

  <Footer darkMode={darkMode} />
</div>


);
}

export default Login;
