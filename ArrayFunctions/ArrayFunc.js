//Array Function Exercises (assigned Thur, Mar. 1)

// return new array of positive elements (i.e., > 0)
var startArray = [-2, -1, 0, 1, 2, 3]
var posArray = startArray.filter(function(element) {
    return element > 0;
})
console.log("positive array: " + posArray);

// return array of even numbered elements
var myArray = [0, 1, 2, 3, 4, 5]

var evenArray = myArray.filter(function(element) {
    return element%2 == 0;
});
console.log("even array: " + evenArray);

// Create new array with squared numbers of original array

var squaredArray = myArray.map(function(element){
    return element**2;
})
console.log("squared array: " + squaredArray);

// Create new object/array with cities whose temp < 70 degrees

var cities = [
    { name: 'Los Angeles', temperature: 60.0},
    { name: 'Atlanta', temperature: 52.0 },
    { name: 'Detroit', temperature: 48.0 },
    { name: 'New York', temperature: 80.0 }
  ];
  console.log(cities);

  var coolCities = cities.filter(function(element) {
      return element.temperature < 70;
  });
  console.log(coolCities);
  // I can't concatenate a string & dictionary object for printing

  // Create new array containing only city names

  var cityNamesOnly = cities.map(function(element){
      return element.name;
  })
  console.log("city names: " + cityNamesOnly);

  // Print out grweeting to name
  var people = [
    'Dom',
    'Lyn',
    'Kirk',
    'Autumn',
    'Trista',
    'Jesslyn',
    'Kevin',
    'John',
    'Eli',
    'Juan',
    'Robert',
    'Keyur',
    'Jason',
    'Che',
    'Ben'
  ];
  people.forEach(function(element){
      console.log("Good job, " + element + "!");
  })

  // create sorted arry
  var sortPeople = people.sort();
  console.log(sortPeople);

  // create array sorted by length of names
 
  var sortLength = people.sort(function(a, b){
    return a.length - b.length;
  })
  console.log(sortLength);

  // create array based on sum of arrays
  var arr = [
    [1, 3, 4],
    [2, 4, 6, 8],
    [3, 6]
  ];

  sortBySum = arr.sort(function(a,b) {
    return a.reduce(function (c, d){
        return c + d;
    }, 0) - b.reduce(function(c, d){
        return c + d;
    }, 0); 
  })
  console.log(sortBySum);
// use call3Times to print "hello world" 3 times
  function call3Times(fun) {
    fun();
    fun();
    fun();
  }
  call3Times(function(){
      console.log("hello world");
  })

  // Generic CallNTimes
  function CallNTimes(num, fun) {
      for (i = 0; i < num; i++) {
          fun();
      }
  }

CallNTimes(5, function(){
    console.log("Hello, World!");
});