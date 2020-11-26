
let menu = [
	{
		"name": "Galaxy Cake",
		"src": "ProjectDB\\Galaxy_cake.png",
		"price": "10000"
	},

	{
		"name": "Cheesecake",
		"src": "ProjectDB\\Cheesecake.png",
		"price": "8000"
	},

	{
		"name": "Blue cake",
		"src": "ProjectDB\\Blue_cake.png",
		"price": "9000"
	},

	{
		"name": "Purple cake",
		"src": "ProjectDB\\Purple_cake.png",
		"price": "7000"
	},

	{
		"name": "Green Ecler",
		"src": "photo1.png",
		"price": "750"
	},

	{
		"name": "Malevich Cupcakes",
		"src": "photo2.png"
	},

	{
		"name": "Chocolate",
		"src": "photo3.png"
	},

	{
		"name": "Red Velvet",
		"src": "photo4.png"
	},

	{
		"name": "Lemon Cake",
		"src": "photo5.png"
	},

	{
		"name": "Homemade Biscuit",
		"src": "photo6.png"
	}

];

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
		target.style.cssText = "background-color: #fcd5ca";
	}
}

let myIcons = document.querySelectorAll(".icon");
for(let icon of myIcons){
	icon.addEventListener('click', changeColor)
}