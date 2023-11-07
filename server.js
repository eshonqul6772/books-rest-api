const http = require('http');
const PORT = process.env.PORT || 4000;
require('url')

const posts = require('./books.json');

const get = require('./get');
const post = require('./post');
const put = require('./put');
const remove = require('./delete');
const getBody = require('./getBody')

const functionServer = ((request, response) => {

    request.posts = posts

    request.query = new URL(request.url, `https://${request.headers.host}`)

    switch (request.method) {
        case 'GET':
            getBody(request, response, get);
            break;

        case 'POST':
            getBody(request, response, post);
            break;

        case 'PUT':
            getBody(request, response, put);
            break;

        case 'DELETE':
            getBody(request, response, remove);
            break;

        default:
            response.statusCode = 400;
            response.write('No Response');
            response.end();
    }
});

const server = http.createServer(functionServer)

server.listen(PORT, (err) => {
    err ? console.error(err) : console.log(`listening on port ${PORT}`);
});