const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

// function to get the note
const getNotes = (req, res) => {
  fs.readFile(path.join(__dirname, '../db/notes.json'), 'utf8', (err, notes) => {
    if (err) {
      return res.status(500).json({err});
    }
    res.json(JSON.parse(notes));
  });
};

// function to create a new note
const createNotes = (req, res) => {

  const {title, text} = req.body;
  // to create a unique id for each note items
  const id = uuidv4();

  if (title && text) {
    //  read the notes.json file
    fs.readFile(path.join(__dirname, '../db/notes.json'), 'utf8', (err, notes) => {
      //  check for errors if any happened
      if (err) {
        return res.status(500).json({err});
      }

      const data = JSON.parse(notes);

      //  add data to the array from notes.json file
      data.push({
        id,
       title,
       text,
      });
      //  write the new array to the notes.json file
      fs.writeFile(path.join(__dirname, '../db/notes.json'), JSON.stringify(data, null, 2), (err) => {

        if (err) {
          return res.status(500).json({err});
        }
        //  send newly added data to the front-end
        res.json({title, text});
      });
    });
  } else {
    res.status(400).json({error: 'Title and Text are required'});
  }

}

const deleteNotes = (req, res) => {
    //  read the notes.json file
  fs.readFile(path.join(__dirname, '../db/notes.json'), 'utf8', (err, notes) => {
    if (err) {
      return res.status(500).json({err});
    }
    let noteList = JSON.parse(notes);
    
  const id = req.params.id;
  const newNoteList = noteList.filter((notes)=> notes.id !== id);
  //  write the new array to the notes.json file
  fs.writeFile(path.join(__dirname, '../db/notes.json'), JSON.stringify(newNoteList, null, 2), (err) => {
    if (err) {
      return res.status(500).json({err});
    }
    //  send message that the note with the given id is been deleted
    res.send(`Note with ID ${id} deleted successfully`);
  });
  
}
  );
}
  

module.exports = {
  getNotes,
  createNotes,
  deleteNotes
};

