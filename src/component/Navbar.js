import React from "react"

import classes from "./styles.module.css"
import { FaUserTie } from "react-icons/fa"
import { NavLink } from "react-router-dom"
// import { useHistory } from "react-router"

const Navbar = () => {
  // const history = useHistory()
  // const handleClick = () => {
  //   history.push("/studentForm")
  // }
  // const logout = () => {
  //   history.push("/")
  // }
  const user = JSON.parse(localStorage.getItem("FormValues"))
  // console.log(user)
  return (
    <div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <FaUserTie>{user.name}</FaUserTie>
          </li>
          <li>
            <NavLink
              to="/studentForm"
              className={classes.btn2}
              style={{ textDecoration: "none" }}
              // onClick={handleClick}
            >
              Add Student Marks
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className={classes.btn2}
              style={{ textDecoration: "none" }}
              // onClick={logout}
            >
              Logout
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
