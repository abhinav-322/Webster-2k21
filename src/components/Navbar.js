import React from "react";
import mainLogo from './images/checkers1.jpg';
import { Link, useNavigate } from 'react-router-dom'
export default function Navbar() {
    // render(){
        return (   
            <div>
                <nav>
                    <div>
                        <button className="button">Play</button>
                    </div>

                    <div>
                        <button className="button">Leaderboard</button>
                    </div>

                    <form className="d-flex">
                        <input id="search" className="form-control" type="search" placeholder="Search" aria-label="Search" />
                        {/* <button class="btn btn-outline-success button" type="submit">Search</button>  */}
                    </form>

                    <div>
                    <Link to={"/Login"}><button className="buttonL">Login</button></Link>
                    </div>

                    <div>
                        <Link to={"/Signup"}><button className="buttonS">SignUp</button></Link>
                    </div>
                </nav>

                <div className="adjust">
                    {/* <img  src={mainLogo} alt="img" width="500px" height="500px"/> */}
                </div>

                <div className="bdyMain">
                    <img className="image" src={mainLogo} alt="img" width="500px" height="500px"/>
                    <h1 className="para write" Text style={{textAlign: 'right'}}>Play Checkers <br></br> <span className="forFree"> for Free</span> <br></br>on the #1 Site! <br></br></h1>
                    {/* <button className="buttonRight playOnline" >Play Online</button> */}
                    <button className="buttonRight playBot" >Play with Bot</button>
                </div>
            </div>
        );
    // }
}