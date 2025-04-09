import React from "react";
 
 
 //create your first component
 const Card = () => {
     return (
         <div className="container text-center">
             
            <h1>Card</h1>
            <div className="row justify-content-center"> 
            <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4"> 
            <div className="card">
              <img src="..." className="card-img-top" alt="..."/>
              <div className="card-body">
               <h5 className="card-title">Card title</h5>
               <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
               <a href="#" className="btn btn-primary">Go somewhere</a>
               </div>
                 </div>

            </div>
             </div>
         </div>
     );
 };
 
 
 export default Card;