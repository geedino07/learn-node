const os = require('os')

//info about current user

const user = os.userInfo()
console.log(user);


// method return the systems uptime in seconds
console.log(`the systems Uptime is ${os.uptime()/3600} Hours`)


const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freemem: os.freemem(),
}

console.log(currentOS)