function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// ## Array Cardio Day 2

const people = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Irv", year: 1970 },
  { name: "Lux", year: 2015 },
];

const inventors = [
  { firstName: "Wes", secondName: "Baloo", year: 1988, passed: "2022" },
  { firstName: "Kait", secondName: "Baloo", year: 1986, passed: "2035" },
  { firstName: "Irv", secondName: "Baloo", year: 1970, passed: "2012" },
  { firstName: "Lux", secondName: "Baloo", year: 2015, passed: "2080" },
];

const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen is my fav food ever", id: 123523 },
  { text: "Nice Nice Nice!", id: 542328 },
];

// Array.filter
const old = people.filter(
  (people) => people.year >= 1970 && people.year < 1990
);
console.table(old);

// Array.map
const fullNames = inventors.map(
  (inventors) => `${inventors.firstName} ${inventors.secondName}`
);
console.table(fullNames);

// Array.sort
const ordered = inventors.sort((a, b) => (a.year > b.year ? 1 : -1));

console.table(ordered);

//sort
const oldest = inventors.sort(function (a, b) {
  const lastGuy = a.passed - a.year;
  const nextGuy = b.passed - b.year;
  return lastGuy > nextGuy ? -1 : 1;
});
console.table(oldest);
