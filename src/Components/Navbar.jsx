
import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // ✅ detect route changes

  useEffect(() => {
    const user = localStorage.getItem("loggedInUser");
    setIsLoggedIn(user);
  },[location]);               // ✅ recheck on every route change

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setIsLoggedIn(false);
    navigate("/");
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Gallery", path: "/gallery" },
    { name: "Booking", path: "/booking" },
    { name: "Contact", path: "/contact" },
    { name: "About", path: "/flightcard" },
  ];

  return (
    <nav className="bg-white shadow-md p-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          AiroMenT ✈️
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              to={link.path}
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              {link.name}
            </Link>
          ))}

          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="ml-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Login
            </Link>
          )}
        </div>

        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden flex flex-col bg-white shadow-md mt-2 px-4 py-2 space-y-3">
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              to={link.path}
              className="py-2 border-b hover:text-blue-500"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          {isLoggedIn ? (
            <button
              onClick={() => {
                handleLogout();
                setMenuOpen(false);
              }}
              className="py-2 text-center bg-red-500 text-white rounded hover:bg-red-600 transition"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="py-2 text-center bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              onClick={() => setMenuOpen(false)}
            >
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
