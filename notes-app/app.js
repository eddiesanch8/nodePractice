import chalk from "chalk";

console.log(
  chalk.white.dim.bold.inverse.bgCyan(
    "Hello Helena, look at all the pretty colors"
  )
);

let serverError = "Ok that was my bad bro";
let userError = "SILLY USER, THATS INCORRECT!!!";

let errorMsg = function (err) {
  return chalk.bold.red.underline.inverse.bgWhite(`${err}`);
};

console.log(errorMsg(userError));
console.log(errorMsg(serverError));
