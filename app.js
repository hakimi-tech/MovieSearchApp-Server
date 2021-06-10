const express = require('express');
const app = express();
const path =require('path');
const request = require('request');


app.set('view engine', 'ejs');
app.set('views', path.join( __dirname, '/views') );

app.use(express.static('public'));

app.get('/results', (req,res)=>{

let query = req.query.search;

    request('https://api.themoviedb.org/3/search/movie?api_key=7c831b540d5d2e2ba94c5e5f569e987e&query='+query, (error,response,body)=>{
        if(error){
            console.log('error');
        }
        let data = JSON.parse(body);
        res.render('movie',{data:data, searchQuery:query});
    })

})

app.get('/search',(req,res) =>{
    res.render('search');
});


app.listen(3002,()=>{
    console.log('server start running at port 3002');
});