const inventors = [
    { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
    { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
    { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
    { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
    { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
    { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
    { first: "Max", last: "Planck", year: 1858, passed: 1947 },
    { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
    { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
    { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
    { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
    { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
  ];

  // Array.filter()
// 1. Filter the list of inventors for those who were born in the 1500's.


const inventorsBornIn1500s = inventors.filter(inventor => {
  return inventor.year >= 1500 && inventor.year < 1599;
});

console.log(inventorsBornIn1500s);


// Array.map()
// 2. Give us an array of the inventors first and last names.

const inventorsNames = inventors.map(inventor => {
    return inventor.first + " "+ inventor.last;
  });
  
  console.log(inventorsNames);



//   Array.sort()
 // 3. Sort the inventors by birthdate, oldest to youngest

 const sortedByBirthdate = inventors.sort((a, b) => {
    return b.year - a.year;
  });
  
  console.log(sortedByBirthdate);


  // Array.reduce()
// 4. How many years did all the inventors live all together ?


const totalYearsLived = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year);
  });
  
  console.log(totalYearsLived);

  // Array.every()
// 5. Did all inventors live at least 45 years ?

const allLivedAtLeast45Years = inventors.every(inventor => {
    return (inventor.passed - inventor.year) >= 45;
  });
  
  console.log(allLivedAtLeast45Years);


  // Array.some()
// 6. At least one inventor lived for 45 years?


const atLeastOneLived45Years = inventors.some(inventor => {
    return (inventor.passed - inventor.year) >= 45;
  });
  
  console.log(atLeastOneLived45Years);