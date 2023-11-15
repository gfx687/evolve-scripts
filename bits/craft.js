// craft if resource is full
craftScript = setInterval(function () {
    lumber = document.getElementById("cntLumber")
    for (let i = 0; i < lumber.classList.length; i++) {
        if (lumber.classList[i] == 'has-text-warning') {
            document.getElementById('incPlywoodA').children[0].click()
            console.log('Crafter Script: plywood')
            break;
        }
    }

    iron = document.getElementById("cntIron")
    for (let i = 0; i < iron.classList.length; i++) {
        if (iron.classList[i] == 'has-text-warning') {
            document.getElementById('incWrought_IronA').children[0].click()
            console.log('Crafter Script: wrought iron')
            break;
        }
    }

    cement = document.getElementById("cntCement")
    for (let i = 0; i < cement.classList.length; i++) {
        if (cement.classList[i] == 'has-text-warning') {
            document.getElementById('incBrickA').children[0].click()
            console.log('Crafter Script: bricks')
            break;
        }
    }

    aluminum = document.getElementById("cntAluminium")
    for (let i = 0; i < aluminum.classList.length; i++) {
        if (aluminum.classList[i] == 'has-text-warning') {
            document.getElementById('incSheet_MetalA').children[0].click()
            console.log('Crafter Script: sheet metal')
            break;
        }
    }
}, 30 * 1000)
