import React, {useState} from "react";
import TrafficLight from "./trafficlight.jsx";

//create your first component
const Home = () => {
	// Botones - Default
	function default_button (){
		let [aux_light_red, aux_light_yellow, aux_light_green] = document.getElementsByClassName("p-1")
		
		aux_light_red.classList.remove("bg-white")
		aux_light_yellow.classList.remove("bg-white")
        aux_light_green.classList.remove("bg-white")
		let colors_main = document.getElementsByClassName("my-2")

		for(let i= 0;i<colors_main.length;i++){
			let item = colors_main[i]
			item.classList.add("opacity-75")
		}
	}
	// Botones - Add and Quit blue
	function add_and_quit_blue(){
		
	} 
	return (
		<div className="containter col-12" style={{minWidth: "600px"}}>
		<header className="p-3 bg-dark d-flex">
			<h1 className="text-light m-auto">
				Traffic Light
			</h1>
		</header>
		<main>
		<TrafficLight />
		</main>
		<footer className="d-flex bg-dark p-4 fixed-bottom" style={{minWidth: "600px"}}>
			<div className="m-auto">
				<button onClick={default_button} className="btn btn-secondary me-2">Default</button>
				{/* <button className="btn btn-secondary me-2">Alternar la luz</button>
				<button className="btn btn-secondary me-2">Añadir el azul</button>
				<button className="btn btn-secondary me-2">Quitar el azul</button> */}
			</div>
		</footer>
		</div>
	);
};

export default Home;
