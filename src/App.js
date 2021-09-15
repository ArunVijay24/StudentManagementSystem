import React from "react"
import { Route, Switch } from "react-router"
import IndexPage from "./pages/index"
import Login from "./component/Login"
import StudentForm from "./pages/studentDetails"
import StudentDetails from "./component/StudentDetails"
// import NotFound from "./pages/notFound"
const App = () => {
  return (
    <Switch>
      {/* <Route exact path="/">
        <Login />
      </Route> */}
      <Route path="/index">
        <IndexPage />
      </Route>
      <Route path="/studentForm">
        <StudentForm />
      </Route>
      <Route path="/studentDetails">
        <StudentDetails />
      </Route>
      {/* <Route path="*">
        <NotFound />
      </Route> */}
    </Switch>
  )
}

export default App
