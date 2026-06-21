function Footer({ darkMode }) {
return (
<footer
className={
darkMode
? "bg-gray-950 text-white border-t border-gray-800"
: "bg-gray-900 text-white"
}
> <div className="max-w-6xl mx-auto px-6 py-12">


    <div className="grid md:grid-cols-3 gap-10">

      <div>
        <h2 className="text-2xl font-bold text-blue-400">
          InsightStay
        </h2>

        <p
          className={
            darkMode
              ? "mt-4 text-gray-300"
              : "mt-4 text-gray-400"
          }
        >
          AI-powered guest feedback intelligence platform
          helping hospitality businesses understand customer
          sentiment and improve guest experience.
        </p>
      </div>

      <div>
        <h3 className="font-semibold text-lg mb-4">
          Features
        </h3>

        <ul
          className={
            darkMode
              ? "space-y-2 text-gray-300"
              : "space-y-2 text-gray-400"
          }
        >
          <li>Sentiment Analysis</li>
          <li>Theme Detection</li>
          <li>AI Response Generation</li>
          <li>Analytics Dashboard</li>
        </ul>
      </div>

      <div>
        <h3 className="font-semibold text-lg mb-4">
          Tech Stack
        </h3>

        <ul
          className={
            darkMode
              ? "space-y-2 text-gray-300"
              : "space-y-2 text-gray-400"
          }
        >
          <li>React</li>
          <li>Tailwind CSS</li>
          <li>Vite</li>
          <li>Gemini API</li>
        </ul>
      </div>

    </div>

    <div
      className={
        darkMode
          ? "border-t border-gray-800 mt-10 pt-6 text-center text-gray-400"
          : "border-t border-gray-700 mt-10 pt-6 text-center text-gray-500"
      }
    >
      © 2026 InsightStay. All Rights Reserved.
    </div>

  </div>
</footer>


);
}

export default Footer;
