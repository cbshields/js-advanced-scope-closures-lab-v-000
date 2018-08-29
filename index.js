function createDriver() {
  let driverId = 0

  return class {
    constructor(name) {
      this.name = name
      this.id = ++driverId
    }
  }

}

function produceDrivingRange(range) {
  return function (startblock, endblock) {
    // solution:
    // let start = parseInt(startingBlock);
    // let end = parseInt(endingBlock);
    // let distanceToTravel = Math.abs(end - start);
    // let difference = blockRange - distanceToTravel;
    //
    // if( difference > 0){
    //   return `within range by ${difference}`
    // } else {
    //   return `${Math.abs(difference)} blocks out of range`
    // }
      let distanceTraveled =  Math.abs(parseInt(startblock) - parseInt(endblock))
      let blockRange = Math.abs(distanceTraveled - range)
      if (distanceTraveled <= range) {
        return `within range by ${blockRange}`
      } else {
        return `${blockRange} blocks out of range`
      }
  }
}

function produceTipCalculator(tip) {
  return function (fare) {
    return fare * tip
  }
}
