import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import AIReview from "./pages/AIReview";
import ErrorBoundary from "./components/ErrorBoundary";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import ExploreReviews from "./pages/ExploreReviews";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ComponentsDemo from "./pages/ComponentsDemo";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
   <ErrorBoundary>

<BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={
            <Home
              darkMode={darkMode}
              setDarkMode={setDarkMode}
            />
          }
        />

        <Route
          path="/about"
          element={
            <About
              darkMode={darkMode}
              setDarkMode={setDarkMode}
            />
          }
        />

        <Route
          path="/login"
          element={
            <Login
              darkMode={darkMode}
              setDarkMode={setDarkMode}
            />
          }
        />

        <Route
          path="/register"
          element={
            <Register
              darkMode={darkMode}
              setDarkMode={setDarkMode}
            />
          }
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard
                darkMode={darkMode}
                setDarkMode={setDarkMode}
              />
            </ProtectedRoute>
          }
        />
        

              <Route

                  path="/ai-review"

                  element={

                  <AIReview

                  darkMode={darkMode}

                  setDarkMode={setDarkMode}

      />

      }

      />

      <Route
  path="/explore"
  element={
    <ExploreReviews
      darkMode={darkMode}
      setDarkMode={setDarkMode}
    />
  }
/>

        <Route
          path="/components"
          element={
            <ProtectedRoute>
              <ComponentsDemo
                darkMode={darkMode}
                setDarkMode={setDarkMode}
              />
            </ProtectedRoute>
          }
        />

      </Routes>

     
    </BrowserRouter>

</ErrorBoundary>
  );
}

export default App;