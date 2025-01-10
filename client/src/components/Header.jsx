import {
  Navbar,
  TextInput,
  Button,
  Dropdown,
  Avatar,
  DropdownDivider,
} from "flowbite-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../redux/theme/themeSlice";
import { signoutSuccess } from "../redux/user/userSlice";
import cancelIcon from "../../assets/cancel.svg";
import searchIcon from "../../assets/search.svg";
import sunIcon from "../../assets/sun.svg";
import moonIcon from "../../assets/moon.svg";
import profileIcon from "../../assets/profile.svg";

export default function Header() {
  const location = useLocation();
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const [showSearchBar, setShowSearchBar] = useState(false);

  const handleSignout = async () => {
    try {
      const res = await fetch(`/api/user/signout`, {
        method: "POST",
      });
      const data = res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    setShowSearchBar(false);
    navigate(`/search?${searchQuery}`);
  };

  return (
    <header className="bg-gray-100 border-b border-gray-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6 relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 text-2xl font-bold font-serif tracking-widest text-gray-800">
          <Link to="/">Photo blog</Link>
        </div>
        <div className="font-semibold text-xs hover:underline">CONTACT US</div>

        <div className="flex items-center space-x-6 text-sm text-gray-700">
          <div className="flex items-center space-x-4">
            {showSearchBar ? (
              <div className="absolute inset-0 bg-gray-100 flex items-center justify-center z-10">
                <form
                  onSubmit={handleSubmit}
                  className="w-full max-w-4xl px-4 bg-gray-100 "
                >
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full py-4 px-6 text-lg bg-gray-100 focus:outline-none"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </form>
                <button
                  className="absolute top-4 right-6 text-gray-500"
                  onClick={() => setShowSearchBar(false)}
                >
                  <img src={cancelIcon} alt="Search Icon" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => {
                  setShowSearchBar(true);
                }}
              >
                <img src={searchIcon} alt="Search Icon" />
              </button>
            )}

            <button onClick={() => dispatch(toggleTheme())}>
              {theme === "light" ? (
                <img src={sunIcon} alt="sun Icon" />
              ) : (
                <img src={moonIcon} alt="moon Icon" />
              )}
            </button>

            <div className="flex items-center space-x-6">
              <div className="w-10 h-6 flex-shrink-0">
                {currentUser ? (
                  <Dropdown
                    arrowIcon={false}
                    inline
                    label={
                      <div className="w-10 h-6">
                        <Avatar
                          alt="user"
                          img={currentUser.profilePicture}
                          rounded
                          className="w-full h-full"
                        />
                      </div>
                    }
                  >
                    <Dropdown.Header>
                      <span className="block text-sm">
                        @{currentUser.username}
                      </span>
                      <span className="block text-sm font-medium truncate">
                        {currentUser.email}
                      </span>
                    </Dropdown.Header>
                    <Link to={"/dashboard?tab=profile"}>
                      <Dropdown.Item>Profile</Dropdown.Item>
                    </Link>
                    <DropdownDivider />
                    <Dropdown.Item onClick={handleSignout}>
                      Sign Out
                    </Dropdown.Item>
                  </Dropdown>
                ) : (
                  <Link to="/sign-in">
                    <img src={profileIcon} alt="profile Icon" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
