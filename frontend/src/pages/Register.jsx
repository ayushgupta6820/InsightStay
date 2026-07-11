import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Register({ darkMode, setDarkMode })  {
  const navigate = useNavigate();

const [email, setEmail] = useState("");

const [password, setPassword] = useState("");

const [loading, setLoading] = useState(false);

const [error, setError] = useState("");

const handleRegister = async () => {

try{

setLoading(true);

setError("");

await API.post("/auth/register",{

email,

password

});

alert("Registration Successful");

navigate("/login");

}

catch(error){

setError(

error.response?.data?.message ||

"Registration Failed"

);

}

finally{

setLoading(false);

}

};
return (
<div
className={
darkMode
? "bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white min-h-screen"
: "bg-gradient-to-br from-blue-50 via-white to-indigo-50 text-gray-900 min-h-screen"
}
> <Navbar
     darkMode={darkMode}
     setDarkMode={setDarkMode}
   />

  <main className="min-h-[80vh] flex items-center justify-center px-6 py-12">

    <div
      className={
        darkMode
          ? "bg-gray-900 shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 rounded-3xl p-10 w-full max-w-md border border-gray-700"
          : "bg-white shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 rounded-3xl p-10 w-full max-w-md"
      }
    >

     <div className="flex justify-center mb-5">

  <div className="bg-blue-600 text-white text-3xl w-16 h-16 rounded-full flex items-center justify-center shadow-lg">

    🏨

  </div>

</div>

<h1 className="text-4xl font-bold text-center mb-3">

  Create Account

</h1>

      <p
        className={
          darkMode
            ? "text-center text-gray-400 mb-8"
            : "text-center text-gray-500 mb-8"
        }
      >
        Create your InsightStay account
      </p>

      <form className="space-y-5">

        <input
type="email"
placeholder="Email Address"
value={email}
onChange={(e)=>setEmail(e.target.value)}
className={
darkMode
? "w-full bg-gray-800 border border-gray-700 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
: "w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
}
/>

        <input
type="password"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
className={
darkMode
? "w-full bg-gray-800 border border-gray-700 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
: "w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
}
/>
  
              {
error && (

<p className="text-red-500 text-sm text-center">

{error}

</p>

)
}<button

type="button"

onClick={handleRegister}

disabled={loading}

className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"

>

{

loading
?
"Creating Account..."
:
"Create Account"
}

</button>
       <div className="text-center mt-5">

  <span
    className={
      darkMode
        ? "text-gray-400"
        : "text-gray-500"
    }
  >
    Already have an account?
  </span>

  <Link
    to="/login"
    className="text-blue-600 font-semibold ml-2 hover:underline"
  >
    Sign In
  </Link>

</div>
      </form>


    </div>

  </main>

  <Footer darkMode={darkMode} />
</div>


);
}

export default Register;
