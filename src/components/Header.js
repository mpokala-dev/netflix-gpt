import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = ({ showSignOut = false }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSignOut = () => {
    dispatch(removeUser());
    navigate("/");
  };

  return (
    <header className="absolute inset-x-0 top-0 z-20 flex items-center justify-between bg-gradient-to-b from-black/70 to-transparent px-6 py-5 sm:px-12 sm:py-7">
      <img className="w-32 sm:w-40" src={LOGO} alt="Netflix" />
      {showSignOut && (
        <button
          type="button"
          onClick={handleSignOut}
          className="min-w-24 rounded bg-red-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Sign Out
        </button>
      )}
    </header>
  );
};

export default Header;
