import React, { useState } from "react";

const Home = () => {
	const {selectedColor, setSelectecColor }= useState("")
		return (
		<div className="semaforo">
			<div
			onClick={()=>setSelectecColor("red")} 
			className={"light red" + ((selectedColor === "red") ? " glow": "")}>

			</div>
			<div
			onClick={()=>setSelectecColor("yellow")} 
			className={"light yellow" + ((selectedColor === "yellow") ? " glow": "")}>

			</div>
			<div
			onClick={()=>setSelectecColor("green")} 
			className={"light green" + ((selectedColor === "green") ? " glow": "")}>

			</div>
			
		</div>
	);
};

export default Home;
