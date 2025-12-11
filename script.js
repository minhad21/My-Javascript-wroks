// // Prompt er kaj
// let emon= prompt('Enter Your Name');

// console.log(emon);

// // Alert er kaj
// alert("Oh no this is emon's ex");

// // geneate random number
// let x=Math.trunc((Math.random()*20))+1;
// console.log(x);
//  // values and variables
//    let country = 'india';
//    let continent = 'asia';
//    let population = '170 million';
//    console.log(country);
//    console.log(continent);
//    console.log(population);

//bmi calculation challenge 2 part 1
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 95;
// const heightJohn = 1.88;

// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// const markHigherBMI = BMIMark > BMIJohn;
// console.log(BMIMark);
// console.log(BMIJohn);
// console.log(markHigherBMI);

// if (BMIMark > BMIJohn) {
//   console.log(`mark's BMI(${BMIMark}) is higher than JOhn's(${BMIJohn})`);
// } else {
//   console.log(`John's (${BMIJohn}) is higher than Mark's(${BMIMark})`);
// }

//concat operator
// console.log("This is emon's BMI" + BMIJohn);

// && and operator
// || or operator

//challenge 3 part 1 (highest avg score)
// const dolphins1 = 97;
// const dolphins2 = 112;
// const dolphins3 = 101;

// const koalas1 = 109;
// const koalas2 = 95;
// const koalas3 = 106;

// const avgDolphins = (dolphins1 + dolphins2 + dolphins3) / 3;
// const avgKoalas = (koalas1 + koalas2 + koalas3) / 3;

// if (avgDolphins > avgKoalas && avgDolphins >= 100) {
//   console.log(`The winner is Dolphins and average score is ${avgDolphins}`);
// } else if (avgKoalas > avgDolphins && avgKoalas >= 100) {
//   console.log(`The winner is Koalas and average score is ${avgKoalas}`);
// } else if (
//   avgDolphins === avgKoalas &&
//   avgDolphins >= 100 &&
//   avgKoalas >= 100
// ) {
//   console.log("The match is draw");
// } else {
//   console.log("No one is winner");
// }

// Turnary Operator
// let winner = avgDolphins > avgKoalas && avgDolphins >= 100 ? console.log(`The winner is Dolphins and average score is ${avgDolphins}`) : console.log(`The winner is Koalas and average score is ${avgKoalas}`);

// type cohersion
// let x = "20";
// let y = 20;

// if (x === y) {
//   console.log("ami emon");
// } else {
//   console.log("ami emon na");
// }

// challenge 4 part 1 (tip calculator)
// const bill1 = 275;
// const bill2 = 40;
// const bill3 = 430;

// if (50 < bill1 < 300) {
//   tip1 = (bill1 * 15) / 100;

//   console.log(
//     `the bill was ${bill1}, the tip was ${tip1}, and the total value ${
//       bill1 + tip1
//     }`
//   );
// } else {
//   tup2 = (bill1 * 20) / 100;
//   console.log(
//     `the bill was ${bill1}, the tip was ${tip2}, and the total value ${
//       bill1 + tip2
//     }`
//   );
// }

// function
// const calcAge = function (birthYear) {
//   return 2025 - birthYear;
// };

// console.log(calcAge(2002));

// function string(name, age) {
//   return `this is ${name} and age is ${age}`;
// }
// console.log(string("emon", 30));
// console.log(string("kayes", 16));

// // Arrow Function
// const calcSem = (semesterNO) => console.log(`my semester no is ${semesterNO}`);

// calcSem(8);

//challenge1 part2 (arrow function)

// const calcAvg = (p1, p2, p3) => {
//   let avg = (p1 + p2 + p3) / 3;
//   return avg;
// };

// let avgDolphins = calcAvg(86, 54, 41);
// console.log(avgDolphins);

// let avgKoalas = calcAvg(27, 34, 23);
// console.log(avgKoalas);

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins > 2 * avgKoalas) {
//     console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//     return;
//   } else if (avgKoalas > 2 * avgDolphins) {
//     console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//     return;
//   } else {
//     console.log("No one winner");
//   }
// };

// checkWinner(avgDolphins, avgKoalas);

//part 2 challenge 2 (using function and array)

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// const calcTip = function (bills) {
//   let tip;
//   const tips = [];
//   const totals = [];
//   for (let i = 0; i < bills.length; i++) {
//     if (bills[i] > 50 && bills[i] < 300) {
//       tip = bills[i] * (15 / 100);
//       tips.push(tip);
//     } else {
//       tip = bills[i] * (20 / 100);
//       tips.push(tip);
//     }
//     total = bills[i] + tip;
//     totals.push(total);
//   }
//   console.log(totals);
// };

// calcTip(bills);

// array
// const age = [2, 4, 6];
// // for (let i = 0; i < age.length; i++) {
// //   console.log(age[i]);
// // }

// challenge 3 part 2 (object and function)
const human = {
  fullname: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.mass / (this.height * this.height);
    return this.BMI;
  },
};

human.calcBMI();
console.log(human);
