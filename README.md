
To-Do App with ReactJS


This project implements a simple To-Do App using ReactJS.

The folder structure is as follows:

-> .git
-> node_modules
-> public
  |->favicon.ico
  |->index.html
  |->manifest.json
->src
 |->Components
     |->Title.js - The JSX file which contains code for implementing the title of the app.
     |->ToDoMain.js - The JSX file which implements the form for creating ToDo's
 |->Container
     |->ToDoItem.js - The container component which implements the actual data transfer. It communicates with the ToDoMain.js component to add new ToDo's and delete old ToDo's.

 |->styles
     |->app.css - The CSS file which contains the styling for most parts of the app.
     |->base.css - The CSS file which contains the styling for the header.

-> App.js - The file which acts as the main component.

To run the application,

a) Clone or download the project from the repository.
b) Open command line and navigate to the folder where the project is located.
c) Type npm start to run the application.
