function arJums18(){
	
	let amzius = prompt("Iveskite amziu");
	
	while(amzius < 18 && amzius > 3){
		amzius = prompt("Iveskite amziu");
	}
	
	document.write("Sveiki prisijunge!");
}

//function arTaDiena(){
//	let d = new Date();
//	
//	while(d.getDate() < new Date("2019-08-06").getDate()){
//		
//	}
//	
//	alert("Virus");
//}