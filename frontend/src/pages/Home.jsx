import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";

function Home({ darkMode, setDarkMode }) {
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

  <Hero darkMode={darkMode} />

  {/* Stats Section */}
  <section className="max-w-6xl mx-auto px-6 py-12">

    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

      <div
        className={
          darkMode
            ? "bg-gray-800 rounded-xl shadow-lg p-6 text-center"
            : "bg-white rounded-xl shadow-md p-6 text-center"
        }
      >
        <h3 className="text-3xl font-bold text-blue-600">
          5000+
        </h3>

        <p
          className={
            darkMode
              ? "text-gray-300 mt-2"
              : "text-gray-600 mt-2"
          }
        >
          Reviews Analyzed
        </p>
      </div>

      <div
        className={
          darkMode
            ? "bg-gray-800 rounded-xl shadow-lg p-6 text-center"
            : "bg-white rounded-xl shadow-md p-6 text-center"
        }
      >
        <h3 className="text-3xl font-bold text-green-500">
          92%
        </h3>

        <p
          className={
            darkMode
              ? "text-gray-300 mt-2"
              : "text-gray-600 mt-2"
          }
        >
          Sentiment Accuracy
        </p>
      </div>

      <div
        className={
          darkMode
            ? "bg-gray-800 rounded-xl shadow-lg p-6 text-center"
            : "bg-white rounded-xl shadow-md p-6 text-center"
        }
      >
        <h3 className="text-3xl font-bold text-purple-500">
          4+
        </h3>

        <p
          className={
            darkMode
              ? "text-gray-300 mt-2"
              : "text-gray-600 mt-2"
          }
        >
          Insight Categories
        </p>
      </div>

      <div
        className={
          darkMode
            ? "bg-gray-800 rounded-xl shadow-lg p-6 text-center"
            : "bg-white rounded-xl shadow-md p-6 text-center"
        }
      >
        <h3 className="text-3xl font-bold text-orange-500">
          24/7
        </h3>

        <p
          className={
            darkMode
              ? "text-gray-300 mt-2"
              : "text-gray-600 mt-2"
          }
        >
          AI Assistance
        </p>
      </div>

    </div>

  </section>

  {/* Features */}
  <section className="max-w-6xl mx-auto px-6 py-16">

    <h2 className="text-4xl font-bold text-center mb-12">
      Core Features
    </h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

      <Card
        title="📊 Sentiment Analysis"
        description="Automatically classify reviews as positive, neutral or negative."
        darkMode={darkMode}
      />

      <Card
        title="🏷 Theme Detection"
        description="Identify cleanliness, location, food and service themes."
        darkMode={darkMode}
      />

      <Card
        title="🤖 AI Responses"
        description="Generate intelligent and contextual guest review responses."
        darkMode={darkMode}
      />

      <Card
        title="📈 Analytics Dashboard"
        description="Visualize guest feedback trends through interactive insights."
        darkMode={darkMode}
      />

    </div>

  </section>

  {/* Dashboard Preview */}
  <section
    className={
      darkMode
        ? "bg-gray-900 py-16"
        : "bg-gray-50 py-16"
    }
  >
    <div className="max-w-5xl mx-auto px-6">

      <h2 className="text-4xl font-bold text-center mb-10">
        Analytics Dashboard Preview
      </h2>

      <div
        className={
          darkMode
            ? "bg-gray-800 rounded-2xl shadow-lg p-8"
            : "bg-white rounded-2xl shadow-lg p-8"
        }
      >

        <div className="mb-6">
          <div className="flex justify-between mb-2">
            <span>Positive Reviews</span>
            <span>85%</span>
          </div>

          <div className="w-full bg-gray-300 rounded-full h-4">
            <div className="bg-green-500 h-4 rounded-full w-[85%]"></div>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex justify-between mb-2">
            <span>Neutral Reviews</span>
            <span>10%</span>
          </div>

          <div className="w-full bg-gray-300 rounded-full h-4">
            <div className="bg-yellow-500 h-4 rounded-full w-[10%]"></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <span>Negative Reviews</span>
            <span>5%</span>
          </div>

          <div className="w-full bg-gray-300 rounded-full h-4">
            <div className="bg-red-500 h-4 rounded-full w-[5%]"></div>
          </div>
        </div>

      </div>

    </div>
  </section>

  <Footer darkMode={darkMode} />
</div>


);
}

export default Home;
