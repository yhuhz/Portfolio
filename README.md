# Important Note from video creator

❗ Note: If you use Mongoose version 7 or higher, the mongoose-sequence package I introduce in Chapter 3 will not work. Solutions: 1) Use this updated mongoose sequence package: https://www.npmjs.com/package/mongoos... ..or 2) Use the dependency versions I list in my package.json file for this project.

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

## Dependencies needed not included in the repo

Just run command 'npm install' and it will install all dependencies on the package.json file

### Backend:

1. npm i date-fns uuid
2. npm i cookie-parser
3. npm i cors
4. npm i dotenv
