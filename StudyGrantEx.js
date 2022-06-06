function showStudyGrant() {
	
	var age = parseInt(document.getElementById("age").value);
	
	var withParents = document.getElementById("withParents").value;
	
	if (age >= 20 && withParents === "n") {
		
		answer = "The study grant is 335.20 euros."
	
	} else if (age >= 20 && withParents === "y") {
		
		answer = "The study grant is 136.70 euros."
	
	} else {
		
		answer = "Ask Kela."
	}
	
	document.getElementById("answer").innerHTML = answer
}