const app = require('express')();
const serveStatic = require('serve-static');

app.use(serveStatic(__dirname + "/dist"));

const port = process.env.PORT || 80
app.listen(port, function(err) {
    if (err) {
        console.log('Failed to start server');
    } else {
        console.log('Server started in '+ port);
    }
});
