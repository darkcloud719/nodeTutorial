// const { readFile, writeFile } = require('fs')

// readFile('./content/first.txt', 'utf8', (err, result) => {
//     if (err) {
//         console.log(err)
//         return
//     }
//     const first = result
//     readFile('./content/second.txt', 'utf8', (err, result) => {
//         if (err) {
//             console.log(err)
//             return
//         }
//         const second = result
//         writeFile('./content/result-async.txt', `Here is the result : ${first}, ${second}`, (err, result) => {
//             if (err) {
//                 console.log(err)
//                 return
//             }
//             console.log(result)
//         })
//     })

// })

// const { readFileSync, writeFileSync } = require('fs')

// console.log('start')

// const first = readFileSync('./content/first.txt', 'utf8')
// const second = readFileSync('./content/second.txt', 'utf8')

// writeFileSync(
//     './content/result-sync.txt',
//     `Here is the result : ${first}, ${second}`,
//     { flag: 'a' }
// )

// console.log('done with this task')
// console.log('starting the next one')

// const { readFile, writeFile } = require('fs')
// console.log('start')
// readFile('./content/first.txt', 'utf8', (err, result) => {
//     if (err) {
//         console.log(err)
//         return
//     }
//     const first = result
//     readFile('./content/second.txt', 'utf8', (err, result) => {
//         if (err) {
//             console.log(err)
//             return
//         }
//         const second = result
//         writeFile('./content/result-async.txt', `Here is the result : ${first}, ${second}`, (err, result) => {
//             if (err) {
//                 console.log(err)
//                 return
//             }
//             console.log('done with this task')
//         })
//     })
// })
// console.log('starting next tase')

// const http = require('http')

// const server = http.createServer((req, res) => {
//     console.log(req)
//     res.write('Welcome to our home page')
//     res.end()
// })

// server.listen(5000)

const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our home page')
    }
    else if (req.url === '/about') {
        res.end('1111Here is our short history')
    }
    else {
        res.end(`
    <h1>Oops!</h1>   
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>
    `)
    }
})

server.listen(5000)