const fs = require('fs');
const path = require('path');

const getUsers = (req, res) => {
  fs.readFile(path.join(__dirname, '../../db/notes.json'), 'utf8', (err, notes) => {
    if (err) {
      return res.status(500).json({err});
    }
    res.json(JSON.parse(notes));
  });
};


const createUsers = (req, res) => {

  // console.log(req.manny)// undefined
  const {title, text} = req.body;

  if (title && text) {
    //  read the users.json file
    fs.readFile(path.join(__dirname, '../../db/notes.json'), 'utf8', (err, notes) => {
      //  check for errors if any happened
      if (err) {
        return res.status(500).json({err});
      }

      const data = JSON.parse(notes);
      //  add data to the array from users.json file
      data.push({
       title,
       text,
      });

      //  write the new array to the users.json file
      fs.writeFile(path.join(__dirname, '../../db/notes.json'), JSON.stringify(data, null, 2), (err) => {

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

module.exports = {
  getUsers,
  createUsers,
};