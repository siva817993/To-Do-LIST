# To-Do-LIST
Creation of a to do list using Nodejs and mongodb
A To-Do app is a simple application that helps users keep track of tasks they need to complete.
The app consists of a Node.js server that handles the backend logic and a MongoDB database that stores all the tasks. The server listens on a specific port (in this case, port 8087) and serves requests from the client.
The app allows users to create a new task by submitting a form with a task description, category, and deadline. The deadline field is optional, and if it is not specified, the task is assumed to have no deadline.
When a new task is created, it is saved to the MongoDB database. The app also provides delete functionality, which allows users to delete tasks by selecting them from a list of tasks displayed on the homepage.
To display the tasks, the app uses EJS (Embedded JavaScript) as the templating language. EJS is a simple templating language that allows you to embed JavaScript code directly in your HTML templates.
Overall, the app is a simple but powerful tool that helps users manage their tasks and stay organized.
