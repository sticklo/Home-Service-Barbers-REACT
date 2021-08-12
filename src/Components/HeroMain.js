import React from 'react'
import "../App.css";

function Navbar (){
    return (
        <section className="HeroMain">
            <div className="Header">
                <div className="Navbar">
                    <div className="Logo">
                        <div>H <span>S</span> B</div>
                    </div>
                     <div className="NavLinks">
                         <button id="HamburgerBtn">&#9776;</button>
                     </div>
                 </div>
            </div>
            <div className="HeroSection">
                <div className="HeroHeader">
                    <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
                </div>
                <div className="HeroParagraph">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin libero nibh, lacinia consequat viverra vel, dapibus id lectus.</p>
                </div>
                <div className="HeroLinks">
                    <button className="FirstBtn">Book A Haircut</button>
                    <button className="SecondBtn">See Barbers List</button>
              </div>
            </div>
        </section>
        
    )
}
export default Navbar;