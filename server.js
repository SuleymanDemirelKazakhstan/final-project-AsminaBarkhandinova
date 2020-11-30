const path = require('path');
const express = require('express');
const app = express();

app.use(express.static('C:\\Users\\77714\\Desktop\\web\\final-project-AsminaBarkhandinova'));

app.get('/main', (req,res)=>{
	res.sendFile(path.resolve(__dirname, 'C:\\Users\\77714\\Desktop\\web\\final-project-AsminaBarkhandinova', 'MainPage.html'));
});

app.get('/admin', (req,res)=>{
	res.sendFile(path.resolve(__dirname, 'C:\\Users\\77714\\Desktop\\web\\final-project-AsminaBarkhandinova', 'AdminPanel.html'));
});

app.get('/menu', (req,res)=>{
	res.sendFile(path.resolve(__dirname, 'C:\\Users\\77714\\Desktop\\web\\final-project-AsminaBarkhandinova', 'MenuListPage.html'));
});

app.listen(4000, function(){
	console.log('main server is listening');
});