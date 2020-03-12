// Code your solution in this file
function findMatching (drivers, string){
   return drivers.filter(driver => driver.toUpperCase() === string.toUpperCase() )
}

function fuzzyMatch(drivers, string){
    return drivers.filter(driver => driver[0].toUpperCase() === string[0].toUpperCase())
}

//my own example to visualize the object
let allDrivers = [{name: Bernard}, {name: Leo}]

function matchName (drivers, string) {
    return drivers.filter(driver => driver.name === string)

}