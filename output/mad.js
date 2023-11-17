
// ########## functions

// TODO : problem - limit might be 1, but it doesn't stop the script from queueing more than 1 item as long as first haven't finished yet

/**
 * Builds specified ARPA project until desired number of them is reached
 * @param {string} target HTML id of the target ARPA project
 * @param {number} desiredCount Desired number of buildings
 */
function buildArpa(target, desiredCount) {
    let arpa = document.getElementById(target)
    if (!arpa) {
        return
    }

    let count = arpa.children[0].children[2].innerText.substring(8)
    if (count < desiredCount) {
        arpa.children[1].children[4].click()
    }
}

// TODO : what is the vanilla VS way to say that argument was not passed?'

/**
 * Builds specified structure until desired number of them is reached
 * @param {string} target HTML id of the target building
 * @param {number} desiredCount Desired number of buildings
 */
function buildStructure(target, desiredCount) {
    let building = document.getElementById(target)
    if (!building) {
        return
    }

    let count = building.children[0].children[1].innerText
    if (desiredCount == -1 || count < desiredCount) {
        building.children[0].click()
    }
}

// ########## tech

let religion1 = 'Anthropology' // 'Anthropology' or 'Fanaticism'
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

// ########## town

let supercollidersDesiredCount = 5
let monumentDesiredCount = 2
let stockExchangeDesiredCount = 0
let railwayDesiredCount = 0

let factoryLimit = 1
let fissionLimit = 1
let fuelDepotLimit = 2
let containerPortLimit = 7
let freightYardLimit = 10

townScript = setInterval(function () {
    // ARPA
    buildArpa('arpalhc', supercollidersDesiredCount)
    buildArpa('arpamonument', monumentDesiredCount)
    buildArpa('arpastock_exchange', stockExchangeDesiredCount)
    buildArpa('arparailway', railwayDesiredCount)
    buildArpa('arpalaunch_facility', 1)

    // alloy
    document.getElementById('city-biolab')?.children[0].click()

    // titanium
    buildStructure('city-fission_power', fissionLimit)
    buildStructure('city-factory', factoryLimit)

    // craft
    buildStructure('city-wardenclyffe', -1)
    buildStructure('city-cottage', 20)
    buildStructure('city-library', 20)
    buildStructure('city-warehouse', containerPortLimit) // container ports
    buildStructure('city-storage_yard', freightYardLimit)
    buildStructure('city-casino', 5)
    buildStructure('city-tourist_center', -1)
    buildStructure('city-oil_depot', fuelDepotLimit)
    buildStructure('city-boot_camp', 8)

    // other
    document.getElementById('city-basic_housing')?.children[0].click()
    document.getElementById('city-farm')?.children[0].click()
    document.getElementById('city-apartment')?.children[0].click()

    document.getElementById('city-bank')?.children[0].click()
    document.getElementById('city-amphitheatre')?.children[0].click()
    document.getElementById('city-temple')?.children[0].click()
    document.getElementById('city-meditation')?.children[0].click()

    document.getElementById('city-university')?.children[0].click()

    document.getElementById('city-garrison')?.children[0].click()
    document.getElementById('city-hospital')?.children[0].click()

    document.getElementById('city-silo')?.children[0].click()
    document.getElementById('city-shed')?.children[0].click()
    document.getElementById('city-trade')?.children[0].click()
    document.getElementById('city-wharf')?.children[0].click()

    document.getElementById('city-graveyard')?.children[0].click()
    document.getElementById('city-lumber_yard')?.children[0].click()
    document.getElementById('city-sawmill')?.children[0].click()
    document.getElementById('city-rock_quarry')?.children[0].click()
    document.getElementById('city-cement_plant')?.children[0].click()
    document.getElementById('city-foundry')?.children[0].click()
    document.getElementById('city-smelter')?.children[0].click()
    document.getElementById('city-mine')?.children[0].click()
    document.getElementById('city-oil_well')?.children[0].click()
    buildStructure('city-metal_refinery', 12)

    document.getElementById('city-mill')?.children[0].click()
    document.getElementById('city-coal_power')?.children[0].click()
    document.getElementById('city-oil_power')?.children[0].click()
    document.getElementById('city-windmill')?.children[0].click()
}, 60 * 1000)
