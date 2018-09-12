//3rd Party Module
const fs = require('fs');

/* ----Functionality--- */
let fetchNotes = () => {
  try{
    return JSON.parse(fs.readFileSync('notes-data.json'));
  }catch(err){
    return [];
  }
};

let saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};
//----------------//

let addNote = (title, body) => {
  let notes = fetchNotes();
  let note = {
    title,
    body
  };
  let duplicateNotes = notes.filter(note => note.title === title);
  if(duplicateNotes.length === 0){
    notes.push(note);
    saveNotes(notes);
    return note
  }    
};
let getAll = () => {
  let notes = fetchNotes();
  return notes;
};
let readNote = (title) => {
  let notes = fetchNotes();
  let newNotes = notes.filter(note => note.title === title);
  return newNotes[0];
};
let removeNote = (title) => {
  let notes = fetchNotes();
  let newNotes = notes.filter(note => note.title !== title);
  saveNotes(newNotes);
  return notes.length !== newNotes.length;

}; 

module.exports = {
  addNote,
  getAll,
  readNote,
  removeNote
};