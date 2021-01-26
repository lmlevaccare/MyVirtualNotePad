# MyVirtualNotePad
Store Your Task List on the go..
This application that can be used to write, save, and delete notes. This application will use an express backend and save and retrieve note data from a JSON file.

The following HTML and API routes were created using express and Node.


GET /notes -created to return the notes.html file.
GET * - created to return the index.html file
db.json file on the backend is created and used to store and retrieve notes using the fs module.
GET /api/notes - are created to interact with the db.json file and return all saved notes as JSON.
POST /api/notes - createed to post a new note to save on the request body, add it to the db.json file, and then return the new note to the client.
DELETE /api/notes/:id - are created to query parameter containing the id of a note to delete. Each note is given a  a unique id when it's saved.

This app was deployed on Heroku. Please see link in reference below.

https://express-notepad-2020.herokuapp.com/

