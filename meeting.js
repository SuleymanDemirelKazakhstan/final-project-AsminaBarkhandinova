const express = require('express');
const app = express();

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


app.get('/', (req, res)=>{
	Cakes.find({}).limit(6).then(data => res.send(data)).catch(()=> console.log('error'));
	
});

app.get('/menu', (req, res)=>{
	Cakes.find({}).then(data => res.send(data)).catch(()=> console.log('error'));
});
//does not work
app.get('/menu/filter', (req, res)=>{
	const category = req.query.category;

	Cakes.find({category: category.toLowerCase()}).then(data => res.send(data)).catch(()=> console.log('error'));

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

/* CRUD with arrays, works
app.get('/best', (req, res)=>{
	res.send(bestsellers);
});

app.post('/best', (req, res)=>{
	const { name, src } = req.body;
	console.log(name, src);
});

app.put('/best/:n', (req, res)=>{
	const {n} = req.params;
	const { name, src } = req.body;
	bestsellers[n].name = name;
	bestsellers[n].src = src;
	res.send(bestsellers[n]);
});

app.delete('/best/:n', (req, res)=>{
	const {n} = req.params;
	bestsellers.splice(n, 1);
	res.send(bestsellers);
	
})*/

app.listen(3000, function(){
	console.log('Server 3000 is listening');
});