import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";

import Loader from "../components/ui/Loader";
import Toast from "../components/ui/Toast";

import { getAllReviews } from "../services/reviewService";
function Home({ darkMode, setDarkMode }) {
  const [reviews, setReviews] = useState([]);

const [loading, setLoading] = useState(true);

const [error, setError] = useState("");

useEffect(() => {

  const fetchReviews = async () => {

    try {

      const data = await getAllReviews();

      setReviews(data);

    }

    catch {

      setError("Unable to load statistics.");

    }

    finally {

      setLoading(false);

    }

  };

  fetchReviews();

}, []);

const totalReviews = reviews.length;

const positive = reviews.filter(
  r => r.sentiment.toLowerCase() === "positive"
).length;

const neutral = reviews.filter(
  r => r.sentiment.toLowerCase() === "neutral"
).length;

const negative = reviews.filter(
  r => r.sentiment.toLowerCase() === "negative"
).length;

const positivePercent =
  totalReviews
    ? Math.round((positive / totalReviews) * 100)
    : 0;

const neutralPercent =
  totalReviews
    ? Math.round((neutral / totalReviews) * 100)
    : 0;

const negativePercent =
  totalReviews
    ? Math.round((negative / totalReviews) * 100)
    : 0;

if (loading) {

  return (

    <div className="min-h-screen flex items-center justify-center">

      <Loader />

    </div>

  );

}
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
  {error && (

  <div className="flex justify-center mt-6">

    <Toast
      message={error}
      type="error"
    />

  </div>

)}

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
          {totalReviews}
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
          {positivePercent}%
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
            <span>{positivePercent}%</span>
          </div>

          <div className="w-full bg-gray-300 rounded-full h-4">
            <div
              className="bg-green-500 h-4 rounded-full"
              style={{
               width: `${positivePercent}%`,
              }}
></div>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex justify-between mb-2">
            <span>Neutral Reviews</span>
            <span>{neutralPercent}%</span>
          </div>

          <div className="w-full bg-gray-300 rounded-full h-4">
            <div className="bg-yellow-500 h-4 rounded-full" style={{
            width: `${neutralPercent}%`,
           }}
></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <span>Negative Reviews</span>
            <span>{negativePercent}%</span>
          </div>

          <div className="w-full bg-gray-300 rounded-full h-4">
            <div className="bg-red-500 h-4 rounded-full" style={{
             width: `${negativePercent}%`,
               }}
></div>
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
