function startGallery(){
	document.querySelector(".modal").addEventListener("click", function(){
		this.style.display = "none";
	});
	let drawnImages = drawGallery("");
	
	document.querySelector("#right").addEventListener("click", function(event){
		event.stopPropagation();
		
		let imageInModal = document.querySelector(".modal .center img");
		let currentImageId = imageInModal.getAttribute("id");
		
		let positionInArray = getImageIndex(drawnImages, currentImageId);
		
		if(positionInArray < drawnImages.length - 1){
			positionInArray++;
		}
		else{
			positionInArray = 0;
		}
		
		
		document.querySelector(".modal .center img").setAttribute("src", drawnImages[positionInArray].imageLink);
		document.querySelector(".modal .center img").setAttribute("id", drawnImages[positionInArray].id);
	});
	
	document.querySelector("#left").addEventListener("click", function(event){
		event.stopPropagation();
		
		let imageInModal = document.querySelector(".modal .center img");
		let currentImageId = imageInModal.getAttribute("id");
		
		let positionInArray = getImageIndex(drawnImages, currentImageId);
		
		if(positionInArray > 0){
			positionInArray--;
		}
		else{
			positionInArray = drawnImages.length - 1;
		}
		
		document.querySelector(".modal .center img").setAttribute("src", drawnImages[positionInArray].imageLink);
		document.querySelector(".modal .center img").setAttribute("id", drawnImages[positionInArray].id);
	});
	
	document.querySelector("#filter").addEventListener("click", function(){
		let phrase = document.querySelector("#title").value;
		drawnImages = drawGallery(phrase);
	});
	
}

function getImageIndex(images, id){
	for(let i = 0; i < images.length; i++){
		if(images[i].id == id){
			return i;
		}
	}
}

function drawGallery(phrase){
	document.querySelector(".gallery .row").innerHTML = "";
	let allImages = getGallery();
	let filteredArray = [];
	for(let i = 0; i < allImages.length; i++){
		if(allImages[i].title.toLowerCase().includes(phrase.toLowerCase())){
			createImage(allImages[i].imageLink, allImages[i].id, allImages[i].title);
			filteredArray.push(allImages[i]);
		}
	}
	
	return filteredArray;
}

function createImage(imageLink, id, title){
	let divMain = document.createElement("div"); 
	//let divMainClass = document.createAttribute("class", "coll4");
	divMain.setAttribute("class", "coll4");

	let divImage = document.createElement("div");
	divImage.setAttribute("class", "image");
	divMain.appendChild(divImage);

	let image = document.createElement("img");
	image.setAttribute("src", imageLink);
	image.setAttribute("id", id);
	image.setAttribute("title", title);
	divImage.append(image);
	
	image.addEventListener("click", function(){
		document.querySelector(".modal .center img").remove();
		let image = document.createElement("img");
		image.setAttribute("src", this.getAttribute("src"));
		image.setAttribute("id", this.getAttribute("id"));
		document.querySelector(".modal .center").appendChild(image);
		
		document.querySelector(".modal").style.display = "flex";
	});

	let gallery = document.querySelector(".gallery .row");
	gallery.appendChild(divMain);
}

function getGallery(){
	return [
		{ imageLink: "https://picsum.photos/id/599/800/800", title: "Kalnai", id: 1},
		{ imageLink: "https://picsum.photos/id/520/800/800", title: "Tiltai", id: 2},
		{ imageLink: "https://picsum.photos/id/225/800/800", title: "Arbata", id: 3},
		{ imageLink: "https://picsum.photos/id/950/800/800", title: "Horizontas", id: 4},
		{ imageLink: "https://picsum.photos/id/1056/800/800", title: "Debesys", id: 5},
		{ imageLink: "https://picsum.photos/id/1057/800/800", title: "Kalnai ir jūra", id: 6},
		{ imageLink: "https://picsum.photos/id/1058/800/800", title: "Aikštė", id: 7},
		{ imageLink: "https://picsum.photos/id/1059/800/800", title: "Paroda", id: 8},
		{ imageLink: "https://picsum.photos/id/1060/800/800", title: "Kava", id: 9},
		{ imageLink: "https://picsum.photos/id/1061/800/800", title: "Jūra ir paplūdimys", id: 10},
		{ imageLink: "https://picsum.photos/id/1062/800/800", title: "Šuo", id: 11},
		{ imageLink: "https://picsum.photos/id/1063/800/800", title: "Miškas ir kelias", id: 12},
		{ imageLink: "https://picsum.photos/id/1064/800/800", title: "Rūkas ir miškas", id: 13},
		{ imageLink: "https://picsum.photos/id/1065/800/800", title: "Gatvė ir jūra", id: 14},
		{ imageLink: "https://picsum.photos/id/1066/800/800", title: "Kūdikis", id: 15}
	];
}