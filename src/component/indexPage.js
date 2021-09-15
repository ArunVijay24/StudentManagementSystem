import React from "react"
import { BrowserRouter } from "react-router-dom"
import Card from "./card"
import Navbar from "./Navbar"
import classes from "./styles.module.css"

const IndexPage = () => {
  return (
    <BrowserRouter>
      <div className={classes.form} style={{ backgroundImage: "none" }}>
        <Navbar />
        <Card />
      </div>
    </BrowserRouter>
  )
}

export default IndexPage
