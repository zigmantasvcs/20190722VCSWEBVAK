function startGallery(){
	document.querySelector(".modal").addEventListener("click", function(){
		this.style.display = "none";
	});
	drawGallery();
	
	let currentImageId = 0;
	
	document.querySelector("#right").addEventListener("click", function(event){
		event.stopPropagation();
		
		let imageInModal = document.querySelector(".modal .center img");
		currentImageId = imageInModal.getAttribute("id");
		
		currentImageId++;
		let newImage = document.getElementById(currentImageId);
		document.querySelector(".modal .center img").setAttribute("src", newImage.getAttribute("src"));
		document.querySelector(".modal .center img").setAttribute("id", newImage.getAttribute("id"));
	});
	
	
	document.querySelector("#left").addEventListener("click", function(event){
		event.stopPropagation();
		
		let imageInModal = document.querySelector(".modal .center img");
		currentImageId = imageInModal.getAttribute("id");
		
		currentImageId--;
		let newImage = document.getElementById(currentImageId);
		document.querySelector(".modal .center img").setAttribute("src", newImage.getAttribute("src"));
		document.querySelector(".modal .center img").setAttribute("id", newImage.getAttribute("id"));
	});
}

function drawGallery(){
	let allImages = getGallery();

	for(let i = 0; i < allImages.length; i++){
		createImage(allImages[i].imageLink, allImages[i].id, allImages[i].title);
	}
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