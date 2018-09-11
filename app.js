//3rd Party Modules
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
//Modules
const notes = require('./notes.js');

const argv = yargs.argv;
let command = argv._[0];
console.log(`Command: ${command}`);
//console.log('Yargs: ', argv);

/* ---- Functionality --- */
let addMessage = note => {
  if (note){
    console.log('Note created');
    console.log('----');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
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
    console.log(`Title: ${curr.title}`);
    console.log(`Body: ${curr.body}`);
    console.log('----');
  });
};
let readMessage = note => {
  if (note){
    console.log('Note Read');
    console.log('----');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
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