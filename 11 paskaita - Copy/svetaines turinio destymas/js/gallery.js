function startGallery(){
	document.querySelector(".modal").addEventListener("click", function(){
		this.style.display = "none";
	});
	
	drawGallery("");
	
	document.querySelector("#search").addEventListener("click", function(){
		document.querySelector(".gallery .row").innerHTML = '';
		drawGallery(document.querySelector("#filter").value);
	});
	
	
}

function drawGallery(filter){
	let allImages = getGallery();
		
	for(let i = 0; i < allImages.length; i++){
		if(allImages[i].title.includes(filter)){
			createImage(allImages[i].imageLink, allImages[i].id);
		}
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
		document.querySelector(".modal .center").appendChild(image);
		
		document.querySelector(".modal").style.display = "flex";
	});

	let gallery = document.querySelector(".gallery .row");
	gallery.appendChild(divMain);
}