function sujungtiDviEilutes(eilute1, eilute2){
	document.write(eilute1 + " " + eilute2);
	
	//let result = eilute1 + eilute2;
	//document.write(result);
}

function sujungti5Eilutes(eil1, eil2, eil3, eil4, eil5){
	let tarpas = " ";
	let result = eil1.concat(tarpas, eil2, tarpas, eil3, tarpas, eil4, tarpas, eil5, tarpas);
	document.write(result);
}


function rastiZodzioVietaSakinyje(sakinys, zodis){
	let result = sakinys.indexOf(zodis);
	document.write(result);
}