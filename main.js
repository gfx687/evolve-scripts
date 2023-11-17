// nmap <leader>r :call ExecInTmuxSplit('node main.js')<CR>

// TODO : check that all variables are filled
// TODO : default values
// TODO : read multiple files from input and create multiple outputs with the same name as input

const fs = require('node:fs');

// handleConfig('./input/test.json', './output/test.js')

const filenames = fs.readdirSync('./input')
console.log(filenames);

for (let i = 0; i < filenames.length; i++) {
    handleConfig(`./input/${filenames[i]}`, `./output/${filenames[i].replace('json', 'js')}`)
}

function handleConfig(configPath, outputPath) {
    const configRaw = fs.readFileSync(configPath)
    const config = JSON.parse(configRaw)

    let result = ''
    for (let i = 0; i < config.entries.length; i++) {
        let bit = fs.readFileSync('./bits/' + config.entries[i].name + '.js', 'utf8')

        for (let j = 0; j < config.entries[i].variables?.length; j++) {
            let value = config.entries[i].variables[j].value
            if (typeof value == 'string')
                value = `'${value}'`

            bit = bit.replace(`{${config.entries[i].variables[j].name}}`, value)
        }

        result += `\n// ########## ${config.entries[i].name}\n\n`
        result += bit
    }

    console.log(result);

    fs.writeFileSync(outputPath, result)
}
