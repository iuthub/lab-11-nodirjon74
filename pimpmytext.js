function pimp(){

	document.getElementById("string").style.fontSize = "24pt";
}

function pimpcheckBox(){

	var a = document.getElementById("stick");

	if(a.checked){

		 document.getElementById("string").style.fontWeight = "bold";
		 document.getElementById("string").style.textDecoration = "underline";
		 document.getElementById("string").style.color = "green";
	}else {

		document.getElementById("string").style.fontWeight = "normal";
		 document.getElementById("string").style.textDecoration = "none";
		 document.getElementById("string").style.color = "unset";
	}
}

function capitalize(){
  
   document.getElementById("string").style.textTransform = "uppercase";

}