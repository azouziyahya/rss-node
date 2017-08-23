/**
 * Created by Yahya on 02/08/2017.
 */
var express=require('express');
var bodyParser=require('body-parser');
var app=express();
//app.use(bodyParser.json());
var PORT=process.env.PORT ||3000 ;
var FeedParser = require('feedparser');
var request = require('request');
var parser = require('rss-parser');
/*
Feed.load('http://blog.reklammuvek.com//feeds/posts/default?alt=rss', function(err, rss){
    myJson=rss;


  newRss=new myRss(rss);

    app.get('/',function (req,res) {
        res.setHeader('content-type', 'application/rss+xml');

        res.send(newRss);

    });
});
*/
//console.log("title : "+myJson);

/*
parser.parseURL('http://blog.reklammuvek.com//feeds/posts/default?alt=rss', function(err, parsed) {
    console.log(parsed.feed.title);
    parsed.feed.entries.forEach(function(entry) {
        console.log(entry.title + ':' + entry.link);
    })*

    app.get('/',function (req,res) {
        res.set('Content-Type', 'application/rss+xml');

        res.send(parsed);

    });
});
*/
var pd = require('pretty-data').pd;
var url='http://blog.reklammuvek.com//feeds/posts/default?alt=rss';
request({url:url,xml:true},function (error,response,body) {
    if(error)
    {
        console.log('unable to fetch feed . ');
    }
    else
    {
       console.log(JSON.stringify(body));




    }


});

app.get('/',function (req,res) {
    // res.set('Content-Type', 'application/rss+xml');

    res.send("hello");


});
app.listen(PORT,function () {
    console.log("express server started !! ");
});