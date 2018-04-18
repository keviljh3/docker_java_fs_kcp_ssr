var http = require('http');
var url1 = require('url');

    http.createServer(function(req, res){ 
        var time=new Date();	
        var html = '<html>'  
        +'<head>'  
        +'<title>DaoCloud Nodejs Reboot</title>'  
        +'</head>'  
        +'<body>'  
		+ time+'<br>';
		var cbool='Fail';
        try{
		var arg = url1.parse(req.url, true).query;
		if (arg.rb=='true')
		{
          cbool='Success';
		}
		}catch (err){}
		html=html+   'Reboot DaoCloud '+cbool+' !' 
        +'</body>'  
        +'</html>';  
        res.writeHead(200,{'Content-Type' : 'text/html'});  
        res.write(html);  
        res.end();  
    }).listen(18888);  