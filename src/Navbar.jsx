import React from 'react'
import { Outlet,Link } from 'react-router-dom'
import logo from "../src/image/logo.png";

export default function Navbar({len}) {
  return (
    <>
     <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
        <div class="container-fluid">

          <a class="navbar-brand" href="#">
            <img 
              src={logo} 
              alt="logo" 
              style={{ width: "120px", height: "40px", objectFit: "contain" }}
            />
          </a>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link" to="/home">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li class="nav-item dropdown">
                <Link
                  class="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Categories
                </Link>
                <ul class="dropdown-menu mt-2">
                  <li>
                    <Link class="dropdown-item" to="/Tshirt">
                      Tshirt
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/jeans">
                      Jeans
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/shoes">
                      Shoes
                    </Link>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/service">
                  services
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/contact">
                  contact
                </Link>
              </li>
            </ul>
          </div>
         <Link to={"/cart"} className="btn btn-warning"> Cart <span className='badge bg-danger'>{len}</span></Link>
        </div>
      </nav>
    
    <Outlet/>
    </>
  )
}
