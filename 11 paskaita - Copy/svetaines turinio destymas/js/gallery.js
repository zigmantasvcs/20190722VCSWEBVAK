function startGallery(){
	document.querySelector(".modal").addEventListener("click", function(){
		this.style.display = "none";
	});
	
	let images = drawGallery("");
	
	let currentImageId = 0;
	
	document.querySelector("#filter").addEventListener("click", function(){
		let phrase = document.querySelector("#title").value;
		images = drawGallery(phrase);
	});
	
	
	document.querySelector("#right").addEventListener("click", function(event){
		event.stopPropagation();
		let imageInModal = document.querySelector(".modal .center img");
		currentImageId = imageInModal.getAttribute("id");
		let index = getImageIndex(images, imageInModal.getAttribute("id"));
		
		if(index < images.length-1){
			index++;
		}
		else{
			index = 0;
		}
		
		document.querySelector(".modal .center img").setAttribute("src", images[index].imageLink);
		document.querySelector(".modal .center img").setAttribute("id", images[index].id);
	});
	
	
	document.querySelector("#left").addEventListener("click", function(event){
		event.stopPropagation();
		
		let imageInModal = document.querySelector(".modal .center img");
		currentImageId = imageInModal.getAttribute("id");
		let index = getImageIndex(images, imageInModal.getAttribute("id"));
		
		if(index > 1){
			index--;
		}
		else{
			index = images.length-1;
		}
		
		document.querySelector(".modal .center img").setAttribute("src", images[index].imageLink);
		document.querySelector(".modal .center img").setAttribute("id", images[index].id);
	});
}

function getImageIndex(images, id){
	for(let i = 0; i < images.length; i++){
		if(images[i].id == id){
			return i;
		}
	}
}

function drawGallery(title){
	document.querySelector(".gallery .row").innerHTML = "";
	let allImages = getGallery();

	for(let i = 0; i < allImages.length; i++){
		if(allImages[i].title.includes(title)){
			createImage(allImages[i].imageLink, allImages[i].id, allImages[i].title);
		}
	}
	
	return allImages;
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