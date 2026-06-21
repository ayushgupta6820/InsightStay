import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Dashboard({ darkMode, setDarkMode }) {
return (
<div
className={
darkMode
? "bg-gray-950 text-white min-h-screen"
: "bg-gray-100 text-gray-900 min-h-screen"
}
> <Navbar
     darkMode={darkMode}
     setDarkMode={setDarkMode}
   />


  <main className="max-w-6xl mx-auto px-6 py-12">

    <div className="mb-10">
      <h1 className="text-4xl font-bold">
        Dashboard
      </h1>

      <p
        className={
          darkMode
            ? "mt-2 text-gray-400"
            : "mt-2 text-gray-500"
        }
      >
        Guest Review Analytics Overview
      </p>
    </div>

    {/* Stats Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">

      <div
        className={
          darkMode
            ? "bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700"
            : "bg-white rounded-xl p-6 shadow"
        }
      >
        <h3 className="text-gray-500">
          Total Reviews
        </h3>

        <p className="text-3xl font-bold mt-2">
          5,240
        </p>
      </div>

      <div
        className={
          darkMode
            ? "bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700"
            : "bg-white rounded-xl p-6 shadow"
        }
      >
        <h3 className="text-gray-500">
          Positive
        </h3>

        <p className="text-3xl font-bold text-green-500 mt-2">
          85%
        </p>
      </div>

      <div
        className={
          darkMode
            ? "bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700"
            : "bg-white rounded-xl p-6 shadow"
        }
      >
        <h3 className="text-gray-500">
          Neutral
        </h3>

        <p className="text-3xl font-bold text-yellow-500 mt-2">
          10%
        </p>
      </div>

      <div
        className={
          darkMode
            ? "bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700"
            : "bg-white rounded-xl p-6 shadow"
        }
      >
        <h3 className="text-gray-500">
          Negative
        </h3>

        <p className="text-3xl font-bold text-red-500 mt-2">
          5%
        </p>
      </div>

    </div>

    {/* Sentiment Distribution */}
    <div
      className={
        darkMode
          ? "bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700 mb-8"
          : "bg-white rounded-xl p-6 shadow mb-8"
      }
    >

      <h2 className="text-2xl font-semibold mb-6">
        Sentiment Distribution
      </h2>

      <div className="space-y-5">

        <div>
          <div className="flex justify-between mb-2">
            <span>Positive Reviews</span>
            <span>85%</span>
          </div>

          <div className="w-full bg-gray-300 rounded-full h-3">
            <div className="bg-green-500 h-3 rounded-full w-[85%]"></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <span>Neutral Reviews</span>
            <span>10%</span>
          </div>

          <div className="w-full bg-gray-300 rounded-full h-3">
            <div className="bg-yellow-500 h-3 rounded-full w-[10%]"></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <span>Negative Reviews</span>
            <span>5%</span>
          </div>

          <div className="w-full bg-gray-300 rounded-full h-3">
            <div className="bg-red-500 h-3 rounded-full w-[5%]"></div>
          </div>
        </div>

      </div>

    </div>

    {/* Recent Feedback */}
    <div
      className={
        darkMode
          ? "bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700"
          : "bg-white rounded-xl p-6 shadow"
      }
    >

      <h2 className="text-2xl font-semibold mb-4">
        Recent Feedback
      </h2>

      <div className="space-y-4">

        <div className="border-b border-gray-600 pb-3">
          ⭐ Great hospitality and exceptionally clean rooms.
        </div>

        <div className="border-b border-gray-600 pb-3">
          🍽 Excellent food quality and friendly staff.
        </div>

        <div>
          🌄 Beautiful location with amazing mountain views.
        </div>

      </div>

    </div>

  </main>

  <Footer darkMode={darkMode} />
</div>


);
}

export default Dashboard;
