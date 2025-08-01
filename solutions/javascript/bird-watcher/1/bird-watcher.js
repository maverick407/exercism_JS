// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  var total = 0;
  for(var i = 0; i < birdsPerDay.length; i++){
    total += birdsPerDay[i];
  };
  return total;
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  console.log(week);
  console.log(birdsPerDay);
  var weekTotal = 0;
  var start = (week - 1 ) * 7;
  var end = week * 7;
  for(var x = start; x >= start && x < end && x < birdsPerDay.length ; x++){
    weekTotal += birdsPerDay[x];
    console.log(x+"_"+birdsPerDay[x]+"_"+weekTotal);
  }
  return weekTotal;
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {void} should not return anything
 */
export function fixBirdCountLog(birdsPerDay) {
  for (var i = 0; i < birdsPerDay.length; i++) {
    if(i % 2 == 0){
      birdsPerDay[i] += 1;
    }
  };
}
