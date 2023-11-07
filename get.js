module.exports = (request, response) => {
  const url = request.url.split("?")[0]

  switch (url) {

    case '/books':
      if (request.query.searchParams.get('id')) {
        const id = request.query.searchParams.get('id')
        response.statusCode = 200
        response.setHeader('Content-Typ', 'application/jso')
        response.write(JSON.stringify(request.posts[id]))
        response.end()
      } else {
        response.statusCode = 200
        response.setHeader('Content-Typ', 'application/jso')
        response.write(JSON.stringify(request.posts))
        response.end()
      }
      break
    default:
      response.statusCode = 400
      response.write(`CANNOT GET ${request.url}`)
      response.end()
      break

  }
}