import React, { useState } from "react";

const TheLights = () => {

    const [ color, setColor] = useState("");
	   const [reveal, setReveal] = useState(false);

    // const ChangingLights = () => {

    //     

    // }
    

    return(
    <>
	<div className="trafficLight rounded">
			<button className={`${color === 'red' ? 'theLightsRed shine' : 'theLightsRed'} border`} onClick={() => setColor('red')}></button>
			<button className={color === 'yellow' ? 'theLightsYellow shine' : "theLightsYellow"} onClick={() => setColor('yellow')}></button>
			<button className={color === 'green' ? 'theLightsGreen shine' : "theLightsGreen"} onClick={() => setColor('green')}></button>
 {/* if color == purple and the revea is true the purple light appears and shines else if its not purple but revea is true its just purple else its hidden */}
			<button className={color === 'purple' && reveal === true ? 'theLightsPurple shine' : color !== 'purple' && reveal === true ? 'theLightsPurple' : 'hidden' } onClick={() => setColor('purple')}
			 type="button" ></button>

			<button className='btn btn-primary ms-3'  onClick={() =>{ setColor('purple'); setReveal(true)}}>add purple</button>
			<button className='btn btn-primary ms-3'  onClick={() =>{ setColor('purple'); setReveal(false)}}>NO purple</button>	
	
	</div>
		
		
		</>
    );
}

export default TheLights














				
