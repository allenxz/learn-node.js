const os = require('os')
const cpuStat = require('cpu-stat')
module.exports = function () {
  const mem = os.freemem() / os.totalmem() * 100
  console.log(`内存占用率为${mem}%`)

  cpuStat.usagePercent((err,percent) => {
    console.log(`CPU占用率为${percent}%`)
  })
}