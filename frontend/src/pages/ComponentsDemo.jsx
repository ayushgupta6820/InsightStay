import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
Button,
Input,
Modal,
Toast,
Loader,
} from "../components/ui";

function ComponentsDemo({ darkMode, setDarkMode }) {
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


  <main className="max-w-5xl mx-auto px-6 py-12">

    <h1 className="text-4xl font-bold text-center mb-4">
      Component Library
    </h1>

    <p
      className={
        darkMode
          ? "text-center text-gray-400 mb-10"
          : "text-center text-gray-600 mb-10"
      }
    >
      Reusable UI components created for Week 3.
    </p>

    <div
      className={
        darkMode
          ? "bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-700 space-y-8"
          : "bg-white rounded-2xl p-8 shadow-lg space-y-8"
      }
    >

      <div>
        <h2 className="text-xl font-semibold mb-3">
          Button Component
        </h2>

        <Button
          text="Click Me"
          onClick={() => alert("Button Clicked")}
        />
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-3">
          Input Component
        </h2>

        <Input placeholder="Enter your name" />
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-3">
          Modal Component
        </h2>

        <Modal title="Sample Modal" />
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-3">
          Toast Component
        </h2>

        <Toast message="Success Message" />
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-3">
          Loader Component
        </h2>

        <Loader />
      </div>

    </div>

  </main>

  <Footer darkMode={darkMode} />
</div>


);
}

export default ComponentsDemo;
