const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/project', {useNewUrlParser: true, useUnifiedTopology: true});
const Cakes = mongoose.model('Menu', 
	{ name: String,
	  price: Number,
	  src: String,
	  description: String,
	  category: String}, 'Menu');

let allowCrossDomain = function(req, res, next){
	res.header('Access-Control-Allow-Origin', "*");
	res.header('Access-Control-Allow-Header', "*");
	next();
}
app.use(express.json());
app.use(allowCrossDomain);
app.use(express.static('public'));
app.use(morgan());


app.get('/', (req, res)=>{
	Cakes.find({}).limit(6).then(data => res.send(data)).catch(()=> console.log('error'));
	
});

app.get('/menu', (req, res)=>{
	Cakes.find({}).then(data => res.send(data)).catch(()=> console.log('error'));
});

app.get('/menu/:category', (req, res)=>{

	const {category} = req.params;
	if(category==="all"){
		Cakes.find({}).then(data => res.send(data)).catch(()=> console.log('error'));
	}
	else{
		console.log(category);
		Cakes.find({category: category.toLowerCase()}).then(data => res.send(data)).catch(()=> console.log('error'));

	}
	
});

app.get('/menu/:category/:name', (req, res)=>{

	const {category, name} = req.params;
	if(category==="all"){
		Cakes.find({name: name}).then(data => res.send(data)).catch(()=> console.log('error'));
	}
	else{
		console.log(category, name);
		Cakes.find({category: category.toLowerCase(), name: name}).then(data => res.send(data)).catch(()=> console.log('error'));

	}
	
});

app.get('/admin', (req, res)=>{
	Cakes.find({}).then(data => res.send(data)).catch(()=> console.log('error'));
});

//CRUD with mongodb
app.post('/menu/post', (req, res)=>{
	const { name, price, src } = req.body;
	const cake = new Cakes({
		name: name,
		price: price,
		src: src
	});
	cake.save().then(()=> res.send("saved")).catch(()=>console.log("Error"));
});

app.delete('/menu/delete/:id', (req,res)=>{
	const {id} = req.params;
	Cakes.deleteOne({_id: id}).then(()=> res.send('deleted')).catch(()=>console.log('error'));

});

app.put('/menu/update/:id', (req, res)=>{
	const {id} = req.params;
	const newData = req.body;
	Cakes.findOneAndUpdate({_id: id}, newData).then(()=> res.send(newData)).catch(()=>console.log('error'));
});

app.listen(3000, function(){
	console.log('Server 3000 is listening');
});