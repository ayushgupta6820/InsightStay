import React from "react";

class ErrorBoundary extends React.Component {

  constructor(props) {

    super(props);

    this.state = {

      hasError: false

    };

  }

  static getDerivedStateFromError(error) {

    return {

      hasError: true

    };

  }

  componentDidCatch(error, info) {

    console.error("React Error Boundary");

    console.error(error);

    console.error(info);

  }

  render() {

    if (this.state.hasError) {

      return (

        <div className="min-h-screen flex items-center justify-center bg-gray-100">

          <div className="bg-white rounded-2xl shadow-lg p-10 max-w-lg text-center">

            <h1 className="text-4xl font-bold text-red-600 mb-4">

              Something went wrong

            </h1>

            <p className="text-gray-600 mb-6">

              The application encountered an unexpected error.

            </p>

            <button

              onClick={() => window.location.reload()}

              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"

            >

              Reload Application

            </button>

          </div>

        </div>

      );

    }

    return this.props.children;

  }

}

export default ErrorBoundary;