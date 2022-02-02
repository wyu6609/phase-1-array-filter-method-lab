// Code your solution here

function findMatching(array, string) {
  //lowercase every element in array
  return array.filter((element) => {
    return element.toLowerCase() === string.toLowerCase();
  });
}

function fuzzyMatch(array, string) {
  // use startswith, standardize case before implementing method

  return array.filter((element) => {
    return element.toLowerCase().startsWith(string.toLowerCase());
  });
}

function matchName(array, string) {
  return array.filter((element) => {
    return element.name === string;
  });
}
