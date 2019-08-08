function startGallery(){
	document.querySelector(".modal").addEventListener("click", function(){
		this.style.display = "none";
	});
}
function createImage(imageLink, id){
	let divMain = document.createElement("div"); 
	//let divMainClass = document.createAttribute("class", "coll4");
	divMain.setAttribute("class", "coll4");

	let divImage = document.createElement("div");
	divImage.setAttribute("class", "image");
	divMain.appendChild(divImage);

	let image = document.createElement("img");
	image.setAttribute("src", imageLink);
	image.setAttribute("id", id);
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