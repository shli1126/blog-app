import {
  Navbar,
  TextInput,
  Button,
  Dropdown,
  Avatar,
  DropdownDivider,
} from "flowbite-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../redux/theme/themeSlice";
import { signoutSuccess } from "../redux/user/userSlice";

export default function Header() {
  const path = useLocation().pathname;
  const location = useLocation();
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
  }, [location.search]);

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
    navigate(`/search?${searchQuery}`);
  };

  return (
    <header className="bg-gray-100 border-b border-gray-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6 relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 text-2xl font-bold font-serif tracking-widest text-gray-800">
          Photo blog
        </div>
        <div className="font-semibold text-xs hover:underline">
          CONTACT US
        </div>

        <div className="flex items-center space-x-6 text-sm text-gray-700">
          <div className="flex items-center space-x-4">
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
                d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
              />
            </svg>

            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>

            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 5V3m0 18v-2M7.05 7.05 5.636 5.636m12.728 12.728L16.95 16.95M5 12H3m18 0h-2M7.05 16.95l-1.414 1.414M18.364 5.636 16.95 7.05M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
              />
            </svg>
          </div>
        </div>
      </div>
    </header>
    // <Navbar className="border-b-2">
    //   <Link
    //     to="/"
    //     className="self-center whitespace-nowrap text-sm
    //   sm:text-xl font-semibold dark:text-white"
    //   >
    //     <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
    //       Blog
    //     </span>
    //     Clone
    //   </Link>
    //   <form onSubmit={handleSubmit}>
    //     <TextInput
    //       type="text"
    //       placeholder="Search..."
    //       rightIcon={AiOutlineSearch}
    //       className="hidden lg:inline"
    //       value={searchTerm}
    //       onChange={(e) => setSearchTerm(e.target.value)}
    //     />
    //   </form>
    //   <Button className="w-12 h-10 lg:hidden" color="gray" pill>
    //     <AiOutlineSearch />
    //   </Button>
    //   <div className="flex gap-2 md:order-2">
    //     <Button
    //       className="w-12 h-10 hidden sm:inline"
    //       color="gray"
    //       pill
    //       onClick={() => dispatch(toggleTheme())}
    //     >
    //       {theme === "light" ? <FaSun /> : <FaMoon />}
    //     </Button>
    //     {/* make the sign in button dynamic to show the profile picture */}
    //     {currentUser ? (
    //       <Dropdown
    //         arrowIcon={false}
    //         inline
    //         label={
    //           <Avatar alt="user" img={currentUser.profilePicture} rounded />
    //         }
    //       >
    //         <Dropdown.Header>
    //           <span className="block text-sm">@{currentUser.username}</span>
    //           <span className="block text-sm font-medium truncate">
    //             {currentUser.email}
    //           </span>
    //         </Dropdown.Header>
    //         <Link to={"/dashboard?tab=profile"}>
    //           <Dropdown.Item>Profile</Dropdown.Item>
    //         </Link>
    //         <DropdownDivider />
    //         <Dropdown.Item onClick={handleSignout}>Sign Out</Dropdown.Item>
    //       </Dropdown>
    //     ) : (
    //       <Link to="/sign-in">
    //         <Button gradientDuoTone="purpleToBlue" outline>
    //           Sign in
    //         </Button>
    //       </Link>
    //     )}
    //   </div>
    //   <Navbar.Toggle />

    //   <Navbar.Collapse>
    //     <Navbar.Link active={path === "/"} as={"div"}>
    //       <Link to="/">Home</Link>
    //     </Navbar.Link>
    //     <Navbar.Link active={path === "/about"} as={"div"}>
    //       <Link to="/about">About</Link>
    //     </Navbar.Link>
    //     <Navbar.Link active={path === "/projects"} as={"div"}>
    //       <Link to="/projects">Projects</Link>
    //     </Navbar.Link>
    //   </Navbar.Collapse>

    // </Navbar>
  );
}
