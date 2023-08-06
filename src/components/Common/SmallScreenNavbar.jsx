import { useEffect, useState } from "react"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { BsChevronDown } from "react-icons/bs"
import {  useSelector } from "react-redux"
import { Link, matchPath, useLocation } from "react-router-dom"

// import logo from "../../assets/Logo/Logo-Full-Light.png"
import { NavbarLinks } from "../../data/navbar-links"
import { apiConnector } from "../../services/apiConnector"
import { categories } from "../../services/apis"
import { ACCOUNT_TYPE } from "../../utils/constants"
import ProfileDropdown from "../core/Auth/ProfileDropdown"
import ConfirmationModal from "./ConfirmationModal"

export default function SmallScreenNavbar({ handleCrossButton, isClose }) {
  const { token } = useSelector((state) => state.auth)
  const { user } = useSelector((state) => state.profile)
  const { totalItems } = useSelector((state) => state.cart)
  const location = useLocation()
  const [subLinks, setSubLinks] = useState([])
  const [loading, setLoading] = useState(false)
  const [confirmationModal, setConfirmationModal] = useState(null)

  useEffect(() => {
    ;(async () => {
      setLoading(true)
      try {
        const res = await apiConnector("GET", categories.CATEGORIES_API)
        setSubLinks(res.data.data)
      } catch (error) {
        console.log("Could not fetch Categories.", error)
      }
      setLoading(false)
    })()
  }, [])

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname)
  }

  return (
    <div
      className={`moving-div-left
      fixed right-0 top-[57px] z-[1000] flex h-screen  w-[40%] flex-col justify-center
      border-l-[1px] border-l-richblack-700 ${
        location.pathname !== "/" ? "bg-richblack-800" : "bg-richblack-900"
      } transition-all duration-200`}
    >
      <div
        className={`flex flex-col ${
          location.pathname !== "/" ? "bg-richblack-800" : "bg-richblack-900"
        }  relative  h-[95%] w-[100%] 
         items-center gap-5`}
      >
        {/* Login / Signup / Dashboard */}
        <div className="flex flex-col items-center gap-y-2">
          <div className="flex gap-4">
            {user && user?.accountType !== ACCOUNT_TYPE.INSTRUCTOR && (
              <Link to="/dashboard/cart" className="relative">
                <AiOutlineShoppingCart className="text-2xl text-richblack-100" />
                {totalItems > 0 && (
                  <span
                    className="absolute -bottom-2 -right-2 grid h-5 w-5 place-items-center overflow-hidden 
                rounded-full bg-richblack-600 text-center text-xs font-bold text-yellow-100"
                  >
                    {totalItems}
                  </span>
                )}
              </Link>
            )}
            {token !== null && <ProfileDropdown />}
          </div>

          {token === null && (
            <Link to="/login">
              <button
                className="z-[1000] mb-1 rounded-[8px] border border-richblack-700 bg-richblack-800
                px-[6px]  py-[4px]   text-richblack-100"
                onClick={handleCrossButton}
              >
                Log in
              </button>
            </Link>
          )}
          {token === null && (
            <Link to="/signup">
              <button
                className="z-[1000] rounded-[8px] border border-richblack-700
              bg-richblack-800 px-[6px] py-[4px] text-richblack-100"
                onClick={handleCrossButton}
              >
                Sign up
              </button>
            </Link>
          )}
        </div>

        {token === null && (
          <div className="-mb-10 h-[3px] w-[100%] bg-richblack-700"></div>
        )}

        {token !== null && (
          <div className="h-[3px] w-[100%] bg-richblack-700 "></div>
        )}

        {/* Navigation links */}
        <nav className="block">
          <ul className="mt-8 flex flex-col gap-y-3 text-richblack-25">
            {NavbarLinks.map((link, index) => (
              <li key={index}>
                {link.title === "Catalog" ? (
                  <>
                    <div
                      className={`group relative flex cursor-pointer items-center gap-1 ${
                        matchRoute("/catalog/:catalogName")
                          ? "text-yellow-25"
                          : "text-richblack-25"
                      }`}
                    >
                      <p>{link.title}</p>
                      <BsChevronDown />
                      <div
                        className="invisible absolute left-[50%] top-[50%] z-[1000] flex w-[100px] 
                      translate-x-[-50%] translate-y-[3em] flex-col rounded-lg bg-richblack-5 p-2
                      text-richblack-900 opacity-0 transition-all duration-150 group-hover:visible 
                      group-hover:translate-y-[1.65em] group-hover:opacity-100 lg:w-[300px]"
                      >
                        <div
                          className="absolute left-[50%] top-0 -z-10 h-6 w-6 translate-x-[80%]
                          translate-y-[-40%] rotate-45 select-none rounded bg-richblack-5"
                        ></div>
                        {loading ? (
                          <p className="spinner text-center">Loading...</p>
                        ) : subLinks.length ? (
                          <>
                            {subLinks
                              ?.filter(
                                (subLink) => subLink?.courses?.length > 0
                              )
                              ?.map((subLink, i) => (
                                <Link
                                  to={`/catalog/${subLink.name
                                    .split(" ")
                                    .join("-")
                                    .toLowerCase()}`}
                                  className="rounded-lg bg-transparent py-2 pl-2 hover:bg-richblack-50"
                                  key={i}
                                >
                                  <p>{subLink.name}</p>
                                </Link>
                              ))}
                          </>
                        ) : (
                          <p className="text-center">No Course Found</p>
                        )}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link to={link?.path}>
                    <p
                      className={`${
                        matchRoute(link?.path)
                          ? "text-yellow-25"
                          : "text-richblack-25"
                      }`}
                    >
                      {link.title}
                    </p>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
    </div>
  )
}
