import { useState, useEffect } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Loader from "../components/ui/Loader";
import Toast from "../components/ui/Toast";

import {
  getAllReviews,
  searchReviews,
} from "../services/reviewService";

function Dashboard({ darkMode, setDarkMode }) {

  const [reviews, setReviews] = useState([]);

  const [filteredReviews, setFilteredReviews] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const [search, setSearch] = useState("");

  const loadReviews = async () => {

    try {

      setLoading(true);

      const data = await getAllReviews();

      setReviews(data);

      setFilteredReviews(data);

      setError("");

    } catch (err) {

      setError("Failed to load reviews.");

    } finally {

      setLoading(false);

    }

  };

  useEffect(() => {

    loadReviews();

  }, []);

  useEffect(() => {

    const searchData = async () => {

      if (search.trim() === "") {

        setFilteredReviews(reviews);

        return;

      }

      try {

        const result = await searchReviews(search);

        setFilteredReviews(result);

      }

      catch {

        setFilteredReviews([]);

      }

    };

    searchData();

  }, [search, reviews]);

  const totalReviews = reviews.length;

  const positiveReviews = reviews.filter(
    (r) => r.sentiment.toLowerCase() === "positive"
  ).length;

  const neutralReviews = reviews.filter(
    (r) => r.sentiment.toLowerCase() === "neutral"
  ).length;

  const negativeReviews = reviews.filter(
    (r) => r.sentiment.toLowerCase() === "negative"
  ).length;

  const positivePercent =
    totalReviews === 0
      ? 0
      : Math.round((positiveReviews / totalReviews) * 100);

  const neutralPercent =
    totalReviews === 0
      ? 0
      : Math.round((neutralReviews / totalReviews) * 100);

  const negativePercent =
    totalReviews === 0
      ? 0
      : Math.round((negativeReviews / totalReviews) * 100);

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
      : "bg-gray-100 text-gray-900 min-h-screen"
  }
>
  <Navbar
    darkMode={darkMode}
    setDarkMode={setDarkMode}
  />

  <main className="max-w-7xl mx-auto px-6 py-10">

    {error && (
      <div className="mb-6">
        <Toast
          message={error}
          type="error"
        />
      </div>
    )}

    <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-6 mb-10">

      <div>

        <h1 className="text-4xl font-bold">
          Dashboard
        </h1>

        <p
          className={
            darkMode
              ? "text-gray-400 mt-2"
              : "text-gray-600 mt-2"
          }
        >
          AI Powered Guest Review Analytics
        </p>

      </div>

      <input
        type="text"
        placeholder="Search guest, hotel or sentiment..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className={
          darkMode
            ? "bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 w-full lg:w-96 outline-none"
            : "bg-white border rounded-xl px-4 py-3 w-full lg:w-96 outline-none"
        }
      />

    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">

      <div className={darkMode
        ? "bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-700"
        : "bg-white rounded-2xl p-6 shadow"}>

        <p className="text-gray-500">
          Total Reviews
        </p>

        <h2 className="text-4xl font-bold mt-3">
          {totalReviews}
        </h2>

      </div>

      <div className={darkMode
        ? "bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-700"
        : "bg-white rounded-2xl p-6 shadow"}>

        <p className="text-gray-500">
          Positive
        </p>

        <h2 className="text-4xl font-bold mt-3 text-green-500">
          {positiveReviews}
        </h2>

      </div>

      <div className={darkMode
        ? "bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-700"
        : "bg-white rounded-2xl p-6 shadow"}>

        <p className="text-gray-500">
          Neutral
        </p>

        <h2 className="text-4xl font-bold mt-3 text-yellow-500">
          {neutralReviews}
        </h2>

      </div>

      <div className={darkMode
        ? "bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-700"
        : "bg-white rounded-2xl p-6 shadow"}>

        <p className="text-gray-500">
          Negative
        </p>

        <h2 className="text-4xl font-bold mt-3 text-red-500">
          {negativeReviews}
        </h2>

      </div>

    </div>

    <div className={
      darkMode
        ? "bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-700 mb-10"
        : "bg-white rounded-2xl p-8 shadow mb-10"
    }>

      <h2 className="text-2xl font-bold mb-6">
        Sentiment Distribution
      </h2>

      <div className="space-y-6">

        <div>

          <div className="flex justify-between mb-2">

            <span>Positive</span>

            <span>{positivePercent}%</span>

          </div>

          <div className="bg-gray-300 rounded-full h-3">

            <div
              className="bg-green-500 h-3 rounded-full"
              style={{
                width: `${positivePercent}%`
              }}
            ></div>

          </div>

        </div>

        <div>

          <div className="flex justify-between mb-2">

            <span>Neutral</span>

            <span>{neutralPercent}%</span>

          </div>

          <div className="bg-gray-300 rounded-full h-3">

            <div
              className="bg-yellow-500 h-3 rounded-full"
              style={{
                width: `${neutralPercent}%`
              }}
            ></div>

          </div>

        </div>

        <div>

          <div className="flex justify-between mb-2">

            <span>Negative</span>

            <span>{negativePercent}%</span>

          </div>

          <div className="bg-gray-300 rounded-full h-3">

            <div
              className="bg-red-500 h-3 rounded-full"
              style={{
                width: `${negativePercent}%`
              }}
            ></div>

          </div>

        </div>

      </div>

    </div>

        <div
      className={
        darkMode
          ? "bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-700"
          : "bg-white rounded-2xl p-8 shadow"
      }
    >

      <div className="flex items-center justify-between mb-6">

        <h2 className="text-2xl font-bold">
          Recent Guest Reviews
        </h2>

        <span
          className={
            darkMode
              ? "text-gray-400"
              : "text-gray-500"
          }
        >
          {filteredReviews.length} Reviews Found
        </span>

      </div>

      {filteredReviews.length === 0 ? (

        <div className="text-center py-10">

          <p className="text-lg text-gray-500">
            No reviews found.
          </p>

        </div>

      ) : (

        <div className="grid md:grid-cols-2 gap-6">

          {filteredReviews.map((item) => (

            <div
              key={item.id}
              className={
                darkMode
                  ? "bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition"
                  : "bg-gray-50 rounded-xl p-6 border hover:border-blue-500 transition"
              }
            >

              <div className="flex justify-between items-center mb-4">

                <div>

                  <h3 className="text-lg font-bold">
                    👤 {item.guest}
                  </h3>

                  <p
                    className={
                      darkMode
                        ? "text-gray-400"
                        : "text-gray-500"
                    }
                  >
                    🏨 {item.hotel}
                  </p>

                </div>

                <span
                  className={
                    item.sentiment.toLowerCase() === "positive"
                      ? "bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold"
                      : item.sentiment.toLowerCase() === "neutral"
                      ? "bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-semibold"
                      : "bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-semibold"
                  }
                >
                  {item.sentiment}
                </span>

              </div>

              <p
                className={
                  darkMode
                    ? "text-gray-300 leading-7"
                    : "text-gray-700 leading-7"
                }
              >
                {item.review}
              </p>

            </div>

          ))}

        </div>

      )}

    </div>

  </main>

  <Footer darkMode={darkMode} />

</div>

);

}

export default Dashboard;