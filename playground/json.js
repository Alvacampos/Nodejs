/*let obj = {
  name: 'Gonzalo'
};

let stringObj = JSON.stringify(obj);
console.log(typeof stringObj);
console.log(stringObj);*/

/*let personString = '{"name": "Gonzalo", "age": 28}';
let person = JSON.parse(personString);
console.log(typeof person);
console.log(person);
console.log(person.name);*/

const fs = require('fs');

let originalNote = {
  title: 'Some title',
  body: 'Some body'
};
//To String
let originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);
//To Object
let noteString = fs.readFileSync('notes.json');
let note = JSON.parse(noteString);
//Print
console.log(typeof note);
console.log(note.title);