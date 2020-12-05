const path = require('path');
const express = require('express');
const app = express();

app.use(express.static('C:\\Users\\77714\\Desktop\\web\\final-project-AsminaBarkhandinova'));

app.get('/main', (req,res)=>{
	res.sendFile(path.resolve(__dirname, 'C:\\Users\\77714\\Desktop\\web\\final-project-AsminaBarkhandinova\\html', 'MainPage.html'));
});

app.get('/admin', (req,res)=>{
	res.sendFile(path.resolve(__dirname, 'C:\\Users\\77714\\Desktop\\web\\final-project-AsminaBarkhandinova\\html', 'AdminPanel.html'));
});

app.get('/menu', (req,res)=>{
	res.sendFile(path.resolve(__dirname, 'C:\\Users\\77714\\Desktop\\web\\final-project-AsminaBarkhandinova\\html', 'MenuListPage.html'));
});

app.listen(4000, function(){
	console.log('Static files serving');
});