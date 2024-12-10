import * as fs from "node:fs";

const writeStream = fs.createWriteStream('text.txt', {flags:'a', encoding: 'utf-8'});
writeStream.write('This is first stream\n');
writeStream.write('This is second stream\n');