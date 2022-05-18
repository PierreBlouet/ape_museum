 const btn = document.getElementById('discover');
 btn.onclick = function(){
	console.log("pressed");
	document.getElementById('discover').style.opacity=0;
	
	document.getElementById('encima').style.animation="mask-playzero 2s steps(29) forwards";
	document.getElementById('monkey').className = 'animate';
	
	
	
    
    
 }