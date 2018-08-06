function produceDrivingRange(blockRange) {
  return function(startingBlock, endingBlock) {
    const tripDistance = Math.abs(parseInt(startingBlock) - parseInt(endingBlock));
    const range = Math.abs(blockRange - tripDistance);
    if (blockRange >= tripDistance) {
      return `within range by ${range}`
    } else {
      return `${range} blocks out of range`
    }
  }
}

function produceTipCalculator(tip) {
  return function(fare) {
    return tip * fare;
  }
}

function createDriver(){
  let DriverId = 0
  return class {
    constructor(name){
      this.name = name;
      this.id = ++DriverId;
    }
  }
}
