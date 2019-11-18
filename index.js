// Code your solution in this file

function findMatching(list, name){
   return list.filter(function (driverName) {
      return driverName.toLowerCase() === name.toLowerCase();
  });
  }

function fuzzyMatch(drivers, string){
    let lengthOfName = string.length;
    return drivers.filter( function (name){
        return name.slice(0, lengthOfName) === string;
    });
}

function matchName(drivers, string){
    return drivers.filter( function(driverName){
        return driverName.name.toLowerCase() === string.toLowerCase();
    });
}


