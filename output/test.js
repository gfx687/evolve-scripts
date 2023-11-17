
// ########## resources

resourceScript = setInterval(function () {
    lumber = document.getElementById('city-lumber')
    chrysotile = document.getElementById('city-chrysotile')
    bones = document.getElementById('city-slaughter')
    stone = document.getElementById('city-stone')

    if (lumber)
        for (let i = 0; i < 1000; i++)
            lumber.children[0].click()
    if (chrysotile)
        for (let i = 0; i < 1000; i++)
            chrysotile.children[0].click()
    if (bones)
        for (let i = 0; i < 1000; i++)
            bones.children[0].click()
    if (stone)
        for (let i = 0; i < 1000; i++)
            stone.children[0].click()

    for (let i = 0; i < 1000; i++) document.getElementById('city-food')?.children[0].click()
}, 1 * 1000)

// ########## attack

let attackScriptTarget = 'gov0' // 'gov0' / 'gov1' / 'gov2'
let attackScriptChance = 50 // [0-100]

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

// ########## tech

let religion1 = 'Fanaticism' // 'Anthropology' or 'Fanaticism'
let religion2 = 'Study Ancients' // 'Study Ancients' or 'Deify Ancients'

techScript = setInterval(function () {
    let religionSkip1 = religion1 == 'Anthropology' ? 'Fanaticism' : 'Anthropology'
    let religionSkip2 = religion2 == 'Study Ancients' ? 'Deify Ancients' : 'Study Ancients'
    let tech = document.getElementById('tech')
    let items = tech.getElementsByClassName('action vb')
    for (let i = 0; i < items.length; i++) {
        if (items[i].children[0].textContent == religionSkip1) {
            continue
        }
        if (items[i].children[0].textContent == religionSkip2) {
            continue
        }

        if (!items[i].classList.contains("cnam")) {
            items[i].children[0].click()
        }
    }
}, 60 * 1000)
