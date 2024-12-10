import * as fs from "node:fs";

const readStream = fs.createReadStream('text.txt', {end:3});

readStream.on('data', (chunk) => {
    console.log('Get data: '+chunk)
})

readStream.on('data', (chunk) => {
    console.log('Get data: '+chunk)
})