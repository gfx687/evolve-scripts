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
