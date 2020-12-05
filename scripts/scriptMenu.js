const iconUrl = "html/favourite.png";

async function loadJson() {
  const response = await fetch('http://localhost:3000/menu'); 
  const json = await response.json();
  let menu = json;
	

	let gallery = document.querySelector("#grid-container");
	gallery.innerHTML = "";
	function addCakes() {

		for(let cake of menu){
			let item = document.createElement('div');
			item.classList.add('grid-item');
			item.innerHTML += `<img class="photo" src="${cake.src}"><p>${cake.name}</p><p>${cake.price} tenge</p>`;
			item.innerHTML += `<img class="icon" src="${iconUrl}"/>`
			gallery.appendChild(item);
			
		}
		
	}

	addCakes();
	
}
loadJson();

function changeColor(event){
	let target = event.target;
	if(!target.classList.contains("icon")){
		return;
	}
	if(target.classList.contains('_active')){

		target.classList.remove('_active');
		target.style.cssText = "background-color: transparent";
	}
	else{
		target.classList.add('_active');
		target.style.cssText = "background-color: pink";
		console.log('clicked');
	}
}

let myIcons = document.querySelectorAll(".icon");
for(let icon of myIcons){
	icon.addEventListener('clicked', changeColor);

}

async function loadFilter() {

	let selected = document.getElementById("category");
	let nameField = document.getElementById("productName");
	let result = selected.value;
	let nameValue = nameField.value;
	console.log(nameValue);
	console.log(result);
	
		if(nameValue === "" && result === "all"){

			loadJson();//
			return;
		}
		else{
			const response = await fetch(`http://localhost:3000/menu/${result}/${nameValue}`); 
			  const json = await response.json();
			  let menu = json;
				

				let gallery = document.querySelector("#grid-container");
				gallery.innerHTML = "";
				function addCakes() {

					for(let cake of menu){
						let item = document.createElement('div');
						item.classList.add('grid-item');
						item.innerHTML += `<img class="photo" src="${cake.src}"><p>${cake.name}</p><p>${cake.price} tenge</p>`;
						item.innerHTML += `<img class="icon" src="${iconUrl}"/>`
						gallery.appendChild(item);
						
					}
					
				}

				addCakes();
				return;

		}
		
	
	

  
	
}

