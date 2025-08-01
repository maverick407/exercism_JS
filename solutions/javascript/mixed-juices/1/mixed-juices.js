export function timeToMixJuice(name) {
  var time;
  switch (name) {
    case "Pure Strawberry Joy":
      time = 0.5;
      break;
    case "Energizer":
    case "Green Garden":
      time = 1.5;
      break;
    case "Tropical Island":
      time = 3;
      break;
    case "All or Nothing":
      time = 5;
      break;
    default:
      time = 2.5;
      break;
  }
  return Number(time);
}

export function limesToCut(wedgesNeeded, limes) {
  var wedgesCut = 0;
  var limesToCut = 0;
  var size;
  while (wedgesCut < wedgesNeeded && limes.length > 0) {
    limesToCut += 1;
    size = limes.shift();
    switch (size) {
      case "small":
        wedgesCut += 6;
        break;
      case "medium":
        wedgesCut += 8;
        break;
      case "large":
        wedgesCut += 10;
        break;
    }
  }
  return limesToCut;
}

export function remainingOrders(timeLeft, orders) {
  while (timeLeft > 0 && orders.length > 0) {
    const nextOrder = orders.shift();
    const time = timeToMixJuice(nextOrder);
    if (time > timeLeft) break;
    timeLeft -= time;
  }
  return orders;
}
