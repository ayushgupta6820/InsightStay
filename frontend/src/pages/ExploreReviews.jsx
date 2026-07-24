import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Loader from "../components/ui/Loader";
import Toast from "../components/ui/Toast";

import { getPublicReviews } from "../services/reviewService";

function ExploreReviews({ darkMode, setDarkMode }) {

    const [reviews, setReviews] = useState([]);

const [filteredReviews, setFilteredReviews] = useState([]);

const [loading, setLoading] = useState(true);

const [error, setError] = useState("");

const [search, setSearch] = useState("");

const [filter, setFilter] = useState("All");

useEffect(() => {

    const loadReviews = async () => {

        try {

            const data = await getPublicReviews();

            setReviews(data);

            setFilteredReviews(data);

        }

        catch {

            setError("Unable to load reviews.");

        }

        finally {

            setLoading(false);

        }

    };

    loadReviews();

}, []);

useEffect(() => {

    let data = [...reviews];

    if (filter !== "All") {

        data = data.filter(

            review => review.sentiment === filter

        );

    }

    if (search.trim() !== "") {

        data = data.filter(review =>

            review.guest.toLowerCase().includes(search.toLowerCase()) ||

            review.hotel.toLowerCase().includes(search.toLowerCase()) ||

            review.review.toLowerCase().includes(search.toLowerCase())

        );

    }

    setFilteredReviews(data);

}, [search, filter, reviews]);

const totalReviews = reviews.length;

const positive = reviews.filter(

r => r.sentiment === "Positive"

).length;

const neutral = reviews.filter(

r => r.sentiment === "Neutral"

).length;

const negative = reviews.filter(

r => r.sentiment === "Negative"

).length;

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

?

"bg-gray-950 text-white min-h-screen"

:

"bg-gray-100 text-gray-900 min-h-screen"

}
>

<Navbar

darkMode={darkMode}

setDarkMode={setDarkMode}

/>

<main className="max-w-7xl mx-auto px-6 py-10">

  {error && (
    <Toast
      message={error}
      type="error"
    />
  )}

  <div className="text-center mb-10">

    <h1 className="text-5xl font-bold">
      Explore Reviews
    </h1>

    <p className="mt-4 text-lg text-gray-500">
      Browse hotel experiences shared by travellers.
    </p>

  </div>

  {/* Search */}

  <input
    type="text"
    placeholder="Search guest, hotel or review..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className={
      darkMode
        ? "w-full bg-gray-800 border border-gray-700 rounded-xl p-4"
        : "w-full bg-white border rounded-xl p-4"
    }
  />

  {/* Filter */}

  <div className="flex flex-wrap gap-3 mt-6">

    {["All", "Positive", "Neutral", "Negative"].map(item => (

      <button
        key={item}
        onClick={() => setFilter(item)}
        className={
          filter === item
            ? "bg-blue-600 text-white px-5 py-2 rounded-lg"
            : darkMode
            ? "bg-gray-800 px-5 py-2 rounded-lg"
            : "bg-white border px-5 py-2 rounded-lg"
        }
      >
        {item}
      </button>

    ))}

  </div>

  {/* Statistics */}

  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">

    <div className={darkMode ? "bg-gray-800 rounded-xl p-6 text-center" : "bg-white rounded-xl shadow p-6 text-center"}>
      <h2 className="text-3xl font-bold text-blue-500">{totalReviews}</h2>
      <p>Total Reviews</p>
    </div>

    <div className={darkMode ? "bg-gray-800 rounded-xl p-6 text-center" : "bg-white rounded-xl shadow p-6 text-center"}>
      <h2 className="text-3xl font-bold text-green-500">{positive}</h2>
      <p>Positive</p>
    </div>

    <div className={darkMode ? "bg-gray-800 rounded-xl p-6 text-center" : "bg-white rounded-xl shadow p-6 text-center"}>
      <h2 className="text-3xl font-bold text-yellow-500">{neutral}</h2>
      <p>Neutral</p>
    </div>

    <div className={darkMode ? "bg-gray-800 rounded-xl p-6 text-center" : "bg-white rounded-xl shadow p-6 text-center"}>
      <h2 className="text-3xl font-bold text-red-500">{negative}</h2>
      <p>Negative</p>
    </div>

  </div>

  {/* Reviews */}

  <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10">

    {filteredReviews.map(item => (

      <div
        key={item._id}
        className={
          darkMode
            ? "bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-blue-500 transition"
            : "bg-white rounded-2xl p-6 shadow hover:shadow-lg transition"
        }
      >

        <div className="flex justify-between items-start">

          <div>

            <h2 className="font-bold text-xl">
              👤 {item.guest}
            </h2>

            <p className="text-gray-500">
              🏨 {item.hotel}
            </p>

          </div>

          <span
            className={
              item.sentiment === "Positive"
                ? "bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm"
                : item.sentiment === "Neutral"
                ? "bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm"
                : "bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm"
            }
          >
            {item.sentiment}
          </span>

        </div>

        <p className="mt-5 leading-7">
          {item.review}
        </p>

        <p className="mt-6 text-sm text-gray-500">
          {new Date(item.createdAt).toLocaleDateString()}
        </p>

      </div>

    ))}

  </div>

  {/* Empty State */}

  {filteredReviews.length === 0 && (

    <div className="text-center py-20">

      <div className="text-6xl">
        📭
      </div>

      <h2 className="text-3xl font-bold mt-5">
        No Reviews Found
      </h2>

      <p className="text-gray-500 mt-3">
        Try searching with another keyword.
      </p>

    </div>

  )}

</main>

<Footer darkMode={darkMode}/>

</div>

);

}

export default ExploreReviews;

