function fizzBuzz(number) {
  let result;
  // inside a switch expression, you should specify what you are searching for. in this case, we are looking for 'true' statements. the first case that evaluates to true will be executed, and we use break to prevent it from continuing to the next case.
  switch (true) {
    case number % 5 === 0 && number % 3 === 0:
      result = "FizzBuzz";
      break;
    case number % 3 === 0:
      result = "Fizz";
      break;
    case number % 5 === 0:
      result = "Buzz";
      break;
    // case number % 5 !== 0 || number % 3 !== 0:
    //   result = number;
    default:
      result = number;
  }
  return result;
}

module.exports = fizzBuzz;
