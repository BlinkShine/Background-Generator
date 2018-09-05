const lodash 	 = require('lodash');
const color1 	 = document.querySelector(".color1"),
	  color2 	 = document.querySelector(".color2"),
      color3	 = document.querySelector(".colorinput1"),
      color4	 = document.querySelector(".colorinput2"),
      h3 		 = document.querySelector("h3"),
      btnleft	 = document.querySelector("#btn1"),
      btncenter	 = document.querySelector("#btn2"),
      btnright 	 = document.querySelector("#btn3"),
      btnreset 	 = document.querySelector("#reset"),
      body 	 	 = document.querySelector("#gradient");


const setgradient = () => ( body.style.background = "linear-gradient(to right,"+ color1.value+ ","+ color2.value+ ")",
	 					    h3.textContent = body.style.background + ";" );

const valuecolorfull = () => {
	const colorleft  = color3.value.length,
      	  colorright = color4.value.length;
	return  ( (colorleft<=6 && colorleft>0 && colorright <=6 && colorright > 0)
			  ? (body.style.background = "linear-gradient(to right,#"+color3.value+",#"+color4.value+")",
			     valuereset() ) 
			  	  :(colorleft<=6 && colorleft>0)
					? (body.style.background = "linear-gradient(to right,#"+color3.value+",white)",
					   valuereset() )
						: (colorleft<=6 && colorleft>0)
							? (body.style.background = "linear-gradient(to right,white,#"+color4.value+")",
						  	   valuereset() )
							: (body.style.background = "red",
			   				   valuereset() )
			);
}

const reset = () => (body.style.background = "linear-gradient(to right,red,yellow)",
					 valuereset() );


const valuereset = () => (h3.textContent = body.style.background,
						 color1.value = "",
						 color2.value = "",
						 color3.value = "",
						 color4.value = "");

color1.addEventListener("input", setgradient );

color2.addEventListener("input", setgradient );

btnleft.addEventListener("click", valuecolorfull );

btncenter.addEventListener("click", valuecolorfull);

btnright.addEventListener("click", valuecolorfull);

btnreset.addEventListener("click", reset);
