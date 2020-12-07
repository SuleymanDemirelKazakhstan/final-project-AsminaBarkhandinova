async function loadJson(){
	const response = await fetch('http://localhost:3000/admin');
	const json = await response.json();
	let menu = json;
	let list = document.querySelector("#menu");
	list.innerHTML = "";
	function addCakes() {

		for(let cake of menu){
			let item = document.createElement('div');
			item.classList.add('menu-item');
			if(cake.isShown === false){
				item.style.opacity = "0.3";
			}
			item.innerHTML += `<img class="menu-photo" src="${cake.src}"><div class="menu-name">${cake.name}</div>`;
			item.innerHTML += `<button class="update">Update</button>
								<button onclick="deleteItem('${cake._id}')" class="delete">Delete</button>
								<button onclick="retriveItem('${cake._id}')"class="retrive">Retrive</button>`;
			list.appendChild(item);
		}
		
	}

	addCakes();
}
 loadJson();

let modal = document.getElementById("my_modal");
let btn = document.getElementById("btn_modal_window");
let update = document.querySelectorAll(".update");
for(let up of update){
	up.onclick = function(){
	modal.style.display = "block";
}
}



 btn.onclick = function () {
    modal.style.display = "block";
 }

 window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function createItem(){
	let name = document.getElementById("name");
	let price = document.getElementById("price");
	let src = document.getElementById("src");
	let description = document.getElementById("description");
	let category = document.getElementById("category");
	const data = {
		name: name.value,
		price: price.value,
		src: src.value,
		description: description.value,
		category: category.value,
	};

	console.log(data);
	$.ajax({
	  type: "POST",
	  url: `http://localhost:3000/admin`,
	  data: JSON.stringify(data),
	  success: function(result) {
	  	console.log(data);
        loadJson();
    }, 
      error: function(error){
      	console.log(error);
      },
	  contentType: 'application/json'
	});
	
}

function deleteItem(id){
	
	$.ajax({
    url: `http://localhost:3000/admin/${id}`,
    crossDomain: true,
    type: 'DELETE',
    success: function(result) {
        loadJson();
    }
});
}

function retriveItem(id){
	
	$.ajax({
    url: `http://localhost:3000/admin/retrive/${id}`,
    crossDomain: true,
    type: 'PUT',
    success: function(result) {
        loadJson();
    }
});
}

/*function updateItem(id){

	$.ajax({
    url: `http://localhost:3000/admin/update/${id}`,
    crossDomain: true,
    type: 'PUT',
    success: function(result) {
        loadJson();
    }
});
}*/
