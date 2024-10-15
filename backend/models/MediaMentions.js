const mongoose = require('mongoose');

const mediaMentionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  mediaType: {
    type: String,
    required: true, 
    enum: ['Newspaper', 'Magazine', 'Online Article'], 
  },
  nameOfPublication: {
    type: String,
    required: true, 
  },
  date: {
    type: Date,
    required: true, 
  },
  author: {
    type: String,
    required: true, 
  },
  url: {
    type: String,
    required: true, 
    validate: {
      validator: function(v) {
        return /^(http|https):\/\/[^ "]+$/.test(v); 
      },
      message: props => `${props.value} is not a valid URL!`
    }
  }
}, { timestamps: true }); 

const MediaMention = mongoose.model('MediaMention', mediaMentionSchema);

module.exports = MediaMention;
