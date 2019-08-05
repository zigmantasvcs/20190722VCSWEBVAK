function duokManSiosDienosData(){
	
	let d = new Date("2019-10-05");
	
	let metai = d.getFullYear();
	let menuo = d.getMonth();
	let diena = d.getDate();
	
	//menuo = menuo + 1;
	//menuo += 1;
	menuo++;
	
	let menuoKaipTekstas = String(menuo);
	
	if(menuoKaipTekstas.length == 1){
		menuo = "0" + menuo;
	}
	
	let pilnaData = metai + "-" + menuo + "-" + diena;
	
	return pilnaData;
	
}