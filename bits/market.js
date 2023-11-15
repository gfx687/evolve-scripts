// buy resources from market every 60 seconds
// TODO: need to set batch size manually

iterator = 0
marketScript = setInterval(function () {
    target = ""
    switch (iterator) {
        case 0:
            console.log("Market Script: choosing Iridium, next is Polymer")
            target = 'market-Iridium'
            break;
        case 1:
            console.log("Market Script: choosing Polymer, next is Alloy")
            target = 'market-Polymer'
            break;
        case 2:
            console.log("Market Script: choosing Alloy, next is Titanium")
            target = 'market-Alloy'
            break;
        case 3:
            console.log("Market Script: choosing Titanium, next is Steel")
            target = 'market-Titanium'
            break;
        case 4:
            console.log("Market Script: choosing Steel, next is Cement")
            target = 'market-Steel'
            break;
        case 5:
            console.log("Market Script: choosing Cement, next is Iron")
            target = 'market-Cement'
            break;
        case 6:
            console.log("Market Script: choosing Iron, next is Copper")
            target = 'market-Iron'
            break;
        case 7:
            console.log("Market Script: choosing Copper, next is Aluminium")
            target = 'market-Copper'
            break;
        case 8:
            console.log("Market Script: choosing Aluminium, next is Uranium")
            target = 'market-Aluminium'
            break;
        case 9:
            console.log("Market Script: choosing Uranium, next is Helium")
            target = 'market-Uranium'
            break;
        case 10:
            console.log("Market Script: choosing Helium, next is Iridium")
            target = 'market-Helium_3'
            break;
    }

    iterator++
    if (iterator >= 11)
        iterator = 0
}, 60 * 1000)
