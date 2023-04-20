import React from "react";
import { Nav } from ''

export const NavBar = () => {

  return (
    <Nav>
      <h2>Dream Cars</h2>
      <div>
        <ul>

//if not logged in display only login/signup

          <li>home</li>
          <li>create a post</li>
          <li>my cart</li>
          <li>logout</li>
        </ul>
      </div>
    </Nav>

  )
}