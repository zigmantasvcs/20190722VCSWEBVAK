function padetiAsmeniIMasyva(vardas, pavarde, amzius, asmenys){
	let asmuo = {
		vardas: vardas,
		pavarde: pavarde,
		amzius: amzius
	};
	
	asmenys.push(asmuo);
	
	return asmenys;
}