import { useState } from "react"
import { Link } from "react-router-dom"
import paypalImage from "../assets/paypal-seeklogo.com.svg"
import { AiFillBell } from "react-icons/ai"
import { CiSettings } from "react-icons/ci"
import { IconContext } from "react-icons"
const dataofLinks: Array<{ name: string; to: string }> = [
  {
    name: "Home",
    to: "/",
  },
  {
    name: "Finance",
    to: "/finance",
  },
  {
    name: "Send and Request",
    to: "/request",
  },
  {
    name: "Deals",
    to: "/deals",
  },
  {
    name: "wallet",
    to: "/wallet",
  },
  {
    name: "Activity",
    to: "/activity",
  },
  {
    name: "help",
    to: "/help",
  },
]

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav style={{ backgroundColor: "#142c8f" }} className="sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-around gap-16 py-4">
          <div className="flex items-center justify-center gap-2">
            <div className="flex-shrink-0">
              <img
                className={`w-8 h-8 ${isMenuOpen ? "md:hidden" : ""}`}
                src={paypalImage}
                alt="PaypalImage"
              />
            </div>
            {dataofLinks.map((e) => (
              <Link
                key={e.to}
                to={e.to}
                className="text-gray-300 hidden md:block sm:block hover:bg-gray-700 hover:text-white  px-3 py-2 rounded-md text-base font-medium"
              >
                {e.name}
              </Link>
            ))}
          </div>
          <div className="items-center justify-between gap-4 hidden md:flex sm:flex">
            <IconContext.Provider value={{ className: "w-5 h-5" }}>
              <AiFillBell style={{ color: "white" }} />
            </IconContext.Provider>

            <IconContext.Provider value={{ className: "w-5 h-5" }}>
              <CiSettings style={{ color: "white" }} />
            </IconContext.Provider>

            <Link
              to="/logout"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md hidden md:block sm:block text-base font-medium"
            >
              Logout
            </Link>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {dataofLinks.map((e) => (
              <Link
                key={e.to}
                to={e.to}
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                {e.name}
              </Link>
            ))}
            <Link
              to="/logout"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Logout
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
