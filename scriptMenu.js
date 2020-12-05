async function loadJson() {
  const response = await fetch('http://localhost:3000/menu'); 
  const json = await response.json();
  let menu = json;
	const iconUrl = "favourite.png";

	let gallery = document.querySelector("#grid-container");
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
//does not work
async function loadFilter() {
  const response = await fetch('http://localhost:3000/menu/filter'); 
  const json = await response.json();
  let menu = json;
	const iconUrl = "favourite.png";

	let gallery = document.querySelector("#grid-container");
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

let buttonSearch = document.getElementById("filter");
buttonSearch.addEventListener('click', loadFilter());