import React from "react";
export default function Navbar() {
    return (
        <div>
                <main class="bdyMain bgC">
                    <img class="image" src="{require('./img.png')}" alt="img" width="550px" height="550px"/>
                    <h1 class="para write" Text style={{textAlign: 'right'}}>Play Checkers <br></br> <span class="forFree"> for Free</span> <br></br>on the #1 Site! <br></br></h1>
                    <button class="para buttonRight playOnline">Play Online</button>
                    <button class="para buttonRight playBot">Play with Bot</button>
                </main>
        </div>
    )
}