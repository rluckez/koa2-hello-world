import validate from "mongoose-validator";
import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: false,
    minlength: 3
  },
  email: {
    type: String,
    lowercase: true,
    trim: true,
    required: false,
    validate: validate({
      validator: 'isEmail',
      message: 'is not valid'
    })
  }
}, {
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
  }
});

export default mongoose.model('Foo', schema)
