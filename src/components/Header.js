import React from "react"

const Header = () => {
  const headerStyle = {
    padding: "20px 0",
    lineHeight: "1.5em",
  }
  return (
    <header style={headerStyle}>
      <h1
      style={{
        fontsize: "6rem",
        fontweight: "600",
        marginBottom: "2rem",
        lineHeight: "1em",
        color: "red",
        textTransform: "lowercase",
        textAlign: "center",
      }}
      >todos</h1>
    </header>
  )
}

export default Header