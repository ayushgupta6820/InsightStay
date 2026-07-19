import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import API from "../services/api";

function AIReview({ darkMode, setDarkMode }) {
  const [review, setReview] = useState("");
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const analyzeReview = async () => {
    if (!review.trim()) {
      setError("Please enter a hotel review.");
      return;
    }

    try {
      setLoading(true);
      setError("");
      setAnalysis(null);

      const res = await API.post("/ai/analyze", {
        review,
      });

      console.log(res.data);

      setAnalysis(res.data.analysis);
    } catch (err) {
      console.error(err);

      setError(
        err.response?.data?.message ||
          "Something went wrong while analyzing the review."
      );
    } finally {
      setLoading(false);
    }
  };

  const cardStyle = darkMode
    ? "bg-gray-800 border border-gray-700 rounded-2xl p-6 shadow-lg"
    : "bg-white border border-gray-200 rounded-2xl p-6 shadow-lg";

  return (
    <div
      className={
        darkMode
          ? "bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white min-h-screen"
          : "bg-gradient-to-br from-blue-50 via-white to-indigo-50 text-gray-900 min-h-screen"
      }
    >
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="max-w-6xl mx-auto px-6 py-10">

        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold mb-4">
            🤖 AI Guest Review Analyzer
          </h1>

          <p
            className={
              darkMode
                ? "text-gray-400 text-lg"
                : "text-gray-600 text-lg"
            }
          >
            Analyze hotel guest feedback instantly using AI.
          </p>
        </div>

        <div
          className={
            darkMode
              ? "bg-gray-900 rounded-3xl p-8 shadow-xl border border-gray-700"
              : "bg-white rounded-3xl p-8 shadow-xl"
          }
        >
          <label className="font-semibold text-xl block mb-3">
            Enter Hotel Review
          </label>

          <textarea
            rows={8}
            value={review}
            onChange={(e) => setReview(e.target.value)}
            placeholder="Example:

The room was clean and spacious. Staff were friendly but breakfast was average."
            className={
              darkMode
                ? "w-full bg-gray-800 border border-gray-700 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                : "w-full border border-gray-300 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            }
          />

          <div className="mt-8 flex justify-center">
            <button
              onClick={analyzeReview}
              disabled={loading}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-10 py-4 rounded-xl text-lg font-semibold shadow-lg transition"
            >
              {loading ? "Analyzing..." : "🤖 Analyze with AI"}
            </button>
          </div>

          {loading && (
            <div className="mt-10 text-center">

              <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-blue-600 mx-auto"></div>

              <p className="mt-5 text-lg">
                Analyzing guest sentiment...
              </p>

              <p>Extracting positives and negatives...</p>

              <p>Generating recommendations...</p>

            </div>
          )}

          {error && (
            <div className="mt-8 bg-red-100 text-red-700 border border-red-300 rounded-xl p-4">
              {error}
            </div>
          )}

          {!analysis && !loading && (
            <div className={`${cardStyle} mt-10`}>
              <h2 className="text-2xl font-bold mb-3">
                No AI Analysis Yet
              </h2>

              <p>
                Paste a guest review above and click
                <strong> 🤖 Analyze with AI </strong>
                to generate insights.
              </p>
            </div>
          )}

          {analysis && (
            <div className="mt-10">

              <h2 className="text-3xl font-bold mb-8">
                AI Analysis
              </h2>

              <div className="grid gap-6">

                <div className={cardStyle}>
                  <h3 className="text-2xl font-bold text-green-500 mb-3">
                    🟢 Overall Sentiment
                  </h3>

                  <p className="text-lg">
                    {analysis.sentiment}
                  </p>
                </div>

                <div className={cardStyle}>
                  <h3 className="text-2xl font-bold text-blue-500 mb-3">
                    ✅ Positive Points
                  </h3>

                  {analysis.positive?.length ? (
                    <ul className="space-y-2">
                      {analysis.positive.map((item, index) => (
                        <li key={index}>
                          ✅ {item}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>No positive points.</p>
                  )}
                </div>

                <div className={cardStyle}>
                  <h3 className="text-2xl font-bold text-red-500 mb-3">
                    ❌ Negative Points
                  </h3>

                  {analysis.negative?.length ? (
                    <ul className="space-y-2">
                      {analysis.negative.map((item, index) => (
                        <li key={index}>
                          ❌ {item}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>No negative points.</p>
                  )}
                </div>

                <div className={cardStyle}>
                  <h3 className="text-2xl font-bold text-yellow-500 mb-3">
                    💬 Suggested Hotel Response
                  </h3>

                  <p className="leading-8 whitespace-pre-wrap">
                    {analysis.response}
                  </p>
                </div>

                <div className={cardStyle}>
                  <h3 className="text-2xl font-bold text-purple-500 mb-3">
                    📈 Improvement Suggestions
                  </h3>

                  {analysis.suggestions?.length ? (
                    <ul className="space-y-2">
                      {analysis.suggestions.map((item, index) => (
                        <li key={index}>
                          📌 {item}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>No suggestions.</p>
                  )}
                </div>

              </div>

            </div>
          )}

        </div>

      </main>

      <Footer darkMode={darkMode} />
    </div>
  );
}

export default AIReview;