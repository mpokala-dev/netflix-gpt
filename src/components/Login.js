import { useEffect, useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [isSignInForm, setIsSignInForm] = useState(false);
  const user = useSelector((store) => store.user);
  const email = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message === null) {
      dispatch(
        addUser({
          email: email.current.value,
          password: password.current.value,
        }),
      );
      navigate("/browse");
    } else return;
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  useEffect(() => {
    if (user) {
      navigate("/browse");
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white">
      <Header />

      <div className="absolute inset-0" aria-hidden="true">
        <img
          className="h-full w-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/4a59f124-030b-417a-9565-8362f395bdb0/web/GB-en-20260914-TRIFECTA-perspective_69186ac8-bdeb-4919-9f99-79eec0026cf8_medium.jpg"
          alt=""
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <main className="relative z-10 flex min-h-screen items-center justify-center px-6 pb-8 pt-24">
        <form
          onSubmit={handleSubmit}
          className="flex w-full max-w-md flex-col bg-black/80 px-7 py-10 sm:px-12"
          noValidate
        >
          <h1 className="mb-7 text-3xl font-bold text-center">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          <label className="mb-2 text-sm text-gray-200" htmlFor="email">
            Email address
          </label>
          <input
            ref={email}
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="mb-5 w-full rounded-sm border border-gray-500 bg-[#333] px-4 py-3 text-white placeholder:text-gray-400 focus:border-white focus:outline-none focus:ring-2 focus:ring-white"
          />
          <label className="mb-2 text-sm text-gray-200" htmlFor="password">
            Password
          </label>
          <input
            ref={password}
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className="mb-3 w-full rounded-sm border border-gray-500 bg-[#333] px-4 py-3 text-white placeholder:text-gray-400 focus:border-white focus:outline-none focus:ring-2 focus:ring-white"
          />
          <div className="min-h-6 py-1 text-sm text-red-400" aria-live="polite">
            {errorMessage}
          </div>
          <button
            type="submit"
            className="mt-3 w-full rounded-sm bg-red-600 px-4 py-3 font-semibold text-white transition-colors hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <Link to="" className="my-2" onClick={toggleSignInForm}>
            {isSignInForm ? "New user? Sign Up" : "Existing user? Sign In"}
          </Link>
        </form>
      </main>
    </div>
  );
};

export default Login;
