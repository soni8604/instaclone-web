import React from 'react';
import { Link } from "react-router-dom";
import "./landingPage.css"

const LandingPage= () => {
    return( 
        <>
            <div className="main-container">
                <div className="container1">
                    <img src={require("../../images/lens-1418954@2x.png" )}alt="photo"/>
                </div>
                <div className="container2">
                    <h2 className="text-container">10x Team 04</h2>
                    <Link to="/Header">
                        <button className='Enter-button'>
                            Enter
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}
export default LandingPage;