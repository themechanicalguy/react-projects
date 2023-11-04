import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(false);

  const email = useRef(null);
  const pass = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    //validate the form data
    checkValidateData(email, pass);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          alt="cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/893a42ad-6a39-43c2-bbc1-a951ec64ed6d/1d86e0ac-428c-4dfa-9810-5251dbf446f8/IN-en-20231002-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        />
      </div>

      <form  onSubmit={return}>
      
        <h1 className="font-bold text-3xl">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-5 my-4 w-full bg-gray-700 text-xl "
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-5 my-4 w-full bg-gray-700 text-xl "
        />
        <input
          ref={pass}
          type="password"
          placeholder="Password"
          className="p-5 my-4 w-full bg-gray-700 text-xl"
        />
        <button className="p-5 my-6 bg-red-700 w-full text-xl">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p onClick={toggleSignInForm} className="text-xl">
          {isSignInForm ? "Sign In" : "Sign Up"}
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now. "}
        </p>
      </form>
    </div>
  );
};

export default Login;
