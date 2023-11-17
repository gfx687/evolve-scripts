const fs = require('node:fs');

const filenames = fs.readdirSync('./input')

for (let i = 0; i < filenames.length; i++) {
    handleConfig(`./input/${filenames[i]}`, `./output/${filenames[i].replace('json', 'js')}`)
}

function handleConfig(configPath, outputPath) {
    const configRaw = fs.readFileSync(configPath)
    const config = JSON.parse(configRaw)

    let result = ''
    for (let i = 0; i < config.entries.length; i++) {
        let bit = fs.readFileSync('./bits/' + config.entries[i].name + '.js', 'utf8')

        const re = /{{(.*)}}/g
        const placeholders = [...bit.matchAll(re)]

        for (let j = 0; j < placeholders.length; j++) {
            const placeholder = placeholders[j][0]
            const splits = placeholders[j][1].split(':')
            if (splits.length > 2)
                throw new Error('more than 2 splits in template placeholder. Data: ' + splits)

            const variableName = splits[0]
            const defaultValue = splits.length > 1 ? splits[1] : null
            const configValue = config.entries[i].variables?.find(x => x.name == variableName)

            if (!configValue && !defaultValue) {
                throw new Error('neither default value nor config value are set for ' + variableName)
            }

            let resultValue = defaultValue
            if (configValue) {
                resultValue = typeof configValue.value == 'string' ? `'${configValue.value}'` : configValue.value
            }

            bit = bit.replace(placeholder, resultValue)
        }

        result += `\n// ########## ${config.entries[i].name}\n\n`
        result += bit
    }

    fs.writeFileSync(outputPath, result)
}
