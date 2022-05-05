import React from "react"
import "../ComponentsCSS/Navbar.css"
 class Navbar extends React.Component{
    render(){
        return(
            <div className="Navbar">
            <h1>Movies</h1>
            <h3 className="N-favourites">Favourites</h3>

            </div>
        )
    }
 }
 export default Navbar