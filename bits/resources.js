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

