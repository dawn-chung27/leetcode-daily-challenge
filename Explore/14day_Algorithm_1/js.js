function solution(systemNames, stepNumbers) {
  // stage_1 = 1 , 0
  // stage_2 = 10, 12
  // dragon  = 11, 111
  let obj = {};
  let result = true;
  console.log(stepNumbers.length)

  for (let idx = 0; idx < stepNumbers.length; idx++) {
      if (obj[systemNames[idx]] === undefined) obj[systemNames[idx]] = stepNumbers[idx];
      if (obj[systemNames[idx]] < stepNumbers[idx]) obj[systemNames[idx]] = stepNumbers[idx];
      if (obj[systemNames[idx]] >= stepNumbers[idx]) {
        result = false;
        console.log(obj[systemNames[idx]])
        console.log(stepNumbers[idx])
      } 
  }
 

  return result;
}

const systemNames =
["stage_1", 
 "stage_2", 
 "dragon", 
 "stage_1", 
 "stage_2", 
 "dragon"];

const stepNumbers = [1, 10, 11, 2, 12, 111]
console.log(solution(systemNames, stepNumbers)); // true

