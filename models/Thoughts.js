const { Schema, model } = require('mongoose');
const moment = require('moment');

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
    createdAt: {
      type: Date,
      default: Date.now,
      get: (val) => moment(val).format("YYYY MMM DD [at] HH:MM")
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
