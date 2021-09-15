import { nanoid } from "nanoid"
import React, { useState } from "react"
import { useHistory } from "react-router"
import classes from "./styles.module.css"

const StudentForm = () => {
  const history = useHistory()
  const [student, setStudent] = useState({
    id: nanoid,
    schoolName: "",
    studentname: "",
    fathername: "",
    dob: "",
    sub1: "",
    sub2: "",
    sub3: "",
    sub4: "",
    sub5: "",
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    window.localStorage.setItem("StudentDetails", JSON.stringify(student))
  }
  const handleClick = () => {
    history.push("/index")
  }
  return (
    <div className={classes.form} style={{ backgroundImage: "none" }}>
      <form onSubmit={handleSubmit}>
        <div className={classes.grid2}>
          <div>
            <label htmlFor="schoolname" className={classes.Label}>
              School Name
            </label>
            <input
              type="name"
              placeholder="Please enter School name"
              className={classes.inpt2}
              value={student.schoolName}
              onChange={(e) =>
                setStudent({ ...student, schoolName: e.target.value })
              }
              required
            />
          </div>
          <div>
            <label htmlFor="schoolname" className={classes.Label}>
              Student Name
            </label>
            <input
              type="name"
              placeholder="Please enter Student name"
              className={classes.inpt2}
              required
              value={student.studentname}
              onChange={(e) =>
                setStudent({ ...student, studentname: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="fathername" className={classes.Label}>
              Father's Name
            </label>
            <input
              type="name"
              placeholder="Please enter father's name"
              className={classes.inpt2}
              required
              value={student.fathername}
              onChange={(e) =>
                setStudent({ ...student, fathername: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="dob" className={classes.Label}>
              DOB
            </label>
            <input
              type="date"
              placeholder="Please enter DOB"
              className={classes.inpt2}
              required
              max="2017-01-01"
              value={student.dob}
              onChange={(e) => setStudent({ ...student, dob: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="sub1" className={classes.Label}>
              Subject1
            </label>
            <input
              type="number"
              placeholder="Please enter subject1 mark"
              className={classes.inpt2}
              required
              min="1"
              max="100"
              value={student.sub1}
              onChange={(e) => setStudent({ ...student, sub1: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="sub2" className={classes.Label}>
              Subject2
            </label>
            <input
              type="number"
              placeholder="Please enter subject2 mark"
              className={classes.inpt2}
              required
              min="1"
              max="100"
              value={student.sub2}
              onChange={(e) => setStudent({ ...student, sub2: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="sub3" className={classes.Label}>
              Subject3
            </label>
            <input
              type="number"
              placeholder="Please enter subject3 mark"
              className={classes.inpt2}
              min="1"
              max="100"
              value={student.sub3}
              onChange={(e) => setStudent({ ...student, sub3: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="sub4" className={classes.Label}>
              Subject4
            </label>
            <input
              type="number"
              placeholder="Please enter subject4 mark"
              className={classes.inpt2}
              required
              min="1"
              max="100"
              value={student.sub4}
              onChange={(e) => setStudent({ ...student, sub4: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="sub5" className={classes.Label}>
              Subject5
            </label>
            <input
              type="number"
              placeholder="Please enter subject5 mark"
              className={classes.inpt2}
              required
              min="1"
              max="100"
              value={student.sub5}
              onChange={(e) => setStudent({ ...student, sub5: e.target.value })}
            />
          </div>
        </div>
        <button type="submit" className={classes.btn2} onClick={handleClick}>
          Submit details
        </button>
      </form>
    </div>
  )
}

export default StudentForm
