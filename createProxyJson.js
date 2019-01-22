var fs = require('fs');

var content = undefined;
var env = process.env.GLOABAL_ENV;

if (env.trim() === 'test') {
  content = {
    "/todos": {
      "target": "https://jsonplaceholder.typicode.com/",
      "secure": false,
      "changeOrigin": true,
      "logLevel": "debug"
    },
    "/state": {
      "target": "http://services.groupkt.com/",
      "secure": false,
      "changeOrigin": true,
      "logLevel": "debug"
    }
  };
}


fs.writeFile('proxy.conf.json', JSON.stringify(content), function (err) {
  if (err) throw err;
  console.log('proxy.config.json created successfully');
});
