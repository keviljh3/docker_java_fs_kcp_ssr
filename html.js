var http = require('http');

    http.createServer(function(req, res){ 
        var time=new Date();	
        var html = '<html>'  
        +'<head>'  
        +'<title>jel Nodejs 80</title>'  
        +'</head>'  
        +'<body>'  
		+ time+'<br>'
        +'</body>'  
        +'</html>';  
        res.writeHead(200,{'Content-Type' : 'text/html'});  
        res.write(html);  
        res.end();  
    }).listen(80); 
