import React, { useState } from "react";

let shadow = {boxShadow:'cyan 10px 10px 50px 50px' };
const TheLights = () => {

    const [ color, setColor] = useState("");
	   const [reveal, setReveal] = useState("false");

    // const ChangingLights = () => {

    //     

    // }
    

    return(
    <><div className="trafficLight rounded">
			<button className={color === 'red' ? 'theLightsRed shine' : 'theLightsRed'} onClick={() => setColor('red')}></button>
			<button className={color === 'yellow' ? 'theLightsYellow shine' : "theLightsYellow"} onClick={() => setColor('yellow')}></button>
			<button className={color === 'green' ? 'theLightsGreen shine' : "theLightsGreen"} onClick={() => setColor('green')}></button>
	</div>
		
		<div className="d-flex justify-content-center mt-5">
			<button className={color === 'purple' ? 'TheLightsPurple shine' : 'hidden'} type="button" onClick={() => setColor('purple')}>Add Purple</button>
			</div>
		
		</>
    );
}

export default TheLights














				
