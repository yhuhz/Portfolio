# Important Note from video creator

❗ Note: If you use Mongoose version 7 or higher, the mongoose-sequence package I introduce in Chapter 3 will not work. Solutions: 1) Use this updated mongoose sequence package: [mongoose-sequence-generator](https://www.npmjs.com/package/mongoose-sequence-generator) ..or 2) Use the dependency versions I list in my package.json file for this project.

# Starting a Project Instructions

### Backend:

1. Install node.js - check with command 'node -v' and 'npm-v'
2. (Optional) Install git bash
3. Run commands:
   a. npm init -y
   b. npm i express
   c. npm i nodemon -D
4. Edit package.json "name", "description", and under scripts remove "test", add "start" and "dev" scripts.
5. Create .gitignore and add node_modules, logs
6. Just copy the rest of the files
7. Run using 'npm run dev'

### Frontend:

1. Install react using Vite. Use command **npm create vite@latest**
2. Create project name, preferably "**frontend**" to separate the folder from the backend folder.
3. Select typescript.
4. cd to the frontend folder. Run command **npm install** to install dependencies.
   ❗ Note: Dependencies are automatically ignored by Git as per Vite. You have to run the command **npm install** everytime you clone a repository. Also, make it a habit to run **npm outdated** to check for outdated dependencies. Lastly, run command **npm update** if you want to update all dependencies or **npm update <package-name>** if you want to update only selected dependencies.
5. Run command **npm run dev**
6. You can see from the **index.html** that the main file is the **main.tsx** which draws the code from the **App.tsx**, you can create a subfolder inside the **src** folder and name it **pages** so you could place all the possible pages of your project there. You can now move the **main.tsx** and **App.tsx** files there or create new files with their css. Make sure to change the directory in the **index.html** file so it could find the main file for your project.
7. Since typescript has been selected for installations, **.js** files should be **.tsx**.
8. Continue with the video tutorial.
9. Never forget to use the **rafce** shortcut when creating new files.

## Dependencies needed not included in the repo

Just run command 'npm install' and it will install all dependencies on the package.json file

### Backend:

1. npm i date-fns uuid
2. npm i cookie-parser
3. npm i cors
4. npm i dotenv
5. (Optional for a sequential number) 'npm install --save mongoose-sequence' and 'npm i mongoose-sequence-generator'. Check note above for more info.
6. npm i express-async-handler bcrypt

### Frontend:

1. npm i react-router-dom
2. npm i @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome

## TO CHANGE FROM TUTORIAL

1. It is optional to use **mongoose sequence dependencies** since we may not be yung an incremental for schemas.
2. Change the **models, controllers, and routes** to better suit your projects. Example, use a message schema for the portfolio since viewers of the portfolio don't need to register in order to leave a message.
