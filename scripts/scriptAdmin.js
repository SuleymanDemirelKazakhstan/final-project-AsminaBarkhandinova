async function loadJson(){
	const response = await fetch('http://localhost:3000/admin');
	const json = await response.json();
	let menu = json;
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
}
 loadJson();

let modal = document.getElementById("my_modal");
let btn = document.getElementById("btn_modal_window");


 btn.onclick = function () {
    modal.style.display = "block";
 }

 span.onclick = function () {
    modal.style.display = "none";
 }

 window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
