import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";



//create your first component
const Home = () => {
	return (
		<>
		  
		   <Navbar/>
		   
		   <Jumbotron/>

		   <div className="d-flex">
		   <Card/>
		   <Card/>
		   <Card/>
		   <Card/>
           </div>

		   <Footer/>
		  
		   
		</>
	);
};

export default Home;