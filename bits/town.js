let supercollidersDesiredCount = {supercollidersDesiredCount}
let monumentDesiredCount = {monumentDesiredCount}
let stockExchangeDesiredCount = {stockExchangeDesiredCount}
let railwayDesiredCount = {railwayDesiredCount}

let factoryLimit = {factoryLimit}
let fissionLimit = {fissionLimit}
let fuelDepotLimit = {fuelDepotLimit}
let containerPortLimit = {containerPortLimit}
let freightYardLimit = {freightYardLimit}

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
