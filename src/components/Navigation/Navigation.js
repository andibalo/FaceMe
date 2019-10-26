import React from 'react'
import './Navigation.css'

const Navigation = () => {
    return (
    
        <div className ="nav">
            <h3 className="white f2 pa3 mt3">FaceMe</h3>
            <p className="signOut pointer dim f2 underline white pa3 mt3">
                {'Sign Out'}
            </p>        
        </div>
    )
}

export default Navigation

//In Navigations .css nav div that is positioned relative has to be set the width and height
//in order for the absolute positioned child elemnt inside it can move around relative to parent size