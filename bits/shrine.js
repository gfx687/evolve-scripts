let shrineScriptTarget = {shrineScriptTarget} // 'Waning Gibbous Moon'

shrineScript = setInterval(function () {
    let moonCycle = document.getElementById('moon')
    if (!moonCycle) {
        console.log('Shrine Script: moonCycle is empty')
        return
    }

    let moon = document.getElementById('moon').parentElement.parentElement.attributes['aria-label']
    if (moon.textContent != shrineScriptTarget) {
        return
    }

    let shrine = document.getElementById('city-shrine')
    let button = shrine?.children[0]
    button.click()

    // remove from building queue
    let buildQueueElements = document.getElementById('buildQueue').children[2].children
    for (let i = 0; i < buildQueueElements.length; i++) {
        if (buildQueueElements[i].innerText.substring(0, 6) == 'Shrine') {
            buildQueueElements[i].children[0].click()
        }
    }
}, 5 * 1000)
