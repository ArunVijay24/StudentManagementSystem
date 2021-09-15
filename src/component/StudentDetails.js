import React from "react"
// import { useHistory } from "react-router"

const StudentDetails = () => {
  const user = JSON.parse(localStorage.getItem("FormValues"))
  // useHistory()
  return (
    <div>
      <p>name{user.name}</p>
      <p>password:{user.password}</p>
    </div>
  )
}

export default StudentDetails
