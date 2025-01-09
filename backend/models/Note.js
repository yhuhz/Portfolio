const mongoose = require("mongoose"); // Import the mongoose module
const AutoIncrement = require("mongoose-sequence")(mongoose); // Import the mongoose-sequence module

// Schema is a class that defines the structure of the documents in a collection
// You can create a schema for a collection by passing an object to the Schema class. Example, a userSchema for a collection of users, messageSchema for a collection of messages, etc.

//THIS IS A SAMPLE SCHEMA
//You may not need to use this but you can use it as a reference
const noteSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId, // The type of the user field is an ObjectId, it needs a ref to point out to an existing model
      required: true,
      ref: "User", // The ref option is what tells Mongoose which model to use during population
    },
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true, // The timestamps option tells Mongoose to assign createdAt and updatedAt fields to your schema. The type assigned is Date.
  }
); // This noteSchema is a schema for a collection of notes. It defines a note with a user referenced from the userSchema on User.js, title of the note, text of the note or the content of the note itself, and the status of the note if completed or not.

noteSchema.plugin(AutoIncrement, {
  inc_field: "ticket",
  id: "ticketNums",
  start_sequence: 500,
}); // The plugin method is used to add a plugin to the schema. In this case, the mongoose-sequence plugin is added to the noteSchema. The plugin is used to auto-increment the ticket field of the noteSchema. The inc_field option is the field that will be auto-incremented, the id option is the name of the model that will be used to store the sequence, and the start_sequence option is the starting value of the sequence.

module.exports = mongoose.model("Note", noteSchema);
