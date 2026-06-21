function Card({ title, description, darkMode }) {
return (
<div
className={
darkMode
? "bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-1 transition duration-300 border border-gray-700"
: "bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-1 transition duration-300"
}
> <h3 className="text-xl font-bold mb-3 text-blue-600">
{title} </h3>

  <p
    className={
      darkMode
        ? "text-gray-300"
        : "text-gray-600"
    }
  >
    {description}
  </p>
</div>


);
}

export default Card;
