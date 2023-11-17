let attackScriptTarget = {{attackScriptTarget:'gov0'}} // 'gov0' / 'gov1' / 'gov2'
let attackScriptChance = {{attackScriptChance:50}} // [0-100]

attackScript = setInterval(function () {
    let gov = document.getElementById(attackScriptTarget)
    if (!gov) {
        console.log('Attack Script: wrong page')
    } else {
        let attackButton = gov.children[1].children[0]
        let label = attackButton.attributes['label']
        let labelText = label.textContent
        let chance = labelText.replace(/^.*?(\d+).*/, '$1')
        if (chance >= attackScriptChance) {
            attackButton.click()
        }
    }
}, 5 * 1000)
