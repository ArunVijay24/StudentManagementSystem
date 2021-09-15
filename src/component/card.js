import React from "react"
import classes from "./styles.module.css"
const Card = () => {
  const cardInfo = [
    { title: "No.of students", text: "0" },
    { title: "No.of Distinction Students", text: "0" },
    { title: "No.of Avg Students", text: "0" },
    { title: "No.of Failed Students", text: "0" },
  ]
  const renderCard = (card, index) => {
    return (
      <div
        key={index}
        className={classes.Card}
        style={{ width: "220px", height: "120px" }}
      >
        <h2>{card.title}</h2>
        <h3>{card.text}</h3>
      </div>
    )
  }
  return <div className={classes.grid}>{cardInfo.map(renderCard)}</div>
}

export default Card
