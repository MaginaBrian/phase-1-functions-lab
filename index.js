// Code your solution in this file!
// Calculate distance from HQ (assumed to be at block 42) in blocks
function distanceFromHqInBlocks(location) {
    return Math.abs(location - 42);
  }
  
  // Convert distance from HQ in blocks to feet (1 block = 264 feet)
  function distanceFromHqInFeet(location) {
    return distanceFromHqInBlocks(location) * 264;
  }
  
  // Calculate total distance traveled between start and destination in feet
  function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264;
  }
  
  // Calculate fare price based on distance traveled in feet
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
  
    // Free sample for distances up to 400 feet
    if (distance <= 400) {
      return 0;
    }
    // 2 cents per foot (after first 400 feet) for 400–2000 feet
    else if (distance <= 2000) {
      return (distance - 400) * 0.02;
    }
    // Flat $25 for distances over 2000 feet
    else if (distance <= 2500) {
      return 25;
    }
    // No rides over 2500 feet
    else {
      return "cannot travel that far";
    }
  }
  
  