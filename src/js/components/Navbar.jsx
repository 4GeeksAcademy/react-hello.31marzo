import React from "react";
 

 const Navbar = () => {
     return (
         <>
            <nav className="navbar navbar-expand-lg  navbar-dark bg-light bg-dark ">
            <div className="container-fluid">
           
           <div className="collapse navbar-collapse" id="navbarSupportedContent">
           <a class="navbar-brand" href="#">Start Bootstrap</a>
           <ul className="navbar-nav  mb-2 mb-lg-0 ms-auto">
           <li className="nav-item">
           <a className="nav-link active" aria-current="page" href="#">Home</a>
           </li>
            <li className="nav-item">
           <a className="nav-link" href="#">About</a>
           </li>

           <li className="nav-item">
           <a className="nav-link" href="#">Services</a>
           </li>

           <li className="nav-item">
           <a className="nav-link" href="#">Contact</a>
           </li>
           
        
            </ul>
            
          </div>
          </div>
          </nav>
         </>
     );
 };
 
 export default Navbar;