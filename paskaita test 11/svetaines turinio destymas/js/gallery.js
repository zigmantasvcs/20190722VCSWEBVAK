function startGallery(){
	let currentImage = 0;

	document.querySelector(".modal").addEventListener("click", function(event){
		document.querySelector(".modal").style.display = "none";
	});

	document.querySelector("#left").addEventListener("click", function(){
		event.stopPropagation();
		currentImage--;
		let nextImage = document.getElementById(currentImage);
		document.querySelector(".modal .center img").setAttribute("src", nextImage.getAttribute("src"));
	});

	document.querySelector("#right").addEventListener("click", function(){
		event.stopPropagation();
		currentImage++;
		let nextImage = document.getElementById(currentImage);
		document.querySelector(".modal .center img").setAttribute("src", nextImage.getAttribute("src"));
	});
}

// pagridine funkcija
function createImageBox(imageLink, id){
	let colDiv = createElementWithOneAttribute("div", "class", "coll4");

	let imageDiv = createElementWithOneAttribute("div", "class", "image");

	let image = createElementWithTwoAttributes("img", "src", imageLink, "id", id);

	imageDiv.appendChild(image);

	colDiv.appendChild(imageDiv);

	let row = document.querySelector(".gallery .row");
	row.appendChild(colDiv);
	
	image.addEventListener("click", function(){
		document.querySelector(".modal").style.display = "flex";
		document.querySelector(".modal .center img").setAttribute("src", this.getAttribute("src"));
		currentImage = this.getAttribute("id");
	});	
}

// 1 sukuria elementa su vienu atributu
function createElementWithOneAttribute(element, attribute, attributeValue){
	let colDiv = document.createElement(element);
	colDiv.setAttribute(attribute, attributeValue);
	return colDiv
}

// 2 sukuria elementa su trim atributais
function createElementWithTwoAttributes(
	element, 
	attribute1, 
	attributeValue1,
	attribute2, 
	attributeValue2){
	let colDiv = document.createElement(element);
	colDiv.setAttribute(attribute1, attributeValue1);
	colDiv.setAttribute(attribute2, attributeValue2);
	return colDiv
}

