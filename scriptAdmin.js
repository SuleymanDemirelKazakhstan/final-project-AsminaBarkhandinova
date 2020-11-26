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


let list = document.querySelector("#menu");
function addCakes() {

	for(let cake of menu){
		let item = document.createElement('div');
		item.classList.add('menu-item');
		item.innerHTML += `<img class="menu-photo" src="${cake.src}"><div class="menu-name">${cake.name}</div>`;
		item.innerHTML += `<button class="update">Update</button>
							<button class="delete">Delete</button>
							<button class="retrive">Retrive</button>`;
		list.appendChild(item);
	}
	
}

addCakes();