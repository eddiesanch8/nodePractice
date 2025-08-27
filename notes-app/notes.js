import * as fs from "node:fs";
import chalk from "chalk";
import { json } from "stream/consumers";
// note this project uses ESM instead of CommonJS

// ------------------------------- Adding notes to our Notes App -------------------------------\\\
const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);
  // -----------------Error Handling--------------\\\

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.blue(`Note added: ${chalk.bgWhite.bold(title)}`));
  } else {
    console.log(
      chalk.red(
        `Sorry the following note already exists: ${chalk.bgWhite.bold(title)}`
      )
    );
  }
};

const saveNotes = (notesArray) => {
  const dataJSON = JSON.stringify(notesArray);
  fs.writeFileSync("notes.json", dataJSON);
};

// ------------------------------- Remove Notes -------------------------------\\\

const deleteNote = (title) => {
  const notes = loadNotes();
  const noteMatch = notes.filter((note) => {
    return note.title !== title;
  });

  if (notes.length > noteMatch.length) {
    saveNotes(noteMatch);
    console.log(chalk.green(`Note removed! ${chalk.bgWhite.bold(title)}`));
  } else {
    console.log(chalk.red.inverse("No note found!"));
  }
};

// ------------------------------- List Incomplete Notes-------------------------------\\\
const listNotes = () => {
  const notes = loadNotes();
  notes.forEach((note) =>
    console.log(
      chalk.bgWhite(
        `Title: ${note.title} To-do: ${chalk.bgBlueBright(note.body)}`
      )
    )
  );
};
// ------------------------------- Load notes function -------------------------------\\\

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const readNote = (title) => {
  const notes = loadNotes();
  const noteFetch = notes.find((note) => note.title === title);

  if (noteFetch) {
    console.log(
      chalk.bgCyan.bold.underline(
        `Title: ${noteFetch.title} || To-do: ${chalk.bgYellow.inverse(
          noteFetch.body
        )}`
      )
    );
  } else {
    console.log(
      chalk.redBright(`Error ${title} not found. No such note exists!`)
    );
  }
};

// exports usable functions
export { addNote, deleteNote, listNotes, readNote };
