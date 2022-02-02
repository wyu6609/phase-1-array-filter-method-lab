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

const drivers = [
  {
    name: "Bobby",
    hometown: "Pittsburgh",
  },
  {
    name: "Sammy",
    hometown: "New York",
  },
  {
    name: "Sally",
    hometown: "Cleveland",
  },
  {
    name: "Annette",
    hometown: "Los Angeles",
  },
  {
    name: "Bobby",
    hometown: "Tampa Bay",
  },
];

function matchName(array, string) {
  return array.filter((element) => {
    return element.name === string;
  });
}
