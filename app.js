//3rd Party Modules
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
//Modules
const notes = require('./notes.js');

const title = {
  describe: 'Title of note',
  demand: true,
  alias: 't'
};
const body = {
  describe: 'Body of note',
  demand: true,
  alias: 'b'
};
const argv = yargs
  .command('add', 'Add a new note', {
    title,
    body 
  })
  .command('remove', 'Delete note', {
    title
  })
  .command('list', 'List all the notes', {
  })
  .command('read', 'Read a note', {
    title
  })
  .help()
  .argv;
let command = argv._[0];


/* ---- Functionality --- */
let Msg = (note) => {
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
};
let addMessage = note => {
  if (note){
    console.log('Note created');
    console.log('----');
    Msg(note);
  }else{
    console.log('Note already in the system');
  }
};
let deleteMessage = check => {
  if (check){
    console.log('Note Deleted');    
  }else{
    console.log('Note couldn´t be found in the system');
  }
};
let listMassage = note => {
  console.log('Note List');
  console.log('----');
  note.forEach( curr => {
    Msg(curr);
    console.log('----');
  });
};
let readMessage = note => {
  if (note){
    console.log('Note Read');
    console.log('----');
    Msg(note);
  }else{
    console.log('Note couldn´t be found in the system');
  }
};
/* ----------------- */

if (command === 'add') {  
  let note = notes.addNote(argv.title, argv.body);
  addMessage(note);  
}else if (command === 'list') {
  listMassage(notes.getAll());
}else if (command === 'read') {
  let note = notes.readNote(argv.title);
  readMessage(note);
}else if (command === 'remove') {
  let check = notes.removeNote(argv.title);
  deleteMessage(check);
}else {
  console.log('Command not recongnized');
}