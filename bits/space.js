spaceScript = setInterval(function () {
    // planet
    document.getElementById('space-satellite')?.children[0].click()
    document.getElementById('space-propellant_depot')?.children[0].click()

    // moon
    buildStructure('space-moon_base', 5)
    buildStructure('space-iridium_mine', 1)
    buildStructure('space-helium_mine', 5)
    buildStructure('space-observatory', 5)

    // red
    document.getElementById('space-spaceport')?.children[0].click()
    document.getElementById('space-red_tower')?.children[0].click()
    document.getElementById('space-living_quarters')?.children[0].click()
    buildStructure('space-garage', 4)
    document.getElementById('space-red_mine')?.children[0].click()
    document.getElementById('space-fabrication')?.children[0].click()
    document.getElementById('space-red_factory')?.children[0].click()
    document.getElementById('space-ziggurat')?.children[0].click()

    // hot
    buildStructure('space-geothermal', 1)

    // sun

    // gas giant
    buildStructure('space-gas_mining', 3)
    buildStructure('space-gas_storage', 3)

    // gas moon
    document.getElementById('space-outpost')?.children[0].click()

    // asteroid belt
    buildStructure('space-space_station', 3)
    buildStructure('space-iron_ship', 1)

    // dwarf
    buildStructure('space-elerium_contain', 1)

    // new planets
    document.getElementById('space-test_launch')?.children[0].click()
    document.getElementById('space-moon_mission')?.children[0].click()
    document.getElementById('space-red_mission')?.children[0].click()
    document.getElementById('space-hell_mission')?.children[0].click()
    document.getElementById('space-sun_mission')?.children[0].click()
    document.getElementById('space-gas_mission')?.children[0].click()
    document.getElementById('space-gas_moon_mission')?.children[0].click()
    document.getElementById('space-belt_mission')?.children[0].click()
    document.getElementById('space-dwarf_mission')?.children[0].click()
}, 60 * 1000)
