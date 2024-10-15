const mongoose = require('mongoose');

const OriginalWorkSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: true 
  },
  criticalRole: { 
    type: String, 
    required: true 
  },
  areaOfImpact: { 
    type: String, 
    required: true 
  },
  loa: {
    type: String,
    required: false
  },
  lor: { 
    type: String,
    required: false
  },
  leadershipRoles: { 
    type: String,
    required: false 
  },
  judging: { 
    type: String,
    required: false 
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  },
  updatedAt: { 
    type: Date, 
    default: Date.now 
  }
}, { timestamps: true });

module.exports = mongoose.model('OriginalWork', OriginalWorkSchema);
