const http = require('http')
const fs = require('fs')

http
  .createServer((req, res) => {
    const { method, url } = req
    if (method === 'GET' && url === '/') {
      fs.readFile('./index.html', (err, data) => {
        res.setHeader('Content-Type', 'text/html')
        res.end(data)
      })
    } else if (method === 'GET' && url === '/users') {
      cors(res)
      res.end(JSON.stringify({ name: 'tom', age: 20 }))
    }
    // 处理预检请求,预肩请求会先发一个OPTIONS请求
    else if (method == 'OPTIONS' && url == '/users') {
      cors(res)
      res.end()
    }
  })
  .listen(3000)

function cors(res) {
  res.setHeader('Content-Type', 'application/json')
  res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:8080')
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader("Set-Cookie", "cookie1=va22;")
  res.setHeader('Access-Control-Allow-Headers', 'X-Token,Content-Type')
}
