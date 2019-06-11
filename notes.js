
const fs = require('fs')
const chalk = require('chalk')

const addNote = ( title , body) =>{

    const notes = loadNotes();
    //const duplicateNotes = notes.filter((note) => note.title === title)
    const duplicateNote = notes.find((note) => note.title === title)

    debugger
    
    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
    
        })
       saveNotes(notes)
       console.log("Notes added successfully......!")
    }else{
        console.log("Note already been taken.....!")
    }
   
}

const removeNote = (title) => {
  const notes = loadNotes();

  const noteToKeep = notes.filter((note) => note.title !== title)
    if(notes.length > noteToKeep.length ){
        saveNotes(noteToKeep)
        console.log(chalk.green.inverse("Note removed......!"))
    }else{
        console.log(chalk.red.inverse("No note found.....!"))
    }
    //console.log(note.title !== title)
    
}



const listNotes = () =>{
    const notes = loadNotes();
    console.log(chalk.inverse( "Your Notes..........."))

    notes.forEach((note) => {
        console.log(note.title)
    });

}

const readNotes =(title) =>{
const notes = loadNotes();

const note = notes.find((note) => note.title === title)

if(note){
    
    console.log(chalk.inverse(note.title));
    console.log(note.body);
}else{

    console.log(chalk.red.inverse("Note not found"));
}

}


const saveNotes = (notes) => {
  dataJSON =  JSON.stringify(notes);

  fs.writeFileSync('notes.json' , dataJSON);
}

const getNotes= () => {
    return "your notes.......";
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        
        return JSON.parse(dataJSON);
    }catch(e){
        return [];
    }

}

module.exports ={
    addNote: addNote,
    getNotes: getNotes,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes:readNotes
}