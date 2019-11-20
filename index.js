// Code your solution in this file
function findMatching(drivers, name){
    return drivers.filter(function(driver) {return driver.toUpperCase() === name.toUpperCase();});
}

function fuzzyMatch(drivers, query){
    let result = drivers.filter(function(driver) {
       let substring = driver.substring(0, query.length)
       return query.toUpperCase() === substring.toUpperCase()
    });

    return result;
}

function matchName(drivers, name){
    return drivers.filter(function(driver){
        return driver.name === name;
    })
}