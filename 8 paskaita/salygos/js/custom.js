//function arSkaiciusDidesnisUz10(skaicius){
//	
//	if(skaicius > 10){
//		document.write("Skaičius " + skaicius + " didesnis už 10");
//	}
//	else{
//		document.write("Skaičius " + skaicius + " mažesnis už 10");
//	}
//	
//}

function arSkaiciusDidesnisUz10(skaicius){
	
	let statusas = "";
	
	if(skaicius > 10){
		statusas = "didesnis už";
	}
	else if(skaicius == 10){
		statusas = "lygus";
	}
	else{
		statusas = "mažesnis už";
	}
	
	document.write("Skaičius " + skaicius + " " + statusas +" 10<br>");
	
}

function arTeisingasSlaptazodis(paduodamasSlaptazodis){
	let esamasSalaptazodis = "querty123";
	
	if(esamasSalaptazodis == paduodamasSlaptazodis){
		document.write("Jeeee, jūs prisijungėte!");
	}
	else{
		document.write("Jūs užblokuotas amžiams!");
	}
}