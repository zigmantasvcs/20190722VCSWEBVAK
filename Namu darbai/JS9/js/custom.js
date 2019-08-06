// funkcijai turi buti paduotas masyvas
function spausdintVardusIrPavardesISarasa(vardai){
	
	document.write("<ol>");
	
	for(let i = 0; i < vardai.length;i++){
		document.write("<li>"+vardai[i]+"</li>");
	}
	
	document.write("</ol>");
	
}