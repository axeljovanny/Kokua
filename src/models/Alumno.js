const mongoose = require('mongoose');
const { Schema } = mongoose;

const AluSchema = new Schema({
  nomAlu: {
    type: String,
    required: true
  },
  apeAlu: {
    type: String,
    required: true
  },
  emaAlu: {
    type: String,
    required: true
  },
  numConAlu: {
    type: String,
    required: true
  },
  carAlu: {
      type: String,
      required: true
    },
    pasAlu: {
        type: String,
        required: true
      }
});

module.exports = mongoose.model('Alumno', AluSchema);