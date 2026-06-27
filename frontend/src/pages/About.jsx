import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About({ darkMode, setDarkMode }) {
return (
<div
className={
darkMode
? "bg-gray-950 text-white min-h-screen"
: "bg-white text-gray-900 min-h-screen"
}
> <Navbar
     darkMode={darkMode}
     setDarkMode={setDarkMode}
   />


  <main className="max-w-6xl mx-auto px-6 py-16">

    <div className="text-center mb-16">

      <h1
        className={
          darkMode
            ? "text-5xl font-bold text-white"
            : "text-5xl font-bold text-gray-900"
        }
      >
        About InsightStay
      </h1>

      <p
        className={
          darkMode
            ? "mt-6 text-lg text-gray-300 max-w-3xl mx-auto"
            : "mt-6 text-lg text-gray-600 max-w-3xl mx-auto"
        }
      >
        InsightStay helps hospitality businesses transform guest
        feedback into meaningful insights using Artificial
        Intelligence, enabling smarter decisions and improved
        customer experiences.
      </p>

    </div>

    <div className="grid md:grid-cols-3 gap-8">

      <div
        className={
          darkMode
            ? "bg-gray-800 shadow-lg rounded-2xl p-8 border border-gray-700"
            : "bg-white shadow-lg rounded-2xl p-8"
        }
      >
        <h2 className="text-2xl font-bold mb-4 text-blue-600">
          Our Mission
        </h2>

        <p
          className={
            darkMode
              ? "text-gray-300"
              : "text-gray-600"
          }
        >
          Empower hospitality businesses to make data-driven
          decisions through intelligent analysis of guest reviews.
        </p>
      </div>

      <div
        className={
          darkMode
            ? "bg-gray-800 shadow-lg rounded-2xl p-8 border border-gray-700"
            : "bg-white shadow-lg rounded-2xl p-8"
        }
      >
        <h2 className="text-2xl font-bold mb-4 text-green-600">
          Why InsightStay?
        </h2>

        <p
          className={
            darkMode
              ? "text-gray-300"
              : "text-gray-600"
          }
        >
          Manual review analysis is time-consuming. InsightStay
          automates sentiment detection, theme extraction and
          trend discovery to save valuable time.
        </p>
      </div>

      <div
        className={
          darkMode
            ? "bg-gray-800 shadow-lg rounded-2xl p-8 border border-gray-700"
            : "bg-white shadow-lg rounded-2xl p-8"
        }
      >
        <h2 className="text-2xl font-bold mb-4 text-purple-600">
          Who Benefits?
        </h2>

        <p
          className={
            darkMode
              ? "text-gray-300"
              : "text-gray-600"
          }
        >
          Hotels, resorts, homestays and tourism businesses
          seeking to improve guest satisfaction, loyalty and
          overall service quality.
        </p>
      </div>

    </div>
          {/* Why Choose InsightStay */}

<section className="mt-20">

  <h2 className="text-4xl font-bold text-center mb-12">
    Why Choose InsightStay?
  </h2>

  <div className="grid md:grid-cols-2 gap-8">

    <div
      className={
        darkMode
          ? "bg-gray-800 rounded-2xl p-8 border border-gray-700"
          : "bg-gray-50 rounded-2xl p-8 shadow"
      }
    >

      <h3 className="text-2xl font-bold text-blue-600 mb-4">
        🚀 AI Powered Analytics
      </h3>

      <p
        className={
          darkMode
            ? "text-gray-300 leading-7"
            : "text-gray-600 leading-7"
        }
      >
        Transform thousands of guest reviews into meaningful
        insights within seconds using AI-powered sentiment
        analysis and intelligent review classification.
      </p>

    </div>

    <div
      className={
        darkMode
          ? "bg-gray-800 rounded-2xl p-8 border border-gray-700"
          : "bg-gray-50 rounded-2xl p-8 shadow"
      }
    >

      <h3 className="text-2xl font-bold text-green-600 mb-4">
        📊 Actionable Reports
      </h3>

      <p
        className={
          darkMode
            ? "text-gray-300 leading-7"
            : "text-gray-600 leading-7"
        }
      >
        Understand customer satisfaction trends through
        interactive dashboards, sentiment scores and
        AI-generated recommendations.
      </p>

    </div>

  </div>

</section>



{/* Call To Action */}

<section className="mt-24 text-center">

  <h2 className="text-4xl font-bold mb-6">
    Ready to Transform Guest Feedback?
  </h2>

  <p
    className={
      darkMode
        ? "text-gray-300 max-w-3xl mx-auto mb-8"
        : "text-gray-600 max-w-3xl mx-auto mb-8"
    }
  >
    InsightStay empowers hospitality businesses with
    AI-powered analytics to understand customer experience,
    improve services and build stronger guest relationships.
  </p>

  <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition">

    Explore Dashboard

  </button>

</section>
  </main>

  <Footer darkMode={darkMode} />
</div>

);
}

export default About;
