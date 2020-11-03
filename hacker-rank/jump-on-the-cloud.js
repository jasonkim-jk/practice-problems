// Emma is playing a new mobile game that starts with consecutively numbered clouds. Some of the clouds are thunderheads and others are cumulus. She can jump on any cumulus cloud having a number that is equal to the number of the current cloud plus 1 or 2. She must avoid the thunderheads. Determine the minimum number of jumps it will take Emma to jump from her starting postion to the last cloud. It is always possible to win the game.

// For each game, Emma will get an array of clouds numbered  if they are safe or  if they must be avoided. For example,  indexed from . The number on each cloud is its index in the list so she must avoid the clouds at indexes  and . She could follow the following two paths:  or . The first path takes  jumps while the second takes .

// Complete the jumpingOnClouds function below.
// check if the given length and the first element is 0
// loop though the given array
//   check if the value of the next two element is 0 or not
//     if so, save the index to a new array and increase the current index by 2
//   check the value of the next elementt is 0
//     if so, save the index to a new array and increase the current index by 1
//   if not, break and mark as stopped condition
// return the length of the saved array
function jumpingOnClouds(c) {
  if (!c.length || !c || c[0] !== 0) return 0;

  const jumppedCloud = [];
  let currentIndex = 0;
  let stopped = false;

  while (currentIndex < c.length - 1) {
    if (c[currentIndex + 2] === 0) {
      jumppedCloud.push(currentIndex);
      currentIndex += 2;
    } else if (c[currentIndex + 1] === 0) {
      jumppedCloud.push(currentIndex);
      currentIndex += 1;
    } else {
      stopped = true;
      break;
    }
  }

  return stopped ? 0 : jumppedCloud.length;
}

console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0])); // 4
console.log(jumpingOnClouds([0, 0, 0, 1, 0, 0])); // 3
