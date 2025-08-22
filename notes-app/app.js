#!/usr/bin/env node
// index.js
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

yargs(hideBin(process.argv))
  .command(
    "greet <name>",
    "says hello to given name",
    (yargs) => {
      yargs.positional("name", {
        describe: "The name to greet",
        type: "string",
        demandOption: true,
      });
    },
    (argv) => {
      console.log(`hello ${argv.name}!`);
    }
  )
  .command(
    "add <num1> <num2>",
    "Adds two numbers",
    (yargs) => {
      yargs
        .positional("num1", {
          describe: "First number",
          type: "number",
          demandOption: true,
        })
        .positional("num2", {
          describe: "Second number",
          type: "number",
          demandOption: true,
        });
    },
    (argv) => {
      console.log(`Sum: ${argv.num1 + argv.num2}`);
    }
  )
  .help() // Enable automatic help generation
  .demandCommand(1, "You need at least one command before moving on") // Require at least one command
  .parse(); // Parse the arguments
