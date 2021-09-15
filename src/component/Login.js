import { useState, useEffect } from "react"
import { useHistory } from "react-router"
import classes from "./styles.module.css"

const Login = () => {
  const [formValues, setFormValues] = useState({ name: "", password: "" })
  const history = useHistory()
  useEffect(() => {
    window.localStorage.setItem("FormValues", JSON.stringify(formValues))
  })
  const handleClick = () => {
    history.push("/index")
  }
  const handleSubmit = (event) => {
    event.preventDefault()
  }
  return (
    <div className={classes.form}>
      <form onSubmit={handleSubmit}>
        <h1>Student Management System</h1>
        <h2>Admin Login Page</h2>
        <input
          type="name"
          placeholder="Please enter your User Name/Password"
          className={classes.inpt}
          value={formValues.name}
          onChange={(e) =>
            setFormValues({ ...formValues, name: e.target.value })
          }
          required
        />
        <br />
        <input
          type="password"
          placeholder="Please enter your Password "
          className={classes.inpt}
          value={formValues.password}
          onChange={(e) =>
            setFormValues({ ...formValues, password: e.target.value })
          }
          required
        />
        <br />
        <button type="submit" className={classes.btn2} onClick={handleClick}>
          Login
        </button>
      </form>
    </div>
  )
}

export default Login
