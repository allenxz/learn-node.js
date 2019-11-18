(async () => {
  const fs = require('fs')
  // const data = fs.readFileSync('./package.json')
  // console.log(data.toString())
  const {promisify} = require('util')
  const readFile = promisify(fs.readFile)

  const data = await readFile('./package.json')
  console.log(data.toString())
})()
