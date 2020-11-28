
async function loadJson() {
  const response = await fetch('http://localhost:3000'); 
  const json = await response.json();
  let bestsellers = json;
  let gallery = document.querySelector("#grid-container");
  for(let i = 0; i<bestsellers.length; i++){
		let item = document.createElement('div');
		item.classList.add('grid-item');
		item.innerHTML += `<img src="${bestsellers[i].src}"><p>${bestsellers[i].name}</p>`;
		gallery.appendChild(item);
	}
  console.log(bestsellers);
}
loadJson();



/*let bestsellers = [
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

];*/

/*let gallery = document.querySelector("#grid-container");
function addCakes() {

	for(let i = 0; i<bestsellers.length; i++){
		let item = document.createElement('div');
		item.classList.add('grid-item');
		item.innerHTML += `<img src="${bestsellers[i].src}"><p>${bestsellers[i].name}</p>`;
		gallery.appendChild(item);
	}
	
}

addCakes();*/