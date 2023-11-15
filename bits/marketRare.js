// buy resources from market every 60 seconds
// TODO: need to set batch size manually

iterator = 0
marketScript = setInterval(function () {
    target = ""
    switch (iterator) {
        case 0:
            console.log("Market Script: choosing Titanium, next is Alloy")
            target = 'market-Titanium'
            break;
        case 1:
            console.log("Market Script: choosing Alloy, next is Polymer")
            target = 'market-Alloy'
            break;
        case 2:
            console.log("Market Script: choosing Polymer, next is Iridium")
            target = 'market-Polymer'
            break;
        case 3:
            console.log("Market Script: choosing Iridium, next is Helium")
            target = 'market-Iridium'
            break;
        case 4:
            console.log("Market Script: choosing Helium, next is Coal")
            target = 'market-Helium_3'
            break;
        case 5:
            console.log("Market Script: choosing Coal, next is Titanium")
            target = 'market-Coal'
            break;
    }

    iterator++
    if (iterator >= 6)
        iterator = 0
}, 60 * 1000)
