// nmap <leader>r :call ExecInTmuxSplit('node main.js')<CR>

// 1) create a type (jsdoc? Constructor function?) For the config JSON
// 2) read JSON config
// 3) read bites
// 4) insert variables into bites
// 5) insert default values
// 6) write output

const fs = require('node:fs');

const dataRaw = fs.readFileSync('./input/config.json')
const data = JSON.parse(dataRaw)

for (let i = 0; i < data.entries.length; i++) {
    console.log('###', data.entries[i].name);

    const bit = fs.readFileSync('./bits/' + data.entries[i].name + '.js',  'utf8')
    console.log(bit)
    console.log();
}

// class Config {
//     constructor(entries) {
//         this.Entries = entries
//     }
// }

// class ConfigEntry {
//     constructor(name, variables) {
//         this.Name = name
//         this.Variables = variables
//     }
// }

// class ConfigEntryVariable {
//     constructor(name, value) {
//         this.Name = name
//         this.Value = value
//     }
// }

// const config = new Config()
// console.log(config.Name);
