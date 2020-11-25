
let manu = [
	{
		"name": "Green Ecler",
		"src": "photo1.png"
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

let gallery = document.querySelector("#grid-container");
function addCakes() {

	for(let cake of menu){
		let item = document.createElement('div');
		item.classList.add('grid-item');
		item.innerHTML += `<img src="${cake.src}"><p>${cake.name}</p>`;
		gallery.appendChild(item);
	}
	
}

addCakes();