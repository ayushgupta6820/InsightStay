import { Link } from "react-router-dom";

function Hero({ darkMode }) {
return (
<section
className={
darkMode
? "bg-gradient-to-r from-gray-900 via-gray-950 to-black py-24"
: "bg-gradient-to-r from-blue-50 via-white to-indigo-50 py-24"
}
> <div className="max-w-6xl mx-auto px-6">


    <div className="text-center">

      <span
        className={
          darkMode
            ? "inline-block px-4 py-2 rounded-full bg-blue-900 text-blue-300 text-sm font-medium mb-6"
            : "inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6"
        }
      >
        AI-Powered Hospitality Intelligence
      </span>

      <h1
        className={
          darkMode
            ? "text-5xl md:text-6xl font-bold text-white leading-tight"
            : "text-5xl md:text-6xl font-bold text-gray-900 leading-tight"
        }
      >
        Transform Guest Reviews Into
        <span className="text-blue-600">
          {" "}Actionable Insights
        </span>
      </h1>

      <p
        className={
          darkMode
            ? "mt-6 text-lg text-gray-300 max-w-3xl mx-auto"
            : "mt-6 text-lg text-gray-600 max-w-3xl mx-auto"
        }
      >
        Analyze customer sentiment, uncover hidden trends,
        identify service gaps, and generate AI-powered
        responses that help hospitality businesses improve
        guest satisfaction.
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-4">

        <Link to="/dashboard">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition shadow-lg">
            Explore Dashboard
          </button>
        </Link>

        <Link to="/about">
          <button
            className={
              darkMode
                ? "border border-gray-600 text-gray-200 px-8 py-3 rounded-xl hover:bg-gray-800 transition"
                : "border border-blue-600 text-blue-600 px-8 py-3 rounded-xl hover:bg-blue-50 transition"
            }
          >
            Learn More
          </button>
        </Link>

      </div>

    </div>

    <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">

      <div
        className={
          darkMode
            ? "bg-gray-800 rounded-2xl p-6 shadow-lg"
            : "bg-white rounded-2xl p-6 shadow-lg"
        }
      >
        <h3 className="text-xl font-semibold mb-2">
          Sentiment Analysis
        </h3>

        <p
          className={
            darkMode
              ? "text-gray-300"
              : "text-gray-600"
          }
        >
          Automatically classify guest reviews into
          positive, neutral, and negative categories.
        </p>
      </div>

      <div
        className={
          darkMode
            ? "bg-gray-800 rounded-2xl p-6 shadow-lg"
            : "bg-white rounded-2xl p-6 shadow-lg"
        }
      >
        <h3 className="text-xl font-semibold mb-2">
          Theme Detection
        </h3>

        <p
          className={
            darkMode
              ? "text-gray-300"
              : "text-gray-600"
          }
        >
          Discover trends related to cleanliness,
          service, food quality, and location.
        </p>
      </div>

      <div
        className={
          darkMode
            ? "bg-gray-800 rounded-2xl p-6 shadow-lg"
            : "bg-white rounded-2xl p-6 shadow-lg"
        }
      >
        <h3 className="text-xl font-semibold mb-2">
          AI Responses
        </h3>

        <p
          className={
            darkMode
              ? "text-gray-300"
              : "text-gray-600"
          }
        >
          Generate professional responses to guest
          feedback using AI assistance.
        </p>
      </div>

    </div>

  </div>
</section>

);
}

export default Hero;
