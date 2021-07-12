var http=require('http');
var fs=require('fs');
var url=require('url');

http.createServer(function(req,res)
{
    var q=url.parse(req.url,true);
    console.log(q); 
   var filename="."+q.pathname;
   if(filename=='./'){filename='./index';}

    filename=filename+".html";
    console.log(filename);
    fs.readFile(filename  ,function(err,data)
    {
        if(err)
        {
            res.writeHead(404,{'Content-Type':'text.html'});
            return res.end("404 not found");
        }


  res.writeHead(200,{'Content-Type': 'text/html'});
    res.write(data);
    console.log("...incoming request:" + req.url);
    res.end();
    // res.end('<h1><em>Hello World! blah blah blah</em></h1>');
})

}).listen(8080);

console.log("Listening to port 8080...")