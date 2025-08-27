#!/usr/bin/env node
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { addNote, deleteNote, listNotes, readNote } from "./notes.js";

debugger;
yargs(hideBin(process.argv))
  .command(
    // no need for name or describe!
    "add <title>",
    "appends a given task",
    (yargs) => {
      // BUILDER FUNCTION - Configure what this command accepts
      yargs.positional("title", {
        describe: "The title of task to complete",
        type: "string",
        demandOption: true,
      });
      yargs.option("body", {
        describe: "list of items",
        alias: ["b", "body"],
        type: "array",
        default: [],
      });
    },
    // HANDLER FUNCTION - What to do with the parsed arguments

    (argv) => {
      addNote(argv.title, argv.body);
    }
  )

  .command(
    "remove <title>",
    "Removes a given task by finding its title",
    (yargs) => {
      yargs.positional("title", {
        describe: "Task to remove",
        type: "string",
        demandOption: true,
      });
    },
    (argv) => {
      deleteNote(argv.title);
    }
  )
  .command("list", "lists out all tasks", (argv) => {
    listNotes(argv);
  })

  .command(
    "read <title>",
    "reads a specific task",
    (yargs) => {
      yargs.positional("title", {
        describe: "Task to read",
        type: "string",
        demandOption: true,
      });
    },
    (argv) => {
      readNote(argv.title);
    }
  )

  .help() // Enable automatic help generation
  // .demandCommand(1, "You need at least one command before moving on") // Require at least one command
  .parse(); // Parse the arguments
