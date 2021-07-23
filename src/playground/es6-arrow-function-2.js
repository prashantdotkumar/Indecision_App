//with ES6 arrow functions - the arguments object is no longer bound

const add = (a, b) => {
  //console.log(arguments) - this arguments object is not accessible here
  return a + b;
};

console.log(add(3, 4, 1001));

//this keyword - no longer bound

const user = {
  name: "Andrew",
  cities: ["Philedelphia", "New York", "Dublin"],
  //printPlacesLived: function () {
  //this can also be written as printPlaceslived(). can remove the function keyword
  //this.name and this.cities are accessible here. this is only accesible in ES5 functions. if we convert the printPlacesLived to and arrow function then this function will
  //try to use the this from the parent scope which is not there
  //this.name is not accessible here. If the below function is an arrow function then it can use the this from the parent
  // this.cities.forEach(function (city) {
  //   console.log(this.name + " has lived in " + city);
  // });
  // this.cities.forEach((city) => {
  //   console.log(this.name + " has lived in " + city);
  // });

  //},
  printPlacesLived() {
    //use of map. map can be used to transform the values in the array
    return this.cities.map((city) => this.name + " has lived in " + city);
  },
};

console.log(user.printPlacesLived());

const multiplier = {
  numbers: [3, 2, 5, 7],
  multiplyBy: 10,
  multiply() {
    return this.numbers.map((number) => number * this.multiplyBy);
  },
};

console.log(multiplier.multiply());
