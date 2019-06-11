//const chalk = require('chalk');
const notes = require('./notes.js');
const yargs = require('yargs')

//Custom  yargs version
yargs.version('1.1.0')

//Create add commond 
yargs.command({
    command: 'add',
    describe:'Add new notes',
    builder:{
        title:{
            discribe:'Note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            discribe:'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title , argv.body);
    }
})

//Create remove command
yargs.command({
    command:"remove",
    discribe:"Removing note",
    builder:{
        title:{
            discribe:'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title);
    }
});

//Create list command
yargs.command({
    command:"list",
    discribe:"list note",
    handler(){
        notes.listNotes()
    }
})


//Create read command
yargs.command({
    command:"read",
    discribe:"read note",
    builder:{
        title:{
            discribe:'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNotes(argv.title);
    }
})

yargs.parse();

//console.log(yargs.argv)



