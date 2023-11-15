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
