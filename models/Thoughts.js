const { Schema, model } = require('mongoose');

// Schema to create a course model
const thoughtsSchema = new Schema(
  {
    thoughtName: {
      type: String,
      required: true,
    },
    thoughtBody: {
      type: String,
      default: "Please enter text here",
    },
    users: [
      {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const Thoughts = model('thoughts', thoughtsSchema);

module.exports = Thoughts;
